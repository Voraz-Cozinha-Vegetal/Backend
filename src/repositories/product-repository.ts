import { prisma } from "@/config";
import { ProdcutBody } from "@/protocols";
import { Product } from "@prisma/client";

async function createProduct(data: ProdcutBody): Promise<Product> {
  return prisma.product.create({
    data,
  });
}

const productRepository = {
  createProduct,
};

export { productRepository };
