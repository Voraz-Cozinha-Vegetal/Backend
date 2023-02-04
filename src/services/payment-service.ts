import { badRequestlError } from "@/errors";
import { PaymentParams } from "@/protocols";
import { paymentRepository } from "@/repositories";
import { Payment } from "@prisma/client";

async function postPaymentOrFail(data: PaymentParams): Promise<Payment> {
  data.historicId = Number(data.historicId);
  
  const payment = await paymentRepository.createPayment(data);
  if (!payment) throw badRequestlError();

  return payment;
}

const paymentService = {
  postPaymentOrFail,
};

export { paymentService };

