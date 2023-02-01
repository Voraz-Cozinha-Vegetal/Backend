import { notFoundError } from "@/errors";
import { UpdatePaymentStatus } from "@/protocols";
import { cartRepository, historicRepository, productRepository } from "@/repositories";
import { Historic, PaymentStatus } from "@prisma/client";
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
      total: (product.price * element.quantity),
      status: PaymentStatus.RESERVED
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

async function editHistoricStatusPaidOrRefused(data: UpdatePaymentStatus): Promise<void> {
  const reservedHistorics = await historicRepository.findReservedUserStatus(data.userId);
  if(!reservedHistorics) throw notFoundError();

  reservedHistorics.forEach(async element => {
    await historicRepository.updatePaymentStatus({
      historicId: element.id,
      status: data.status
    });
  });
}

const historicService = {
  postUserHistoric,
  getUserHistoric,
  getAllHistorics,
  editHistoricStatusPaidOrRefused,
};

export { historicService };

