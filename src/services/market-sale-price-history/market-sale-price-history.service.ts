import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class MarketSalePriceHistoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(marketSalePriceHistoryCreateArgs: Prisma.MarketSalePriceHistoryCreateArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.create(marketSalePriceHistoryCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(marketSalePriceHistoryCreateManyArgs: Prisma.MarketSalePriceHistoryCreateManyArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.createMany(marketSalePriceHistoryCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(marketSalePriceHistoryFindUniqueArgs: Prisma.MarketSalePriceHistoryFindUniqueArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.findUnique(marketSalePriceHistoryFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(marketSalePriceHistoryFindManyArgs: Prisma.MarketSalePriceHistoryFindManyArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.findMany(marketSalePriceHistoryFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(marketSalePriceHistoryFindFirstArgs: Prisma.MarketSalePriceHistoryFindFirstArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.findFirst(marketSalePriceHistoryFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(marketSalePriceHistoryUpdateOneArgs: Prisma.MarketSalePriceHistoryUpdateArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.update(marketSalePriceHistoryUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(marketSalePriceHistoryUpdateManyArgs: Prisma.MarketSalePriceHistoryUpdateManyArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.updateMany(marketSalePriceHistoryUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(marketSalePriceHistoryDeleteArgs: Prisma.MarketSalePriceHistoryDeleteArgs) {
    try {
      await this.prisma.marketSalePriceHistory.delete(marketSalePriceHistoryDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(marketSalePriceHistoryDeleteManyArgs: Prisma.MarketSalePriceHistoryDeleteManyArgs) {
    try {
      await this.prisma.marketSalePriceHistory.deleteMany(marketSalePriceHistoryDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(marketSalePriceHistoryAggregateArgs: Prisma.MarketSalePriceHistoryAggregateArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.aggregate(marketSalePriceHistoryAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(marketSalePriceHistoryCountArgs: Prisma.MarketSalePriceHistoryCountArgs) {
    try {
      return await this.prisma.marketSalePriceHistory.count(marketSalePriceHistoryCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
