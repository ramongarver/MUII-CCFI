import { ApiProperty } from '@nestjs/swagger';

export class CreateListElementDto {
  @ApiProperty()
  listType: 'WATCHLIST' | 'IN_PROGRESS' | 'COMPLETED' | 'FAVORITES';

  @ApiProperty()
  userId: number;

  @ApiProperty()
  contentId: number;
}
