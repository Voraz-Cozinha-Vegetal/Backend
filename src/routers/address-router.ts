import { userAddressPost, userAddressPut } from "@/controllers";
import { validateSchema, validateToken } from "@/middlewares";
import { addressSchema } from "@/schemas";
import { Router } from "express";

const addressRouter = Router();

addressRouter.post("/", validateToken, validateSchema(addressSchema), userAddressPost),
addressRouter.put("/", validateToken, validateSchema(addressSchema), userAddressPut);

export { addressRouter };
