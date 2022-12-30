import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListsService } from './lists.service';

@Controller('users/:userId/lists')
@ApiTags('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post(':listType/contents/:contentId')
  create(
    @Param('userId') userId: string,
    @Param('listType') listType: string,
    @Param('contentId') contentId: string,
  ) {
    return this.listsService.createListElement(+userId, listType, +contentId);
  }

  @Get(':listType/contents/:contentId')
  findByContent(
    @Param('userId') userId: string,
    @Param('listType') listType: string,
    @Param('contentId') contentId: string,
  ) {
    return this.listsService.findListElement(+userId, listType, +contentId);
  }

  @Delete(':listType/contents/:contentId')
  removeListElement(
    @Param('userId') userId: string,
    @Param('listType') listType: string,
    @Param('contentId') contentId: string,
  ) {
    return this.listsService.removeListElement(+userId, listType, +contentId);
  }

  @Get(':listType')
  findList(
    @Param('userId') userId: string,
    @Param('listType') listType: string,
  ) {
    return this.listsService.findList(+userId, listType);
  }

  @Delete(':listType')
  clearList(
    @Param('userId') userId: string,
    @Param('listType') listType: string,
  ) {
    return this.listsService.clearList(+userId, listType);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.listsService.findAllLists(+userId);
  }

  @Delete()
  clearAllLists(@Param('userId') userId: string) {
    return this.listsService.clearAllLists(+userId);
  }
}
