import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  console.dir(posts, { depth: Infinity });
};

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });