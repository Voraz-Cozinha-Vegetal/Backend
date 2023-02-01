import { paymentPost } from "@/controllers";
import { validateSchema, validateToken } from "@/middlewares";
import { paymentSchema } from "@/schemas";
import { Router } from "express";

const paymentRouter = Router();

paymentRouter.post("/", validateToken, validateSchema(paymentSchema), paymentPost);

export { paymentRouter };
