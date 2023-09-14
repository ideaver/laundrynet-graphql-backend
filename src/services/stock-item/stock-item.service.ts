import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class StockItemService {
  constructor(private prisma: PrismaService) {}

  async createOne(stockItemCreateArgs: Prisma.StockItemCreateArgs) {
    try {
      return await this.prisma.stockItem.create(stockItemCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(stockItemCreateManyArgs: Prisma.StockItemCreateManyArgs) {
    try {
      return await this.prisma.stockItem.createMany(stockItemCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(stockItemFindUniqueArgs: Prisma.StockItemFindUniqueArgs) {
    try {
      return await this.prisma.stockItem.findUnique(stockItemFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(stockItemFindManyArgs: Prisma.StockItemFindManyArgs) {
    try {
      return await this.prisma.stockItem.findMany(stockItemFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(stockItemFindFirstArgs: Prisma.StockItemFindFirstArgs) {
    try {
      return await this.prisma.stockItem.findFirst(stockItemFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(stockItemUpdateOneArgs: Prisma.StockItemUpdateArgs) {
    try {
      return await this.prisma.stockItem.update(stockItemUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(stockItemUpdateManyArgs: Prisma.StockItemUpdateManyArgs) {
    try {
      return await this.prisma.stockItem.updateMany(stockItemUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(stockItemDeleteArgs: Prisma.StockItemDeleteArgs) {
    try {
      await this.prisma.stockItem.delete(stockItemDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(stockItemDeleteManyArgs: Prisma.StockItemDeleteManyArgs) {
    try {
      await this.prisma.stockItem.deleteMany(stockItemDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(stockItemAggregateArgs: Prisma.StockItemAggregateArgs) {
    try {
      return await this.prisma.stockItem.aggregate(stockItemAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(stockItemCountArgs: Prisma.StockItemCountArgs) {
    try {
      return await this.prisma.stockItem.count(stockItemCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
