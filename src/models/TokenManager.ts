import type { ApiTokens } from "~/constants/types/tokens";
import type { ApiUser } from "~/constants/types/user";
import { Fetcher } from "..";
import { callApiAccountsToken } from "~/api/accounts/token";

/**
 * A manager to simplify the handling of tokens.
 */
class TokenManager {
  readonly #fetcher: Fetcher;
  #tokens: ApiTokens;

  public constructor (fetcher: Fetcher, tokens: ApiTokens) {
    this.#fetcher = fetcher;
    this.#tokens = tokens;
  }

  /**
   * The access token to be used in authenticated requests.
   * @since 0.1.0
   */
  public get accessToken (): string {
    return this.#tokens.access_token;
  }

  /**
   * Whenever you want to export the current tokens
   * so you can store them somewhere else and reuse them later.
   *
   * @since 0.1.0
   *
   * @example
   * // Let's say you already have a `Family` instance in `family` and a `fetcher`.
   * const tokens = family.tokens.export();
   * const familyWithExportedTokens = new Family(fetcher, tokens, family.parentUser);
   * // Now, you can use `familyWithExportedTokens` to make authenticated requests.
   */
  public export (): ApiTokens {
    return this.#tokens;
  }

  public async refreshTokens (): Promise<void> {
    const tokens = await callApiAccountsToken(this.#fetcher, {
      refreshToken: this.#tokens.refresh_token,
      scope: this.#tokens.scope
    });

    this.#tokens = tokens;
  }
}

export default TokenManager;
