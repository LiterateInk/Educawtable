import type {
  ApiAccountsTokenReqAuth,
  ApiAccountsTokenReqRefresh,
  ApiAccountsTokenRes,
  ApiAccountsTokenResError
} from "./types";

export const callApiAccountsToken = async (input: ApiAccountsTokenReqAuth | ApiAccountsTokenReqRefresh): Promise<ApiAccountsTokenRes> => {
  // Define constants.
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

  const response = await fetch("https://accounts.edumoov.com/auth/realms/edumoov/protocol/openid-connect/token", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body
  });

  const data = await response.json() as ApiAccountsTokenRes | ApiAccountsTokenResError;

  if ("error" in data) { // a openid error
    throw new Error(data.error_description);
  }

  return data;
};
