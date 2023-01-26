import Joi from "joi";

export const signUpSchema = Joi.object<SignUpBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});

export type SignUpBody = {
  email: string,
  password: string,
  confirmPassword: string
}
