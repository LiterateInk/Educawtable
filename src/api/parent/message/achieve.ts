import { EDUCARTABLE_API_EDUCARTABLE } from "~/constants/endpoints";
import type { ApiMessagesRes } from "./types";

export const callApiParentAchieveMessages = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  user_id: number;
  message_id: string;
  children: Array<number>;
  action: string;
  model: string;
  body: string;
}): Promise<ApiMessagesRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.user_id}/messages/${input.message_id}/achieve`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: input.token,
        Cookie: input.session
      },
      body: JSON.stringify({
        children: input.children,
        action: input.action,
        model: input.model,
        body: input.body
      })
    }
  );

  const json = (await response.json()) as ApiMessagesRes;

  return {
    success: json.success,
    data: json.data,
    pagination: json.pagination
  };
};
