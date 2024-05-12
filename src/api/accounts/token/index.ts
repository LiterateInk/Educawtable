import type {
  ApiAccountsTokenReq,
  ApiAccountsTokenRes,
  ApiAccountsTokenResError
} from "./types";

export const callApiAccountsToken = async (input: ApiAccountsTokenReq): Promise<ApiAccountsTokenRes> => {
  const response = await fetch("https://accounts.edumoov.com/auth/realms/edumoov/protocol/openid-connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "password",
      client_id: "educlasse",
      username: input.username,
      password: input.password,
      // Only append the property when used.
      ...(input.totp ? { totp: input.totp } : {})
    })
  });

  const data = await response.json() as ApiAccountsTokenRes | ApiAccountsTokenResError;

  if ("error" in data) { // a openid error
    throw new Error(data.error_description);
  }

  return data;
};
