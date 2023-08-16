import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
    },
  });
  console.log(user);
};

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });