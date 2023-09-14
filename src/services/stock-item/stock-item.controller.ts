import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { StockItemService } from './stock-item.service';

@Injectable()
export class StockItemController {
  constructor(private readonly stockItemService: StockItemService) {}

  async createOne(stockItemCreateArgs: Prisma.StockItemCreateArgs) {
    return await this.stockItemService.createOne(stockItemCreateArgs);
  }

  async createMany(stockItemCreateManyArgs: Prisma.StockItemCreateManyArgs) {
    return await this.stockItemService.createMany(stockItemCreateManyArgs);
  }

  async findOne(stockItemFindUniqueArgs: Prisma.StockItemFindUniqueArgs) {
    return await this.stockItemService.findOne(stockItemFindUniqueArgs);
  }

  async findMany(stockItemFindManyArgs: Prisma.StockItemFindManyArgs) {
    return await this.stockItemService.findMany(stockItemFindManyArgs);
  }

  async findFirst(stockItemFindFirstArgs: Prisma.StockItemFindFirstArgs) {
    return await this.stockItemService.findFirst(stockItemFindFirstArgs);
  }

  async updateOne(stockItemUpdateOneArgs: Prisma.StockItemUpdateArgs) {
    return await this.stockItemService.updateOne(stockItemUpdateOneArgs);
  }

  async updateMany(stockItemUpdateManyArgs: Prisma.StockItemUpdateManyArgs) {
    return await this.stockItemService.updateMany(stockItemUpdateManyArgs);
  }

  async delete(stockItemDeleteArgs: Prisma.StockItemDeleteArgs) {
    return await this.stockItemService.delete(stockItemDeleteArgs);
  }

  async deleteMany(stockItemDeleteManyArgs: Prisma.StockItemDeleteManyArgs) {
    return await this.stockItemService.deleteMany(stockItemDeleteManyArgs);
  }

  async aggregate(stockItemAggregateArgs: Prisma.StockItemAggregateArgs) {
    return await this.stockItemService.aggregate(stockItemAggregateArgs);
  }

  async count(stockItemCountArgs: Prisma.StockItemCountArgs) {
    return await this.stockItemService.count(stockItemCountArgs);
  }
}
