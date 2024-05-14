import { EDUCARTABLE_API_EDUCARTABLE } from "~/constants/endpoints";
import type { ApiMessagesRes } from "./types";

export const callApiParentAddLikes = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  children: Array<number>;
  title: string;
  body: string;
  lang: string;
}): Promise<ApiMessagesRes> => {
  const response = await fetch(
    `${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.id}/messages`,
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
        title: input.title,
        body: input.body,
        lang: input.lang
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
