import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let product = await prisma.product.findFirst()
  if (!product) {
    product = await prisma.product.create({
      data: {
        name: "Brigadeiro vegano",
        image: "https://receitinhas.com.br/wp-content/uploads/2022/08/Brigadeiro-de-banana.jpg",
        description: "Brigadeiro com leite de amendoas e 70% cacau",
        price: 10000,
        stock: 0,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
    product = await prisma.product.create({
      data: {
        name: "Brigadeiro vegano 2",
        image: "https://receitinhas.com.br/wp-content/uploads/2022/08/Brigadeiro-de-banana.jpg",
        description: "Brigadeiro com leite de amendoas e 70% cacau 2",
        price: 20000,
        stock: 100,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
    product = await prisma.product.create({
      data: {
        name: "Brigadeiro vegano 3",
        image: "https://receitinhas.com.br/wp-content/uploads/2022/08/Brigadeiro-de-banana.jpg",
        description: "Brigadeiro com leite de amendoas e 70% cacau 3",
        price: 20000,
        stock: 100,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
    product = await prisma.product.create({
      data: {
        name: "Brigadeiro vegano 4",
        image: "https://receitinhas.com.br/wp-content/uploads/2022/08/Brigadeiro-de-banana.jpg",
        description: "Brigadeiro com leite de amendoas e 70% cacau 4",
        price: 20000,
        stock: 100,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
    product = await prisma.product.create({
      data: {
        name: "Brigadeiro vegano 5",
        image: "https://receitinhas.com.br/wp-content/uploads/2022/08/Brigadeiro-de-banana.jpg",
        description: "Brigadeiro com leite de amendoas e 70% cacau 5",
        price: 20000,
        stock: 100,
        createdAt: dayjs().toDate(),
        updatedAt: dayjs().add(1, "days").toDate(),
      },
    });
    product = await prisma.product.create({
      data: {
        name: "Brigadeiro vegano 6",
        image: "https://receitinhas.com.br/wp-content/uploads/2022/08/Brigadeiro-de-banana.jpg",
        description: "Brigadeiro com leite de amendoas e 70% cacau 6",
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
