export interface ApiAccountsTokenReqRefresh {
  refreshToken: string;
  scope: string
};

/**
 * Base authentication request parameters.
 */
export interface ApiAccountsTokenReqAuth {
  /**
   * Most of the time, this is the email of the user.
   */
  username: string;
  password: string;

  /**
   * A string of 6 digits,
   * use only if you have MFA enabled.
   */
  totp?: string;
};

export interface ApiAccountsTokenResError {
  /**
   * Type of the error.
   */
  error: string;
  /**
   * Description of the error.
   */
  error_description: string;
};
