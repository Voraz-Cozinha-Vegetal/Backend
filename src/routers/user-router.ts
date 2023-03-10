import { userPost } from "@/controllers";
import { validateSchema } from "@/middlewares";
import { signUpSchema } from "@/schemas";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/", validateSchema(signUpSchema), userPost);

export { userRouter };
