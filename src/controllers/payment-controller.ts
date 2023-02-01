import { paymentService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function paymentPost(req: Request, res: Response) {
  const data = req.body;

  try {
    const payment = await paymentService.postPaymentOrFail(data);

    return res.status(httpStatus.CREATED).send(payment);
  } catch (error) {
    if (error.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
