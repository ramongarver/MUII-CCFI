import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [PrismaModule, ContentsModule, UsersModule, ListsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
