import { EDUCARTABLE_API_CORE } from "~/constants/endpoints";
import type { ApiParentLikeAddRes } from "./types";

export const callApiParentAddLikes = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  key: string;
  model: string;
}): Promise<ApiParentLikeAddRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_CORE}/parent/${input.id}/likes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: input.token,
        Cookie: input.session
      },
      body: JSON.stringify({
        key: input.key,
        model: input.model
      })
    }
  );

  const json = (await response.json()) as ApiParentLikeAddRes;

  return {
    success: json.success,
    data: json.data
  };
};
