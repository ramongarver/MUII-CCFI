import { PrismaClient } from '@prisma/client';
import { CONTENTS_SEED, LIST_ELEMENTS_SEED, USERS_SEED } from './data';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Create users
const seedUsers = () => {
  Promise.all(
    USERS_SEED.map((createUserDto) =>
      prisma.user.upsert({
        where: { email: createUserDto.email },
        update: {},
        create: {
          email: createUserDto.email,
          password: createUserDto.password,
          name: createUserDto.name,
        },
      }),
    ),
  )
    .then((i) => console.info('[SEED] Succussfully create user records', i))
    .catch((e) => console.error('[SEED] Failed to create user records', e));
};

// Create contents
const seedContents = () => {
  Promise.all(
    CONTENTS_SEED.map((createContentDto) =>
      prisma.content.upsert({
        where: { title: createContentDto.title },
        update: {},
        create: {
          title: createContentDto.title,
          type: createContentDto.type,
          genre: createContentDto.genre,
          description: createContentDto.description,
          director: createContentDto.director,
          year: createContentDto.year,
          rating: createContentDto.rating,
        },
      }),
    ),
  )
    .then((i) => console.info('[SEED] Succussfully create content records', i))
    .catch((e) => console.error('[SEED] Failed to create content records', e));
};

// Create list elements
const seedListElements = () => {
  Promise.all(
    LIST_ELEMENTS_SEED.map((createListElementDto) =>
      prisma.listElement.upsert({
        where: {
          userId_listType_contentId: {
            userId: createListElementDto.userId,
            listType: createListElementDto.listType,
            contentId: createListElementDto.contentId,
          },
        },
        update: {},
        create: {
          userId: createListElementDto.userId,
          listType: createListElementDto.listType,
          contentId: createListElementDto.contentId,
        },
      }),
    ),
  )
    .then((i) =>
      console.info('[SEED] Succussfully create list element records', i),
    )
    .catch((e) =>
      console.error('[SEED] Failed to create list element records', e),
    );
};

async function main() {
  seedUsers();
  seedContents();
  seedListElements();
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
