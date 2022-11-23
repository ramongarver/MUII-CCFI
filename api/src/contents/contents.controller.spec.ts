import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';

describe('ContentsController', () => {
  let controller: ContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentsController],
      providers: [ContentsService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<ContentsController>(ContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
