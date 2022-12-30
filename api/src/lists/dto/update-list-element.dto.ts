import { PartialType } from '@nestjs/swagger';
import { CreateListElementDto } from './create-list-element.dto';

export class UpdateListElementDto extends PartialType(CreateListElementDto) {}
