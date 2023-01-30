import { badRequestlError, notFoundError, unauthorizedError } from "@/errors";
import { ProdcutBody, ProductUpdate } from "@/protocols";
import { productRepository, userRepository } from "@/repositories";
import { Product } from "@prisma/client";

async function insertProduct(data: ProdcutBody): Promise<Product> {
  data.price = Number(data.price);
  data.stock = Number(data.stock);

  const product = await productRepository.createProduct(data);
  if(!product) throw badRequestlError();

  return product;
}

async function validateAdmin(userId: number): Promise<void> {
  const user = await userRepository.findUserById(userId);

  if(!user || user.email !== "andre2@teste.com") throw unauthorizedError();
}

async function editProduct(data: ProductUpdate): Promise<Product> {
  if(data.productId) Number(data.productId);
  if(data.price) Number(data.price);
  if(data.stock) Number(data.stock);

  const product = await productRepository.findPoductById(data.productId);
  if(!product) throw notFoundError();
  
  const uptatedProduct = await productRepository.updateProduct(data);
  if(!uptatedProduct) throw badRequestlError();

  return uptatedProduct;
}

async function listAllProducts(): Promise<Product[]> {
  const products = await productRepository.listProducts();
  if(!products) throw notFoundError();

  return products;
}

async function listAllProductsAdmin(userId: number): Promise<Product[]> {
  await validateAdmin(userId);
  const products = await productRepository.listProducts();

  return products;
}

const productService = {
  insertProduct,
  validateAdmin,
  editProduct,
  listAllProducts,
  listAllProductsAdmin,
};

export { productService };

