import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ReviewService } from './review.service';

@Injectable()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  async createOne(reviewCreateArgs: Prisma.ReviewCreateArgs) {
    return await this.reviewService.createOne(reviewCreateArgs);
  }

  async createMany(reviewCreateManyArgs: Prisma.ReviewCreateManyArgs) {
    return await this.reviewService.createMany(reviewCreateManyArgs);
  }

  async findOne(reviewFindUniqueArgs: Prisma.ReviewFindUniqueArgs) {
    return await this.reviewService.findOne(reviewFindUniqueArgs);
  }

  async findMany(reviewFindManyArgs: Prisma.ReviewFindManyArgs) {
    return await this.reviewService.findMany(reviewFindManyArgs);
  }

  async findFirst(reviewFindFirstArgs: Prisma.ReviewFindFirstArgs) {
    return await this.reviewService.findFirst(reviewFindFirstArgs);
  }

  async updateOne(reviewUpdateOneArgs: Prisma.ReviewUpdateArgs) {
    return await this.reviewService.updateOne(reviewUpdateOneArgs);
  }

  async updateMany(reviewUpdateManyArgs: Prisma.ReviewUpdateManyArgs) {
    return await this.reviewService.updateMany(reviewUpdateManyArgs);
  }

  async delete(reviewDeleteArgs: Prisma.ReviewDeleteArgs) {
    return await this.reviewService.delete(reviewDeleteArgs);
  }

  async deleteMany(reviewDeleteManyArgs: Prisma.ReviewDeleteManyArgs) {
    return await this.reviewService.deleteMany(reviewDeleteManyArgs);
  }

  async aggregate(reviewAggregateArgs: Prisma.ReviewAggregateArgs) {
    return await this.reviewService.aggregate(reviewAggregateArgs);
  }

  async count(reviewCountArgs: Prisma.ReviewCountArgs) {
    return await this.reviewService.count(reviewCountArgs);
  }
}
