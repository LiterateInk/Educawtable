/**
 * Compliant with OpenID Connect specification.
 * @see https://accounts.edumoov.com/auth/realms/edumoov
 */
export interface ApiTokens {
  /**
   * Token to be used in authenticated requests
   * through the "Authorization" header.
   */
  access_token: string;

  /**
   * Used to refresh the access token
   * and rotate the refresh token.
   */
  refresh_token: string;

  /**
   * Most of the time, this will be 3600 seconds (1 hour).
   */
  expires_in: number;

  /**
   * Most of the time, this will be 10800 seconds (3 hours).
   */
  refresh_expires_in: number;

  "not-before-policy": number;
  session_state: string;
  token_type: string;
  scope: string;
};
