import { Errors } from "@/protocols";

export function existingUserAddressError(): Errors {
  return {
    name: "ExistingUserAddressError",
    message: "This user already have a registered address",
  };
}
