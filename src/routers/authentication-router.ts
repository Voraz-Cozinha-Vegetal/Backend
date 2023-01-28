import { singInPost } from "@/controllers";
import { validateSchema } from "@/middlewares";
import { signInSchema } from "@/schemas";

import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-in", validateSchema(signInSchema), singInPost);

export { authRouter };
