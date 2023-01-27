import { sanitizer } from "@/utils";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateSchema<T>(schema: ObjectSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    if(req.body.email) {
      req.body.email = sanitizer(req.body.email);
    }
    if(req.body.password) {
      req.body.password = sanitizer(req.body.password);
    }
    
    const validation = schema.validate(req.body, { abortEarly: false });
  
    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      return res.status(httpStatus.BAD_REQUEST).send(errors);
    }
    next();
  };
}
