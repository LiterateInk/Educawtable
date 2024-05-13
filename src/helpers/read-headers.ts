export default function readHeaders (headers: Record<string, string> | Headers, item: string): string | null {
  return headers instanceof Headers ? headers.get(item) : headers[item];
};
