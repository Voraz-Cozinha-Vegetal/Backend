
import { getHistoric, getHistoricsAdmin, historicPost } from "@/controllers";
import { validateToken } from "@/middlewares";
import { Router } from "express";

const historicRouter = Router();

historicRouter.get("/admin", validateToken, getHistoricsAdmin),
historicRouter.get("/", validateToken, getHistoric),
historicRouter.post("/", validateToken, historicPost);

export { historicRouter };
