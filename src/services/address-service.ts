import { existingUserAddressError, notFoundError } from "@/errors";
import { AddressParams } from "@/protocols";
import { addressRepository } from "@/repositories";
import { Address } from "@prisma/client";

async function createAddress( data: AddressParams ): Promise<Address> {
  const address = await addressRepository.findAddressByUserId(data.userId);
  if(address) throw existingUserAddressError();

  const userAddress = await addressRepository.createUserAddress(data);
  
  return userAddress;
}

async function editAddress(data: AddressParams ): Promise<Address> {
  const address = await addressRepository.findAddressByUserId(data.userId);
  if(!address) throw notFoundError();
  
  const userAddress = await addressRepository.updateUserAddress(data, address.id);
    
  return userAddress;
}

async function getAddress(userId: number): Promise<Address> {
  const address = await addressRepository.findAddressByUserId(userId);
  if(!address) throw notFoundError();
  
  return address;
}

const addressService = {
  createAddress,
  editAddress,
  getAddress,
};

export { addressService };

