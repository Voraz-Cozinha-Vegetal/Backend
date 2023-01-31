import { notFoundError } from "@/errors";
import { cartRepository, historicRepository, productRepository } from "@/repositories";
import { Historic } from "@prisma/client";
import { cartService } from "./cart-service";
import { productService } from "./product-service";

async function postUserHistoric(userId: number): Promise<void> {
  const userCart = await cartRepository.getCartItemsByUserId(userId);
  if(!userCart) throw notFoundError();
    
  userCart.forEach(async element => {
    const product = await productRepository.findPoductById(element.productId);
    if(!product) throw notFoundError();

    await historicRepository.createUserHistoric({
      userId: element.userId,
      productId: element.productId,
      quantity: element.quantity,
      total: (product.price * element.quantity)
    });
  });

  await cartService.eraseUserCart(userId);
}

async function getUserHistoric(userId: number): Promise<Historic[]> {
  const userHistoric = await historicRepository.findUserHistoric(userId);
  if(!userHistoric) throw notFoundError();

  return userHistoric;
}

async function getAllHistorics(userId: number): Promise<Historic[]> {
  await productService.validateAdmin(userId);
  
  const Historics = await historicRepository.findHistorics();
  if(!Historics) throw notFoundError();
  
  return Historics;
}

const historicService = {
  postUserHistoric,
  getUserHistoric,
  getAllHistorics
};

export { historicService };

