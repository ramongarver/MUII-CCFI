import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';

@Module({
  controllers: [ContentsController],
  providers: [ContentsService],
  imports: [PrismaModule],
  exports: [ContentsService],
})
export class ContentsModule {}
