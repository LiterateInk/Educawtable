import { EDUCARTABLE_RPC } from "~/constants/endpoints";
import type { ApiSurveyAnswerAddRes } from "./types";

export const callApiDeleteAnswer = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  message_id: number;
  children: number;
  survey_id: string;
  answer_id: Array<string>;
}): Promise<ApiSurveyAnswerAddRes> => {
  const response = await fetch(
    `${EDUCARTABLE_RPC}/parent.messages.answerSurvey`,
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
          id: input.message_id,
          pupil_id: input.children
        },
        payload: {
          answers: {
            [input.survey_id]: input.answer_id
          }
        }
      })
    }
  );

  const json = (await response.json()) as ApiSurveyAnswerAddRes;

  return {
    success: json.success,
    data: json.data
  };
};
