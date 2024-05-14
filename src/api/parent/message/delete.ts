import { EDUCARTABLE_API_EDUCARTABLE } from "~/constants/endpoints";
import type { ApiMessagesDeleteRes } from "./types";

export const callApiParentDeleteLikes = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  user_id: number;
  message_id: number;
}): Promise<ApiMessagesDeleteRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.user_id}/messages/${input.message_id}/trash`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: input.token,
        Cookie: input.session
      }
    }
  );

  const json = (await response.json()) as ApiMessagesDeleteRes;

  return {
    success: json.success,
    data: json.data
  };
};
