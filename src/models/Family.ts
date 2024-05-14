import type { ApiTokens } from "~/constants/types/tokens";
import type { ApiUser } from "~/constants/types/user";
import type { Fetcher } from "~/helpers/types/fetcher";
import TokenManager from "~/models/TokenManager";
import { callApiUsersMe } from "~/api/users/me";

class Family {
  public readonly tokens: TokenManager;
  public readonly fetcher: Fetcher;

  public constructor (fetcher: Fetcher, tokens: ApiTokens) {
    this.tokens = new TokenManager(fetcher, tokens);
    this.fetcher = fetcher;
  }

  #parentUserCache: ApiUser | null = null;

  /**
   * Get the root user of the family : the one who created the family account.
   *
   * **Note that this method caches the response.**
   * When no cache is present, it will make a request to the API asynchronously and return the result.
   * Otherwise, it will return the cached response immediately.
   *
   * @since 0.1.0
   */
  public async getParentUser (): Promise<ApiUser> {
    if (this.#parentUserCache === null) {
      const response = await callApiUsersMe(this);
      this.#parentUserCache = response.data;
    }

    return this.#parentUserCache;
  }
}

export default Family;
