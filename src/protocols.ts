import { Product, User } from "@prisma/client";

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

