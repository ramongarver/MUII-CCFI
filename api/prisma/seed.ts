import { PrismaClient } from '@prisma/client';

enum ContentTypes {
  MOVIE = 'MOVIE',
  SERIES = 'SERIES',
}

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Create two content items
  // - First content item
  const content1 = await prisma.content.upsert({
    where: { title: "Harry Potter and the Philosopher's Stone" },
    update: {},
    create: {
      title: "Harry Potter and the Philosopher's Stone",
      type: ContentTypes.MOVIE,
      genre: 'FANTASY',
      description:
        'Harry Potter is a British-American film series based on the Harry Potter novels by author J. K. Rowling.',
      director: 'Chris Columbus',
      year: '2001',
      rating: 7.6,
    },
  });
  // - Second content item
  const content2 = await prisma.content.upsert({
    where: { title: 'Mr. Robot' },
    update: {},
    create: {
      title: 'Mr. Robot',
      type: ContentTypes.SERIES,
      genre: 'SCI-FI',
      description:
        'A hacker with social anxiety disorder and clinical depression works as a cybersecurity engineer by day and as a vigilante hacker by night.',
      director: 'Sam Esmail',
      year: '2015',
      rating: 8.6,
    },
  });
  // - Print the result
  console.log({ content1, content2 });
}

main()
  .catch((e) => {
    // Print error
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the database connection (prisma client)
    await prisma.$disconnect();
  });
