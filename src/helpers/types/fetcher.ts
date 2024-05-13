/**
 * A fetcher that looks like the Fetch API
 * so every fetcher applied to Educawtable will have the
 * same API and should output the same thing.
 *
 * @example
 * import type { Fetcher } from "educawtable";
 *
 * // With the `fetch()` builtin, in TypeScript.
 * // This is actually the code for the default fetcher.
 * const fetcher: Fetcher = async (url, options) => {
 *   const response = await fetch(url, {
 *     method: options.method,
 *     headers: options.headers,
 *     // Setting a body is not allowed on GET requests.
 *     body: (options.method === "GET") ? void 0 : options.body
 *   });
 *
 *   return {
 *     headers: response.headers,
 *     json: <T>() => response.json() as T
 *   };
 * };
 */
export type Fetcher = (url: string, options: {
  method: "GET" | "POST"
  /** Headers that should be appended to the request. */
  headers?: Record<string, string> | Headers
  /** Body of the request of type given in the "Content-Type" header. */
  body?: string
}) => Promise<{
  headers: Record<string, string> | Headers
  json: <T>() => Promise<T>
}>;
