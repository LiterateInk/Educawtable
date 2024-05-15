import { Family, authenticate, defaultFetcher } from "../src"; // Replace "../src" with "educawtable".
import { credentials } from "./_credentials";

void async function () {
  const family = await authenticate({
    username: credentials.username,
    password: credentials.password,
    totp: credentials.totp,

    // You can use a custom fetcher, if you want.
    fetcher: defaultFetcher
  });

  // Do whatever you want with the family instance.
  const user = await family.getParentUser();
  console.log(user.id, ":", user.name, user.firstname);

  // You can manually refresh the tokens, if needed.
  await family.tokens.refresh();

  // You can also export the tokens to use them later.
  const tokens = family.tokens.export();

  // And create a new family with the exported tokens.
  const familyWithExportedTokens = new Family(defaultFetcher, tokens);

  // You can use the new family instance to make authenticated requests, just like earlier.
  const userWithExportedTokens = await familyWithExportedTokens.getParentUser();
  console.log(userWithExportedTokens.id, ":", userWithExportedTokens.name, userWithExportedTokens.firstname);
}();
