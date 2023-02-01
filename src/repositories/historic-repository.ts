import { prisma } from "@/config";
import { HistoricParams, UpdateHistoric } from "@/protocols";
import { Historic, PaymentStatus } from "@prisma/client";

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

async function findReservedUserStatus(userId: number): Promise<Historic[]> {
  return prisma.historic.findMany({
    where: {
      userId,
      status: PaymentStatus.RESERVED
    }
  });
}

async function updatePaymentStatus(data: UpdateHistoric): Promise<Historic> {
  return prisma.historic.update({
    where: {
      id: data.historicId,
    },
    data: {
      status: data.status
    }
  });
}

const historicRepository = {
  createUserHistoric,
  findUserHistoric,
  findHistorics,
  findReservedUserStatus,
  updatePaymentStatus,
};

export { historicRepository };
