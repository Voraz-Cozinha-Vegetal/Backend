import { Errors } from "@/protocols";

export function productUnavailableError(): Errors {
  return {
    name: "ProductUnavailableError",
    message: "This product is currently unavailable",
  };
}
