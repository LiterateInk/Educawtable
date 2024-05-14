import { callApiAccountsToken } from "~/api/accounts/token";
import { Fetcher } from "~/helpers/types/fetcher";
import defaultFetcher from "./default-fetcher";
import Family from "~/models/Family";
import { callApiUsersMe } from "~/api/users/me";
import type { ApiAccountsTokenReqAuth } from "~/api/accounts/token/types";

export interface AuthenticationParameters extends ApiAccountsTokenReqAuth {
  /** Will default to `defaultFetcher` if not given. */
  fetcher?: Fetcher;
}

export default async function authenticate ({ fetcher = defaultFetcher, ...credentials }: AuthenticationParameters): Promise<Family> {
  const tokens = await callApiAccountsToken(fetcher, credentials);
  const me = await callApiUsersMe(fetcher, { token: tokens.access_token });

  return new Family(tokens, me.data, me.cookies);
}
