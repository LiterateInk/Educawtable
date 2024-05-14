import type { ApiUsersMe } from "./types";
import type { Fetcher } from "~/helpers/types/fetcher";

import { EDUCARTABLE_API_EDUCORE } from "~/constants/endpoints";
import readSetCookie from "~/helpers/read-set-cookie";

export const callApiUsersMe = async (fetcher: Fetcher, input: {
  token: string;
}) => {
  // NOTE: Why `?light=1` ?
  const response = await fetcher(`${EDUCARTABLE_API_EDUCORE}/users/me?light=1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": input.token
    }
  });

  const cookies = readSetCookie(response.headers);
  if (cookies.length === 0) {
    throw new Error("No cookies found");
  }

  const json = await response.json<ApiUsersMe>();

  return { cookies, data: json.data };
};
