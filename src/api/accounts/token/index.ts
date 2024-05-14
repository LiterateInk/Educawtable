import type { Fetcher } from "~/helpers/types/fetcher";
import type {
  ApiAccountsTokenReqAuth,
  ApiAccountsTokenReqRefresh,
  ApiAccountsTokenResError
} from "./types";
import type { ApiTokens } from "~/constants/types/tokens";

export const callApiAccountsToken = async (fetcher: Fetcher, input: ApiAccountsTokenReqAuth | ApiAccountsTokenReqRefresh) => {
  let body = "client_id=educlasse&";

  if ("username" in input) { // we're authenticating
    body += `grant_type=password&username=${encodeURIComponent(input.username)}&password=${encodeURIComponent(input.password)}`;
    if (input.totp) {
      body += `&totp=${encodeURIComponent(input.totp)}`;
    }
  }
  else { // we're refreshing the token
    body += `grant_type=refresh_token&refresh_token=${input.refreshToken}&scope=${input.scope}`;
  }

  const response = await fetcher("https://accounts.edumoov.com/auth/realms/edumoov/protocol/openid-connect/token", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body
  });

  const data = await response.json<ApiTokens | ApiAccountsTokenResError>();

  if ("error" in data) { // a openid error
    throw new Error(data.error_description);
  }

  return data;
};
