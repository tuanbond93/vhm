export class RequestBodyTooLargeError extends Error {}

/** Read a request stream while enforcing the actual UTF-8 byte limit. */
export async function readJsonBodyWithLimit(
  request: Request,
  maxBytes: number
): Promise<unknown> {
  if (!request.body) return {};

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let byteCount = 0;
  let text = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      byteCount += value.byteLength;
      if (byteCount > maxBytes) {
        await reader.cancel();
        throw new RequestBodyTooLargeError(`Request body exceeds ${maxBytes} bytes.`);
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } finally {
    reader.releaseLock();
  }

  return JSON.parse(text);
}
