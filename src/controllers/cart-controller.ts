import { cartService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postCartItem(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  const { productId, quantity } = req.body;

  try {
    const cartItem = await cartService.createCartItem({ userId, productId, quantity });

    return res.status(httpStatus.CREATED).send(cartItem);
  } catch (error) {
    if(error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    if(error.name === "ProductUnavailableError") {
      return res.status(httpStatus.FORBIDDEN).send(error);
    }
    if(error.name === "InsufficientStockError") {
      return res.status(httpStatus.FORBIDDEN).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

export async function dropCartItem(req: Request, res: Response) {
  const { cartId } = req.params;
  
  try {
    await cartService.eraseCartItem(Number(cartId));
  
    return res.status(httpStatus.OK).send({});
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

export async function getUserCart(req: Request, res: Response) {
  const userId = res.locals.userId as number;
    
  try {
    const userCart = await cartService.listUserCartItems(userId);
     
    return res.status(httpStatus.OK).send(userCart);
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
