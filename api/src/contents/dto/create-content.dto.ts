import { ApiProperty } from '@nestjs/swagger';

export class CreateContentDto {
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
}
