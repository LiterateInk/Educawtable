import { EDUCARTABLE_API_EDUCORE } from "~/constants/url";
import type { ApiCommentsWriteRes } from "./types";

export const callApiParentWriteComments = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  model: string;
  key: string;
  body: string;
  lang: string;
  reply: any | null;
}): Promise<ApiCommentsWriteRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCORE}/parent/${input.id}/comments`,
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
        model: input.model,
        body: input.body,
        lang: input.lang,
        reply: input.reply
      })
    }
  );

  const json = (await response.json()) as ApiCommentsWriteRes;

  return {
    success: json.success,
    data: json.data
  };
};
