import { EDUCARTABLE_API_EDUCORE } from "~/constants/url";
import type { ApiParentLikeDeleteRes } from "./types";

export const callApiParentDeleteLikes = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  user_id: number;
  like_id: number;
}): Promise<ApiParentLikeDeleteRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCORE}/parent/${input.user_id}/likes/${input.like_id}`,
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

  const json = (await response.json()) as ApiParentLikeDeleteRes;

  return {
    success: json.success,
    data: json.data
  };
};
