import { NextResponse } from 'next/server';
import { captureLead } from '@/lib/lead-capture';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await captureLead(body);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Yêu cầu không hợp lệ.', isMock: true },
      { status: 400 }
    );
  }
}
