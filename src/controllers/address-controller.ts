import { addressService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function userAddressPost(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  const { 
    state, 
    city, 
    street, 
    neighborhood, 
    number, 
    complement 
  } = req.body;

  try {
    const userAddress = await addressService.createAddress({ 
      state,
      city,
      street,
      neighborhood,
      number,
      complement,
      userId 
    });

    return res.status(httpStatus.CREATED).send(userAddress);
  } catch (error) {
    if (error.name === "ExistingUserAddressError") {
      return res.status(httpStatus.FORBIDDEN).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

export async function userAddressPut(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  const { 
    state, 
    city, 
    street, 
    neighborhood, 
    number, 
    complement 
  } = req.body;
  
  try {
    const userAddress = await addressService.editAddress({ 
      state,
      city,
      street,
      neighborhood,
      number,
      complement,
      userId 
    });
  
    return res.status(httpStatus.CREATED).send(userAddress);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
