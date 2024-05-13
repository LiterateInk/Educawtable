import cookieParser from "set-cookie-parser";
import readHeaders from "~/helpers/read-headers";

export const retrieveResponseCookies = (headers: Record<string, string> | Headers): string[] => {
  const setCookieHeader = readHeaders(headers, "set-cookie");
  if (setCookieHeader === null) return [];

  const splittedCookies = cookieParser.splitCookiesString(setCookieHeader);
  const cookies = splittedCookies.map((cookie) => cookie.split(";")[0]);

  return cookies;
};
