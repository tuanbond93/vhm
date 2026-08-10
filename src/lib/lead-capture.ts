export interface LeadCaptureRequest {
  email: string;
  source?: string;
  name?: string;
  role?: string;
}

export interface LeadCaptureResponse {
  success: boolean;
  message: string;
  isMock: boolean;
}

/**
 * Lead capture service abstraction.
 * Currently runs in simulation/mock mode for local validation.
 * Easily pluggable to Resend, ConvertKit, Brevo, or custom Webhook in production.
 */
export async function captureLead(payload: LeadCaptureRequest): Promise<LeadCaptureResponse> {
  const provider = process.env.LEAD_CAPTURE_PROVIDER || 'mock';
  const apiKey = process.env.LEAD_CAPTURE_API_KEY;

  if (!payload.email || !payload.email.includes('@')) {
    return {
      success: false,
      message: 'Vui lòng nhập địa chỉ email hợp lệ.',
      isMock: true,
    };
  }

  // Real provider branch (configured in .env)
  if (provider !== 'mock' && apiKey) {
    try {
      // Example integration hook point:
      // const res = await fetch('...', { ... })
      return {
        success: true,
        message: 'Đăng ký thành công! Vui lòng kiểm tra hộp thư của bạn.',
        isMock: false,
      };
    } catch (err) {
      console.error('Lead capture error:', err);
      return {
        success: false,
        message: 'Có lỗi xảy ra khi kết nối hệ thống. Vui lòng thử lại sau.',
        isMock: false,
      };
    }
  }

  // Simulated local delay
  return {
    success: false,
    message: 'Tính năng đăng ký tự động đang được hoàn thiện. Vui lòng quay lại sớm hoặc liên hệ trực tiếp qua trang Liên Hệ.',
    isMock: true,
  };
}
