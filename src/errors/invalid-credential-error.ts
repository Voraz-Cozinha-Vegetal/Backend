import { Errors } from "@/protocols";

export function invalidCredentialsError(): Errors {
  return {
    name: "InvalidCredentialsError",
    message: "email and/or password are incorrect",
  };
}
