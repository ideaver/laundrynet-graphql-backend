import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MarketSalePriceHistoryService } from './market-sale-price-history.service';

@Injectable()
export class MarketSalePriceHistoryController {
  constructor(private readonly marketSalePriceHistoryService: MarketSalePriceHistoryService) {}

  async createOne(marketSalePriceHistoryCreateArgs: Prisma.MarketSalePriceHistoryCreateArgs) {
    return await this.marketSalePriceHistoryService.createOne(marketSalePriceHistoryCreateArgs);
  }

  async createMany(marketSalePriceHistoryCreateManyArgs: Prisma.MarketSalePriceHistoryCreateManyArgs) {
    return await this.marketSalePriceHistoryService.createMany(marketSalePriceHistoryCreateManyArgs);
  }

  async findOne(marketSalePriceHistoryFindUniqueArgs: Prisma.MarketSalePriceHistoryFindUniqueArgs) {
    return await this.marketSalePriceHistoryService.findOne(marketSalePriceHistoryFindUniqueArgs);
  }

  async findMany(marketSalePriceHistoryFindManyArgs: Prisma.MarketSalePriceHistoryFindManyArgs) {
    return await this.marketSalePriceHistoryService.findMany(marketSalePriceHistoryFindManyArgs);
  }

  async findFirst(marketSalePriceHistoryFindFirstArgs: Prisma.MarketSalePriceHistoryFindFirstArgs) {
    return await this.marketSalePriceHistoryService.findFirst(marketSalePriceHistoryFindFirstArgs);
  }

  async updateOne(marketSalePriceHistoryUpdateOneArgs: Prisma.MarketSalePriceHistoryUpdateArgs) {
    return await this.marketSalePriceHistoryService.updateOne(marketSalePriceHistoryUpdateOneArgs);
  }

  async updateMany(marketSalePriceHistoryUpdateManyArgs: Prisma.MarketSalePriceHistoryUpdateManyArgs) {
    return await this.marketSalePriceHistoryService.updateMany(marketSalePriceHistoryUpdateManyArgs);
  }

  async delete(marketSalePriceHistoryDeleteArgs: Prisma.MarketSalePriceHistoryDeleteArgs) {
    return await this.marketSalePriceHistoryService.delete(marketSalePriceHistoryDeleteArgs);
  }

  async deleteMany(marketSalePriceHistoryDeleteManyArgs: Prisma.MarketSalePriceHistoryDeleteManyArgs) {
    return await this.marketSalePriceHistoryService.deleteMany(marketSalePriceHistoryDeleteManyArgs);
  }

  async aggregate(marketSalePriceHistoryAggregateArgs: Prisma.MarketSalePriceHistoryAggregateArgs) {
    return await this.marketSalePriceHistoryService.aggregate(marketSalePriceHistoryAggregateArgs);
  }

  async count(marketSalePriceHistoryCountArgs: Prisma.MarketSalePriceHistoryCountArgs) {
    return await this.marketSalePriceHistoryService.count(marketSalePriceHistoryCountArgs);
  }
}
