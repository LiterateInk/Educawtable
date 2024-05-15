import { config } from "dotenv";
import { join } from "node:path";
// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

// Export the credentials.
export const credentials = {
  username: process.env.FAMILY_USERNAME!,
  password: process.env.FAMILY_PASSWORD!,
  totp: process.env.FAMILY_TOTP
};

class ExampleCredentialsError extends Error {
  constructor() {
    super("You need to provide credentials in the `.env` file.");
  }
}

if (!credentials.username || !credentials.password) {
  throw new ExampleCredentialsError();
}
