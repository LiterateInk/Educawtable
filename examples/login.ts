import { callApiAccountsToken } from "~/api/accounts/token";
import { callApiUsersMe } from "~/api/users/me";

void async function() {
  const tokens = await callApiAccountsToken({
    username: "",
    password: "",
    totp: ""
  });

  const { cookies, data: me } = await callApiUsersMe({ token: tokens.access_token });

  // Now we use `tokens` and `cookies` to authenticate further requests.
}();
