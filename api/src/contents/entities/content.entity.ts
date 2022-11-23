import { ApiProperty } from '@nestjs/swagger';
import { Content } from '@prisma/client';

export class ContentEntity implements Content {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  type: 'MOVIE' | 'SERIES';

  @ApiProperty()
  genre: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
