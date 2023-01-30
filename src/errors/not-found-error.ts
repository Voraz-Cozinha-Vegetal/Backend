import { Errors } from "@/protocols";

export function notFoundError(): Errors {
  return {
    name: "NotFoundError",
    message: "The request didn't found any match",
  };
}
