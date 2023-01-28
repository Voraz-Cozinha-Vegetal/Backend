import { ProdcutBody } from "@/protocols";
import { productService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postProduct(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  const productBody = req.body as ProdcutBody;

  try {
    await productService.validateAdmin(userId);
    const product = await productService.insertProduct(productBody);

    return res.status(httpStatus.CREATED).send(product);
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
