import { NextResponse } from 'next/server';
import { captureLead, type LeadCaptureRequest } from '@/lib/lead-capture';
import { readJsonBodyWithLimit, RequestBodyTooLargeError } from '@/lib/request-body';

const MAX_BODY_BYTES = 10 * 1024;

export async function POST(request: Request) {
  try {
    // 1. Fast header rejection plus authoritative streamed byte enforcement.
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, message: 'Dữ liệu gửi quá lớn.', delivery_status: 'failed', isMock: false },
        { status: 400 }
      );
    }

    const body = await readJsonBodyWithLimit(request, MAX_BODY_BYTES);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new SyntaxError('Request body must be a JSON object.');
    }

    // 2. Extract Client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const result = await captureLead({ ...(body as LeadCaptureRequest), ip });

    // 3. Truthful HTTP Status Semantics
    if (result.db_error) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Hệ thống đang bận. Vui lòng thử lại sau ít phút.',
          delivery_status: 'failed',
          isMock: false,
        },
        { status: 500 }
      );
    }

    if (result.error_code === 'service_unavailable') {
      return NextResponse.json(result, { status: 503 });
    }

    if (result.error_code === 'rate_limited') {
      return NextResponse.json(result, {
        status: 429,
        headers: {
          'Retry-After': String(result.retry_after_seconds || 600),
        },
      });
    }

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    if (err instanceof RequestBodyTooLargeError) {
      return NextResponse.json(
        { success: false, message: 'Dữ liệu gửi quá lớn.', delivery_status: 'failed', isMock: false },
        { status: 400 }
      );
    }
    console.error('[API Lead Exception]:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.',
        delivery_status: 'failed',
        isMock: false,
      },
      { status: 400 }
    );
  }
}
