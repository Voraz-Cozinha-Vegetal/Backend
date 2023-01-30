import { prisma } from "@/config";
import { AddressParams } from "@/protocols";
import { Address } from "@prisma/client";

async function createUserAddress(data: AddressParams): Promise<Address> {
  return prisma.address.create({
    data: {
      userId: data.userId,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      street: data.street,
      number: data.number,
      complement: data.complement,
    }
  });
}

async function updateUserAddress(data: AddressParams, addressId: number): Promise<Address> {
  return prisma.address.update({
    where: {
      id: addressId,
    },
    data: {
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      street: data.street,
      number: data.number,
      complement: data.complement,
    }
  });
}

async function findAddressByUserId(userId: number): Promise<Address> {
  return prisma.address.findFirst({
    where: {
      userId,
    },
  });
}

const addressRepository = {
  createUserAddress,
  updateUserAddress,
  findAddressByUserId,
};

export { addressRepository };
