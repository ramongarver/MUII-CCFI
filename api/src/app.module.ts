import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContentsModule } from './contents/contents.module';

@Module({
  imports: [PrismaModule, ContentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
