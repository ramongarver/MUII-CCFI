import { Injectable } from '@nestjs/common';
import { ListTypes } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListElementDto } from './dto/create-list-element.dto';

const isListTypeValid = (listType: string) => {
  return ListTypes[listType.toUpperCase().replace('-', '_')];
};

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}

  createListElement(userId: number, listType: string, contentId: number) {
    if (!isListTypeValid(listType)) {
      return { error: 'Invalid list type' };
    }
    const createListElementDto: CreateListElementDto = {
      userId,
      listType: ListTypes[listType.replace('-', '_').toUpperCase()],
      contentId,
    };
    return this.prisma.listElement.create({ data: createListElementDto });
  }

  removeListElement(userId: number, listType: string, contentId: number) {
    return this.prisma.listElement.delete({
      where: {
        userId_listType_contentId: {
          userId: userId,
          listType: ListTypes[listType.replace('-', '_').toUpperCase()],
          contentId: contentId,
        },
      },
    });
  }

  clearAllLists(userId: number) {
    return this.prisma.listElement.deleteMany({
      where: { userId: userId },
    });
  }

  clearList(userId: number, listType: string) {
    return this.prisma.listElement.deleteMany({
      where: {
        userId: userId,
        listType: ListTypes[listType.replace('-', '_').toUpperCase()],
      },
    });
  }

  findAllLists(userId: number) {
    return this.prisma.listElement.findMany({
      where: { userId: userId },
      orderBy: { listType: 'asc' },
    });
  }

  findList(userId: number, listType: string) {
    if (!isListTypeValid(listType)) {
      return { error: 'Invalid list type' };
    }
    return this.prisma.listElement.findMany({
      where: {
        userId: userId,
        listType: ListTypes[listType.replace('-', '_').toUpperCase()],
      },
    });
  }

  findListElement(userId: number, listType: string, contentId: number) {
    if (!isListTypeValid(listType)) {
      return { error: 'Invalid list type' };
    }
    return this.prisma.listElement.findUnique({
      where: {
        userId_listType_contentId: {
          userId: userId,
          listType: ListTypes[listType.replace('-', '_').toUpperCase()],
          contentId: contentId,
        },
      },
    });
  }
}
