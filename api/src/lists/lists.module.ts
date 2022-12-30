import { Module } from '@nestjs/common';
import { ContentsModule } from 'src/contents/contents.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
  controllers: [ListsController],
  providers: [ListsService],
  imports: [PrismaModule, UsersModule, ContentsModule],
  exports: [ListsService],
})
export class ListsModule {}
