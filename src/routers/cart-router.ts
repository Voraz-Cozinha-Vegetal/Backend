import { dropCartItem, getUserCart, postCartItem } from "@/controllers";
import { validateSchema, validateToken } from "@/middlewares";
import { cartSchema } from "@/schemas";
import { Router } from "express";

const cartRouter = Router();

cartRouter.get("/", validateToken, getUserCart),
cartRouter.post("/", validateToken, validateSchema(cartSchema), postCartItem),
cartRouter.delete("/:cartId", validateToken, dropCartItem);

export { cartRouter };
