import { EDUCARTABLE_RPC } from "~/constants/endpoints";
import type { ApiSurveyAnswerDeleteRes } from "./types";

export const callApiDeleteAnswer = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  children: number;
}): Promise<ApiSurveyAnswerDeleteRes> => {
  const response = await fetch(
    `${EDUCARTABLE_RPC}/parent.messages.deleteAnswerSurvey`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: input.token,
        Cookie: input.session
      },
      body: JSON.stringify({
        params: {
          id: input.id,
          pupil_id: input.children
        },
        payload: {}
      })
    }
  );

  const json = (await response.json()) as ApiSurveyAnswerDeleteRes;

  return {
    success: json.success,
    data: json.data
  };
};
