import { PaymentParams } from "@/protocols";
import Joi from "joi";

export const paymentSchema = Joi.object<PaymentParams>({
  historicId: Joi.number().integer().positive().required(),
  value: Joi.number().integer().positive().required(),
  cardIssuer: Joi.string().required(),
  cardLastDigits: Joi.string().required(),
});

