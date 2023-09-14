import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async createOne(reviewCreateArgs: Prisma.ReviewCreateArgs) {
    try {
      return await this.prisma.review.create(reviewCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(reviewCreateManyArgs: Prisma.ReviewCreateManyArgs) {
    try {
      return await this.prisma.review.createMany(reviewCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(reviewFindUniqueArgs: Prisma.ReviewFindUniqueArgs) {
    try {
      return await this.prisma.review.findUnique(reviewFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(reviewFindManyArgs: Prisma.ReviewFindManyArgs) {
    try {
      return await this.prisma.review.findMany(reviewFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(reviewFindFirstArgs: Prisma.ReviewFindFirstArgs) {
    try {
      return await this.prisma.review.findFirst(reviewFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(reviewUpdateOneArgs: Prisma.ReviewUpdateArgs) {
    try {
      return await this.prisma.review.update(reviewUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(reviewUpdateManyArgs: Prisma.ReviewUpdateManyArgs) {
    try {
      return await this.prisma.review.updateMany(reviewUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(reviewDeleteArgs: Prisma.ReviewDeleteArgs) {
    try {
      await this.prisma.review.delete(reviewDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(reviewDeleteManyArgs: Prisma.ReviewDeleteManyArgs) {
    try {
      await this.prisma.review.deleteMany(reviewDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(reviewAggregateArgs: Prisma.ReviewAggregateArgs) {
    try {
      return await this.prisma.review.aggregate(reviewAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(reviewCountArgs: Prisma.ReviewCountArgs) {
    try {
      return await this.prisma.review.count(reviewCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
