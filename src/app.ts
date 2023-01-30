import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "@/config";
import { 
  addressRouter, 
  authRouter, 
  cartRouter, 
  productRouter, 
  userRouter 
} from "@/routers";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/sign-up", userRouter)
  .use("/sign-in", authRouter)
  .use("/products", productRouter)
  .use("/cart", cartRouter)
  .use("/address", addressRouter);
  
export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
