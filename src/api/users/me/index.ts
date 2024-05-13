import { EDUCARTABLE_API_EDUCORE } from "~/constants/url";
import type { ApiUsersMe, ECApiUsersMe } from "./types";

export const callApiUsersMe = async (input: {
  token: string;
}): Promise<ApiUsersMe> => {
  // NOTE: Why `?light=1` ?
  const response = await fetch(`${EDUCARTABLE_API_EDUCORE}/users/me?light=1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": input.token
    }
  });

  const cookies = response.headers.get("set-cookie") || "";
  if (!cookies) {
    throw new Error("No cookies found");
  }

  const cookie = cookies.split(";")[0];
  const json = await response.json() as ECApiUsersMe;

  return { cookies: [cookie], data: json.data };
};
