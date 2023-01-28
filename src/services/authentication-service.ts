import { invalidCredentialsError } from "@/errors";
import { SignInParams, SignInResult } from "@/protocols";
import { userRepository } from "@/repositories";
import sessionRepository from "@/repositories/session-repository";

import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function getUserOrFail(email: string): Promise<User> {
  const user = await userRepository.findUserByEmail(email);
  if (!user) throw invalidCredentialsError();

  return user;
}

async function validatePasswordOrFail(password: string, userPassword: string): Promise<void> {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

async function createSession(userId: number): Promise<string> {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.createSession({
    token,
    userId,
  });

  return token;
}

async function signIn(params: SignInParams): Promise<SignInResult> {
  const user = await getUserOrFail(params.email);
  await validatePasswordOrFail(params.password, user.password);
  const token = await createSession(user.id);
  
  return {
    token,
  };
}

const authenticationService = {
  signIn,
};

export { authenticationService };

