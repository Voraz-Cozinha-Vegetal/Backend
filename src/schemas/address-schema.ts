import { AddressParams } from "@/protocols";
import Joi from "joi";

export const addressSchema = Joi.object<AddressParams>({
  state: Joi.string().valid("RJ").required(),
  city: Joi.string().valid("Niteroi").required(),
  neighborhood: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  complement: Joi.any(),
});
