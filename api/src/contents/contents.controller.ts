import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentEntity } from './entities/content.entity';

@Controller('contents')
@ApiTags('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  @ApiCreatedResponse({ type: ContentEntity })
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentsService.create(createContentDto);
  }

  @Get()
  @ApiOkResponse({ type: ContentEntity })
  findAll() {
    return this.contentsService.findAll();
  }

  @Get('movies')
  @ApiOkResponse({ type: ContentEntity, isArray: true })
  findMovies() {
    return this.contentsService.findAllByType('MOVIE');
  }

  @ApiOkResponse({ type: ContentEntity, isArray: true })
  @Get('series')
  findSeries() {
    return this.contentsService.findAllByType('SERIES');
  }

  @Get(':id')
  @ApiOkResponse({ type: ContentEntity })
  findOne(@Param('id') id: string) {
    return this.contentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ContentEntity })
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentsService.update(+id, updateContentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ContentEntity })
  remove(@Param('id') id: string) {
    return this.contentsService.remove(+id);
  }
}
