import type { ApiUsersMe } from "./types";

import { EDUCARTABLE_API_EDUCORE } from "~/constants/endpoints";
import readSetCookie from "~/helpers/read-set-cookie";
import Family from "~/models/Family";

export const callApiUsersMe = async (manager: Family) => {
  const response = await manager.fetcher(`${EDUCARTABLE_API_EDUCORE}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": manager.tokens.accessToken
    }
  });

  const cookies = readSetCookie(response.headers);
  if (cookies.length === 0) {
    throw new Error("No cookies found");
  }

  const json = await response.json<ApiUsersMe>();

  return { cookies, data: json.data };
};
