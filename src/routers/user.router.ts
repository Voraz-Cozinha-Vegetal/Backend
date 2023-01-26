import { validateSchema } from "@/middlewares";
import { signUpSchema } from "@/schemas";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/sign-up", validateSchema(signUpSchema));

export { userRouter };
