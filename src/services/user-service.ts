import { existingEmailError } from "@/errors";
import { SignInParams } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";

async function createUser({ email, password }: SignInParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.insertUser({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findUserByEmail(email);
  if (userWithSameEmail) {
    throw existingEmailError();
  }
}

const userService = {
  createUser,
};

export default userService;

