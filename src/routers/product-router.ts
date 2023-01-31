import { getProducts, getProductsAdmin, postProductAdmin, putProductAdmin } from "@/controllers";
import { validateSchema, validateToken } from "@/middlewares";
import { productSchema, productUpdateSchema } from "@/schemas";
import { Router } from "express";

const productRouter = Router();

productRouter.post("/admin", validateToken, validateSchema(productSchema), postProductAdmin),
productRouter.put("/admin", validateToken, validateSchema(productUpdateSchema), putProductAdmin),
productRouter.get("/admin", validateToken, getProductsAdmin),
productRouter.get("/", getProducts);

export { productRouter };
