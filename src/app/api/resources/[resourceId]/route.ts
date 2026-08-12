import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyResourceAccessToken } from '@/lib/resource-access';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ resourceId: string }> }
) {
  try {
    const { resourceId } = await params;

    const token = new URL(request.url).searchParams.get('token');
    if (!token) {
      return NextResponse.json(
        { error: 'Resource authorization required' },
        { status: 401, headers: { 'Cache-Control': 'private, no-store' } }
      );
    }

    if (!verifyResourceAccessToken(token, resourceId)) {
      return NextResponse.json(
        { error: 'Resource authorization is invalid or expired' },
        { status: 403, headers: { 'Cache-Control': 'private, no-store' } }
      );
    }

    // Strict resource ID whitelist & path traversal prevention
    const ALLOWED_RESOURCES: Record<string, string> = {
      'ai-prompt-kit-ops-v1': path.join(
        process.cwd(),
        'assets',
        'lead-magnet',
        'van-hanh-moi-ai-prompt-kit-ops-v1.pdf'
      ),
    };

    const filePath = ALLOWED_RESOURCES[resourceId];

    if (!filePath || !fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="van-hanh-moi-ai-prompt-kit-ops-v1.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'private, no-store',
      },
    });
  } catch (err) {
    console.error('Resource endpoint error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
