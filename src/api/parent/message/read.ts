import { EDUCARTABLE_API_EDUCARTABLE } from "~/constants/endpoints";
import type { ApiMessagesRes } from "./types";

export const callApiParentMessages = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  type: string[];
  sort?: string;
  direction: string;
  start?: string;
  limit?: number;
}): Promise<ApiMessagesRes> => {
  const requests = `${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.id}/messages?type=${input.type.join("%2C")}&direction=${input.direction}`;

  if (input.sort) {
    requests.concat(`&sort=${input.sort}`);
  }
  if (input.start) {
    requests.concat(`&start=${input.start}`);
  }
  if (input.limit) {
    requests.concat(`&limit=${input.limit}`);
  }

  const response = await fetch(requests, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: input.token,
      Cookie: input.session
    }
  });

  const json = (await response.json()) as ApiMessagesRes;

  return {
    success: json.success,
    data: json.data,
    pagination: json.pagination
  };
};
