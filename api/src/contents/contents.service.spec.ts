import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentsService } from './contents.service';

describe('ContentsService', () => {
  let service: ContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentsService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ContentsService>(ContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
