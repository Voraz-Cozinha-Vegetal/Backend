import { CartId, CartSchema } from "@/protocols";
import Joi from "joi";

export const cartSchema = Joi.object<CartSchema>({
  productId: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
});

export const deleteCartItemSchema = Joi.object<CartId>({
  cartId: Joi.number().integer().positive().required(),
});

