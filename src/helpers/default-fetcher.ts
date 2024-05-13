import type { Fetcher } from "~/helpers/types/fetcher";

/**
 * Simple and default fetcher that uses `fetch`.
 */
const defaultFetcher: Fetcher = async (url, options) => {
  const response = await fetch(url, {
    method: options.method,
    headers: options.headers,
    // Setting a body is not allowed on GET requests.
    body: (options.method === "GET") ? void 0 : options.body
  });

  return {
    headers: response.headers,
    json: <T>() => response.json() as T
  };
};

export default defaultFetcher;
