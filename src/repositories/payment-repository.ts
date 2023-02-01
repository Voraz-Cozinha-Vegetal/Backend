import { prisma } from "@/config";
import { PaymentParams } from "@/protocols";
import { Payment } from "@prisma/client";

async function createPayment(data: PaymentParams): Promise<Payment> {
  return prisma.payment.create({
    data,
  });
}

const paymentRepository = {
  createPayment,
};

export { paymentRepository };
