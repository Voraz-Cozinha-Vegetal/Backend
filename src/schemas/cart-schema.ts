import { CartSchema } from "@/protocols";
import Joi from "joi";

export const cartSchema = Joi.object<CartSchema>({
  productId: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
});

