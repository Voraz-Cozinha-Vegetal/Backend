import { Errors } from "@/protocols";

export function unauthorizedError(): Errors {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}
