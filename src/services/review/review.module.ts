import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ReviewController } from './review.controller';

@Module({
  providers: [PrismaService, ReviewResolver, ReviewController, ReviewService],
  exports: [ReviewController],
})
export class ReviewModule {}
