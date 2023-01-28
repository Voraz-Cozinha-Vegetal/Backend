import { prisma } from "@/config";
import { ProdcutBody, ProductUpdate } from "@/protocols";
import { Product } from "@prisma/client";

async function createProduct(data: ProdcutBody): Promise<Product> {
  return prisma.product.create({
    data,
  });
}

async function updateProduct(data: ProductUpdate): Promise<Product> {
  return prisma.product.update({
    where: {
      id: data.productId,
    },
    data: {
      stock: data?.stock,
      price: data?.price,
      available: data?.available,
    }
  });
}

async function listProducts(): Promise<Product[]> {
  return prisma.product.findMany({});
}

const productRepository = {
  createProduct,
  updateProduct,
  listProducts,
};

export { productRepository };
