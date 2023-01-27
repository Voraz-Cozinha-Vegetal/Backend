import { Errors } from "@/protocols";

export function existingEmailError(): Errors {
  return {
    name: "ExistingEmailError",
    message: "The given email is already in use",
  };
}
