import { ProdcutBody, ProductUpdate } from "@/protocols";
import Joi from "joi";

export const productSchema = Joi.object<ProdcutBody>({
  name: Joi.string().empty().required(),
  description: Joi.string().empty().required(),
  image: Joi
    .string()
    .empty()
    .pattern(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.,~#?&/=]*)$/
    )
    .required(),
  price: Joi.number().integer().positive().required(),
  stock: Joi.number().integer().required(),
});

export const productUpdateSchema = Joi.object<ProductUpdate>({
  productId: Joi.number().integer().positive().required(),
  price: Joi.number().integer().positive(),
  stock: Joi.number().integer(),
  available: Joi.boolean(),
});
