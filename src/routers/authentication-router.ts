import { singInPost } from "@/controllers";
import { validateSchema } from "@/middlewares";
import { signInSchema } from "@/schemas";

import { Router } from "express";

const authRouter = Router();

authRouter.post("/", validateSchema(signInSchema), singInPost);

export { authRouter };
