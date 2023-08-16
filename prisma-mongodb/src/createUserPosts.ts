import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.create({
    data: {
      firstName: "Leo",
      lastName: "DiCaprio",
      email: "leo@gmail.com",
      posts: {
        create: [
          {title: "Inception"},
          {title: "The Revenant"},
          {title: "The Wolf of Wall Street"},
          {title: "Titanic"}
        ], //This create field is a part of prisma's api for creating related records in a single request.
      },
    },
    include: {
      posts: true,
    },
  });

  console.dir(user, { depth: Infinity });
};

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });