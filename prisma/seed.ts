import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let product = await prisma.product.findFirst()
  if (!product) {
    product = await prisma.product.create({
      data: {
        name: "Pão com ovo",
        image: "https://thumbs.dreamstime.com/b/p%C3%A3o-com-ovo-mexido-de-pao-do-brasileiro-104783243.jpg",
        description: "Pão quentinho com ovo mexido",
        price: 10000,
        stock: 0,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
    product = await prisma.product.create({
      data: {
        name: "Pão com ovo 2",
        image: "https://thumbs.dreamstime.com/b/p%C3%A3o-com-ovo-mexido-de-pao-do-brasileiro-104783243.jpg",
        description: "Pão quentinho com ovo mexido 2",
        price: 20000,
        stock: 100,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
  }

  console.log(product);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
