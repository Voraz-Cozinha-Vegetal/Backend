import { Errors } from "@/protocols";

export function invalidCredentialsError(): Errors {
  return {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect",
  };
}
