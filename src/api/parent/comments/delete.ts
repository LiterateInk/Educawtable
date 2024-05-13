import { EDUCARTABLE_API_EDUCORE } from "~/constants/url";
import type { ApiCommentsDeleteRes } from "./types";

export const callApiParentDeleteComments = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  user_id: number;
  comment_id: number;
}): Promise<ApiCommentsDeleteRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCORE}/parent/${input.user_id}/comments/${input.comment_id}/trash`,
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

  const json = (await response.json()) as ApiCommentsDeleteRes;

  return {
    success: json.success,
    data: json.data
  };
};
