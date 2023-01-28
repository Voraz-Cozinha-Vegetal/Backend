import { prisma } from "@/config";
import { SessionParams } from "@/protocols";
import { Session } from "@prisma/client";

async function createSession({ userId, token }: SessionParams): Promise<Session> {
  return prisma.session.create({
    data: {
      userId,
      token
    }
  });
}

const sessionRepository = {
  createSession,
};

export default sessionRepository;
