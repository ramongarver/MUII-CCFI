import { ApiProperty } from '@nestjs/swagger';
import { ListElement, ListTypes } from '@prisma/client';

export class ListElementEntity implements ListElement {
  @ApiProperty()
  id: number;

  @ApiProperty()
  listType: ListTypes;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  contentId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
