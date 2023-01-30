import { dropCartItem, getUserCart, postCartItem } from "@/controllers";
import { validateSchema, validateToken } from "@/middlewares";
import { cartSchema, deleteCartItemSchema } from "@/schemas";
import { Router } from "express";

const cartRouter = Router();

cartRouter.get("/", validateToken, getUserCart),
cartRouter.post("/", validateToken, validateSchema(cartSchema), postCartItem),
cartRouter.delete("/", validateToken, validateSchema(deleteCartItemSchema), dropCartItem);

export { cartRouter };
