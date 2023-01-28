import { Errors } from "@/protocols";

export function badRequestlError(): Errors {
  return {
    name: "BadRequestError",
    message: "Something went wrong with the request",
  };
}
