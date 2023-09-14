import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { StockTransactionService } from './stock-transaction.service';

@Injectable()
export class StockTransactionController {
  constructor(private readonly stockTransactionService: StockTransactionService) {}

  async createOne(stockTransactionCreateArgs: Prisma.StockTransactionCreateArgs) {
    return await this.stockTransactionService.createOne(stockTransactionCreateArgs);
  }

  async createMany(stockTransactionCreateManyArgs: Prisma.StockTransactionCreateManyArgs) {
    return await this.stockTransactionService.createMany(stockTransactionCreateManyArgs);
  }

  async findOne(stockTransactionFindUniqueArgs: Prisma.StockTransactionFindUniqueArgs) {
    return await this.stockTransactionService.findOne(stockTransactionFindUniqueArgs);
  }

  async findMany(stockTransactionFindManyArgs: Prisma.StockTransactionFindManyArgs) {
    return await this.stockTransactionService.findMany(stockTransactionFindManyArgs);
  }

  async findFirst(stockTransactionFindFirstArgs: Prisma.StockTransactionFindFirstArgs) {
    return await this.stockTransactionService.findFirst(stockTransactionFindFirstArgs);
  }

  async updateOne(stockTransactionUpdateOneArgs: Prisma.StockTransactionUpdateArgs) {
    return await this.stockTransactionService.updateOne(stockTransactionUpdateOneArgs);
  }

  async updateMany(stockTransactionUpdateManyArgs: Prisma.StockTransactionUpdateManyArgs) {
    return await this.stockTransactionService.updateMany(stockTransactionUpdateManyArgs);
  }

  async delete(stockTransactionDeleteArgs: Prisma.StockTransactionDeleteArgs) {
    return await this.stockTransactionService.delete(stockTransactionDeleteArgs);
  }

  async deleteMany(stockTransactionDeleteManyArgs: Prisma.StockTransactionDeleteManyArgs) {
    return await this.stockTransactionService.deleteMany(stockTransactionDeleteManyArgs);
  }

  async aggregate(stockTransactionAggregateArgs: Prisma.StockTransactionAggregateArgs) {
    return await this.stockTransactionService.aggregate(stockTransactionAggregateArgs);
  }

  async count(stockTransactionCountArgs: Prisma.StockTransactionCountArgs) {
    return await this.stockTransactionService.count(stockTransactionCountArgs);
  }
}
