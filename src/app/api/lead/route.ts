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
    return NextResponse.json(result);
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
