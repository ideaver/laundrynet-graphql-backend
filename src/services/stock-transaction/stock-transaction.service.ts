import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class StockTransactionService {
  constructor(private prisma: PrismaService) {}

  async createOne(stockTransactionCreateArgs: Prisma.StockTransactionCreateArgs) {
    try {
      return await this.prisma.stockTransaction.create(stockTransactionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(stockTransactionCreateManyArgs: Prisma.StockTransactionCreateManyArgs) {
    try {
      return await this.prisma.stockTransaction.createMany(stockTransactionCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(stockTransactionFindUniqueArgs: Prisma.StockTransactionFindUniqueArgs) {
    try {
      return await this.prisma.stockTransaction.findUnique(stockTransactionFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(stockTransactionFindManyArgs: Prisma.StockTransactionFindManyArgs) {
    try {
      return await this.prisma.stockTransaction.findMany(stockTransactionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(stockTransactionFindFirstArgs: Prisma.StockTransactionFindFirstArgs) {
    try {
      return await this.prisma.stockTransaction.findFirst(stockTransactionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(stockTransactionUpdateOneArgs: Prisma.StockTransactionUpdateArgs) {
    try {
      return await this.prisma.stockTransaction.update(stockTransactionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(stockTransactionUpdateManyArgs: Prisma.StockTransactionUpdateManyArgs) {
    try {
      return await this.prisma.stockTransaction.updateMany(stockTransactionUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(stockTransactionDeleteArgs: Prisma.StockTransactionDeleteArgs) {
    try {
      await this.prisma.stockTransaction.delete(stockTransactionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(stockTransactionDeleteManyArgs: Prisma.StockTransactionDeleteManyArgs) {
    try {
      await this.prisma.stockTransaction.deleteMany(stockTransactionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(stockTransactionAggregateArgs: Prisma.StockTransactionAggregateArgs) {
    try {
      return await this.prisma.stockTransaction.aggregate(stockTransactionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(stockTransactionCountArgs: Prisma.StockTransactionCountArgs) {
    try {
      return await this.prisma.stockTransaction.count(stockTransactionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
