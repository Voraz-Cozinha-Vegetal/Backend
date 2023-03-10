import { prisma } from "@/config";
import { SignInParams } from "@/protocols";
import { User } from "@prisma/client";

async function findUserByEmail(email: string): Promise<User> {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
}

async function findUserById(userId: number): Promise<User> {
  return prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
}

async function insertUser({ email, password }: SignInParams): Promise<User> {
  return prisma.user.create({
    data: {
      email,
      password
    }
  });
}

const userRepository = {
  findUserByEmail,
  findUserById,
  insertUser,
};

export { userRepository };
