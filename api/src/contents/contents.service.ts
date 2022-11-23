import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentsService {
  constructor(private prisma: PrismaService) {}

  create(createContentDto: CreateContentDto) {
    return this.prisma.content.create({ data: createContentDto });
  }

  findAll() {
    return this.prisma.content.findMany();
  }

  findAllByType(type) {
    return this.prisma.content.findMany({ where: { type: type } });
  }

  findOne(id: number) {
    return this.prisma.content.findUnique({ where: { id: id } });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.prisma.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.content.delete({ where: { id } });
  }
}
