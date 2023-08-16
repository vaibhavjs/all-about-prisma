import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.update({
    where: {
      email: "johndoe@gmail.com"
    },
    data: {
      firstName: "Jane",
      email: "janedoe@gmail.com"
    },
  });
  console.log(user);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });