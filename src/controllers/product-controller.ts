import { ProdcutBody, ProductUpdate } from "@/protocols";
import { productService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postProductAdmin(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  const productBody = req.body as ProdcutBody;

  try {
    await productService.validateAdmin(userId);
    const product = await productService.insertProduct(productBody);

    return res.status(httpStatus.CREATED).send(product);
  } catch (error) {
    if(error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function putProductAdmin(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  const ProductUpdate = req.body as ProductUpdate;

  try {
    await productService.validateAdmin(userId);
    const product = await productService.editProduct(ProductUpdate);

    return res.status(httpStatus.OK).send(product);
  } catch (error) {
    if(error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function getProductsAdmin(req: Request, res: Response) {
  const userId = res.locals.userId as number;

  try {
    const products = await productService.listAllProductsAdmin(userId);

    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function getProducts(req: Request, res: Response) {
  try {
    const products = await productService.listAllProducts();

    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

