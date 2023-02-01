import { PaymentStatus, Product, User } from "@prisma/client";

export type Errors = {
    name: string;
    message: string;
};

//auth types
export type SignInParams = Pick<User, "email" | "password">;

export type SignUpBody = {
  email: string,
  password: string,
  confirmPassword: string
}

export type SignInResult = {
  token: string,
};

//session types
export type SessionParams = {
  userId: number,
  token: string,
}

export type JwtResponse = {
  userId: number;
};

//product types
export type ProdcutBody = Omit<Product, "id" | "createdAt" | "updatedAt">;

export type ProductId = { 
  productId: number 
};

export type ProductUpdate = Partial<{ 
  productId: number,
  stock: number,
  price: number,
  available: boolean,
}>;

//cart types
export type CartBody = {
  userId: number,
  productId: number,
  quantity: number,
}

export type CartSchema = Omit<CartBody, "userId">

export type CartId = {
  cartId: number,
}

//address types
export type AddressParams = {
  userId?: number,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  number: string,
  complement: string,
}

//historic types
export type HistoricParams = {
  userId: number,
  productId: number,
  quantity: number,
  total: number,
  status: PaymentStatus
}

export type UpdateHistoric = {
  historicId: number,
  status: PaymentStatus,
}

export type UpdatePaymentStatus = {
  userId: number,
  status: PaymentStatus,
}
