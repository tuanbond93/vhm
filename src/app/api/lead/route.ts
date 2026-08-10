import { NextResponse } from 'next/server';
import { captureLead } from '@/lib/lead-capture';

export async function POST(request: Request) {
  try {
    // 1. Content-Length / payload size protection (max 10KB)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 10240) {
      return NextResponse.json(
        { success: false, message: 'Dữ liệu gửi quá lớn.', delivery_status: 'failed', isMock: false },
        { status: 400 }
      );
    }

    const body = await request.json();

    // 2. Extract Client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const result = await captureLead({ ...body, ip });

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

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
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
