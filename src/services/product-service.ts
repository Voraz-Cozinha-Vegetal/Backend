import { badRequestlError, unauthorizedError } from "@/errors";
import { ProdcutBody } from "@/protocols";
import { productRepository, userRepository } from "@/repositories";
import { Product } from "@prisma/client";

async function insertProduct(data: ProdcutBody): Promise<Product> {
  const product = await productRepository.createProduct(data);
  if(!product) throw badRequestlError();
  return product;
}

async function validateAdmin(userId: number): Promise<void> {
  const user = await userRepository.findUserById(userId);

  if(!user || user.email !== "andre2@teste.com") throw unauthorizedError();
}

const productService = {
  insertProduct,
  validateAdmin,
};

export { productService };

