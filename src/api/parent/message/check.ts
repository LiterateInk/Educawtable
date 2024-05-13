import { EDUCARTABLE_API_EDUCARTABLE } from "~/constants/endpoints";
import type { ApiMessagesCheckRes } from "./types";

export const callApiParentCheckMessages = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  user_id: number;
  message_id: string;
  recipient_id: string[];
  checked: boolean;
}): Promise<ApiMessagesCheckRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.user_id}/messages/${input.message_id}/check`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: input.token,
        Cookie: input.session
      },
      body: JSON.stringify({
        recipient_id: input.recipient_id,
        checked: input.checked
      })
    }
  );

  const json = (await response.json()) as ApiMessagesCheckRes;

  return {
    success: json.success,
    data: json.data
  };
};
