import { EDUCARTABLE_API_EDUCORE } from "~/constants/endpoints";
import type { ApiParentPupilsRes } from "./types";

export const callApiParentPupils = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
}): Promise<ApiParentPupilsRes> => {
  const response = await fetch(`${EDUCARTABLE_API_EDUCORE}/parent/${input.id}/pupils`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: input.token,
      Cookie: input.session
    }
  });

  const json = (await response.json()) as ApiParentPupilsRes;

  return {
    success: json.success,
    data: json.data,
    pagination: json.pagination
  };
};
