import { EDUCARTABLE_API_EDUCORE } from "~/constants/url";
import type { ApiCommentsReadRes } from "./types";

export const callApiParentReadComments = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  model: string;
  key: string;
}): Promise<ApiCommentsReadRes> => {
  const response = await fetch(`${EDUCARTABLE_API_EDUCORE}/parent/${input.id}/comments?model=${input.model}&key=${input.key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: input.token,
      Cookie: input.session
    }
  });

  const json = (await response.json()) as ApiCommentsReadRes;

  return {
    success: json.success,
    data: json.data,
    pagination: json.pagination
  };
};
