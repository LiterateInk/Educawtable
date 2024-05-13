export interface ApiAccountsTokenReqRefresh {
  refreshToken: string;
  scope: string
};

export interface ApiAccountsTokenReqAuth {
  username: string;
  password: string;
  /** Use only if you have MFA enabled. */
  totp?: string;
};

export interface ApiAccountsTokenResError {
  error: string;
  error_description: string;
};

export interface ApiAccountsTokenRes {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
};
