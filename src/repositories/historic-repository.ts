import { prisma } from "@/config";
import { HistoricParams } from "@/protocols";
import { Historic } from "@prisma/client";

async function createUserHistoric(data: HistoricParams): Promise<Historic> {
  return prisma.historic.create({
    data,
  });
}

async function findUserHistoric(userId: number): Promise<Historic[]> {
  return prisma.historic.findMany({
    where: {
      userId,
    }
  });
}

async function findHistorics(): Promise<Historic[]> {
  return prisma.historic.findMany({});
}

const historicRepository = {
  createUserHistoric,
  findUserHistoric,
  findHistorics,
};

export { historicRepository };
