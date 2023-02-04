import { prisma } from "@/config";
import { CartBody } from "@/protocols";
import { Cart } from "@prisma/client";

async function insertCartItem(data: CartBody): Promise<Cart> {
  return prisma.cart.create({
    data,
  });
}

function deleteCartItem(cartId: number): Promise<Cart> {
  return prisma.cart.delete({
    where: {
      id: cartId,
    }
  });
}

function getCartItemsByUserId(userId: number): Promise<Cart[]> {
  return prisma.cart.findMany({
    where: {
      userId,
    },
    include: {
      Product: true
    }
  });
}

function findCartItemsById(cartId: number): Promise<Cart> {
  return prisma.cart.findFirst({
    where: {
      id: cartId
    }
  });
}

const cartRepository = {
  insertCartItem,
  deleteCartItem,
  getCartItemsByUserId,
  findCartItemsById,
};

export { cartRepository };
