import userService from "@/services/user-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function userPost(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await userService.createUser({ email, password });
    return res.status(httpStatus.CREATED).send({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "ExistingEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      error: "InternalServerError",
      message: "Internal Server Error",
    });
  }
}
