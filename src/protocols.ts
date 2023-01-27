import { User } from "@prisma/client";

export type Errors = {
    name: string;
    message: string;
};

export type SignInParams = Pick<User, "email" | "password">;

export type SignUpBody = {
  email: string,
  password: string,
  confirmPassword: string
}
