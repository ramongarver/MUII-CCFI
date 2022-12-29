import { ListTypes } from '@prisma/client';
import { CreateContentDto } from 'src/contents/dto/create-content.dto';
import { CreateListElementDto } from 'src/lists/dto/create-list-element.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export const USERS_SEED: CreateUserDto[] = [
  {
    email: 'ramongarver@remembil.com',
    password: 'contraseña',
    name: 'Ramón García Verjaga',
  },
  {
    email: 'juanpersan@remembil.com',
    password: 'contraseña',
    name: 'Juan Pérez Sánchez',
  },
  {
    email: 'anasanjim@remembil.com',
    password: 'contraseña',
    name: 'Ana Sánchez Jiménez',
  },
  {
    email: 'mariajimlop@remembil.com',
    password: 'contraseña',
    name: 'María Jiménez López',
  },
];

export const CONTENTS_SEED: CreateContentDto[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    type: 'MOVIE',
    genre: 'FANTASY',
    description:
      'Harry Potter is a British-American film series based on the Harry Potter novels by author J. K. Rowling.',
    director: 'Chris Columbus',
    year: '2001',
    rating: 7.6,
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    type: 'MOVIE',
    genre: 'FANTASY',
    description:
      'Harry Potter is a British-American film series based on the Harry Potter novels by author J.K. Rowling.',
    director: 'Chris Columbus',
    year: '2002',
    rating: 7.4,
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    type: 'MOVIE',
    genre: 'FANTASY',
    description:
      'Harry Potter is a British-American film series based on the Harry Potter novels by author J.K. Rowling.',
    director: 'Alfonso Cuarón',
    year: '2004',
    rating: 7.9,
  },
  {
    title: 'Mr. Robot',
    type: 'SERIES',
    genre: 'SCI-FI',
    description:
      'A hacker with social anxiety disorder and clinical depression works as a cybersecurity engineer by day and as a vigilante hacker by night.',
    director: 'Sam Esmail',
    year: '2015',
    rating: 8.6,
  },
  {
    title: 'Wednesday',
    type: 'SERIES',
    genre: 'CRIME',
    description:
      "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart and solve the mystery that embroiled her parents.",
    director: 'Tim Burton',
    year: '2022',
    rating: 8.3,
  },
];

export const LIST_ELEMENTS_SEED: CreateListElementDto[] = [
  {
    listType: ListTypes.WATCHLIST,
    userId: 1,
    contentId: 2,
  },
  {
    listType: ListTypes.COMPLETED,
    userId: 1,
    contentId: 1,
  },
  {
    listType: ListTypes.IN_PROGRESS,
    userId: 2,
    contentId: 1,
  },
];
