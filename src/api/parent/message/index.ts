import { EDUCARTABLE_API_EDUCARTABLE } from "~/constants/url";

export const callApiParentMessages = async (input: {
  /** Auth */
  token: string;
  session: string;
  /** Request parameters */
  id: number;
  type: string;
  sort: string;
  direction: string;
  start: string;
  limit: number;
}): Promise<any> => {
  const response = await fetch(`${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.id}/messages?type=${input.type}&sort=${input.sort}&direction=${input.direction}&start=${input.start}&limit=${input.limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: input.token,
      Cookie: input.session
    }
  });

  console.log(`${EDUCARTABLE_API_EDUCARTABLE}/parent/${input.id}/messages?type=${input.type}&sort=${input.sort}&direction=${input.direction}&start=${input.start}&limit=${input.limit}`);

  const json = (await response.json()) as any;

  return { data: json.data };
};
