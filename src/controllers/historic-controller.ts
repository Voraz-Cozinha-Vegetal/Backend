import { historicService } from "@/services";
import { PaymentStatus } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function historicPost(req: Request, res: Response) {
  const userId = res.locals.userId as number;

  try {
    const historic = await historicService.postUserHistoric(userId);

    return res.status(httpStatus.CREATED).send(historic);
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

export async function getHistoric(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  
  try {
    const historic = await historicService.getUserHistoric(userId);
  
    return res.status(httpStatus.OK).send(historic);
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

export async function getHistoricsAdmin(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  
  try {
    const historics = await historicService.getAllHistorics(userId);
  
    return res.status(httpStatus.OK).send(historics);
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function editHistoricPaid(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  
  try {
    await historicService.editHistoricStatusPaidOrRefused({
      userId,
      status: PaymentStatus.PAID,
    });
  
    return res.status(httpStatus.OK).send();
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}

export async function editHistoricRefused(req: Request, res: Response) {
  const userId = res.locals.userId as number;
  
  try {
    await historicService.editHistoricStatusPaidOrRefused({
      userId,
      status: PaymentStatus.REFUSED,
    });
  
    return res.status(httpStatus.OK).send();
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
