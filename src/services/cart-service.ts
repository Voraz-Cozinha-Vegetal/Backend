import { badRequestlError, notFoundError, productUnavailableError } from "@/errors";
import { CartBody } from "@/protocols";
import { cartRepository, productRepository } from "@/repositories";
import { Cart } from "@prisma/client";

async function createCartItem(data: CartBody): Promise<Cart> {
  data.productId = Number(data.productId);
  data.quantity = Number(data.quantity);

  const product = await productRepository.findPoductById(data.productId);
  if(!product) throw notFoundError();
  if(!product.available || product.stock < 1) throw productUnavailableError();

  const cartItem = await cartRepository.insertCartItem(data);
  if(!cartItem) throw badRequestlError();

  return cartItem;
}

async function eraseCartItem(cartId: number): Promise<void> { //find by cart id not found
  cartId = Number(cartId);
  const cartItem = await cartRepository.findCartItemsById(cartId);
  if(!cartItem) throw notFoundError();
  
  await cartRepository.deleteCartItem(cartId);
}

async function listUserCartItems(userId: number): Promise<Cart[]> {
  const cartItems = await cartRepository.getCartItemsByUserId(userId);
  if(!cartItems) throw notFoundError();
  return cartItems;
}

const cartService = {
  createCartItem,
  eraseCartItem,
  listUserCartItems,
};

export { cartService };

