import { postProduct } from "@/controllers";
import { validateSchema, validateToken } from "@/middlewares";
import { productSchema } from "@/schemas";

import { Router } from "express";

const productRouter = Router();

productRouter.post("/", validateToken, validateSchema(productSchema), postProduct);

export { productRouter };
