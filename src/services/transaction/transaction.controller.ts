import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TransactionService } from './transaction.service';

@Injectable()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  async createOne(transactionCreateArgs: Prisma.TransactionCreateArgs) {
    return await this.transactionService.createOne(transactionCreateArgs);
  }

  async createMany(transactionCreateManyArgs: Prisma.TransactionCreateManyArgs) {
    return await this.transactionService.createMany(transactionCreateManyArgs);
  }

  async findOne(transactionFindUniqueArgs: Prisma.TransactionFindUniqueArgs) {
    return await this.transactionService.findOne(transactionFindUniqueArgs);
  }

  async findMany(transactionFindManyArgs: Prisma.TransactionFindManyArgs) {
    return await this.transactionService.findMany(transactionFindManyArgs);
  }

  async findFirst(transactionFindFirstArgs: Prisma.TransactionFindFirstArgs) {
    return await this.transactionService.findFirst(transactionFindFirstArgs);
  }

  async updateOne(transactionUpdateOneArgs: Prisma.TransactionUpdateArgs) {
    return await this.transactionService.updateOne(transactionUpdateOneArgs);
  }

  async updateMany(transactionUpdateManyArgs: Prisma.TransactionUpdateManyArgs) {
    return await this.transactionService.updateMany(transactionUpdateManyArgs);
  }

  async delete(transactionDeleteArgs: Prisma.TransactionDeleteArgs) {
    return await this.transactionService.delete(transactionDeleteArgs);
  }

  async deleteMany(transactionDeleteManyArgs: Prisma.TransactionDeleteManyArgs) {
    return await this.transactionService.deleteMany(transactionDeleteManyArgs);
  }

  async aggregate(transactionAggregateArgs: Prisma.TransactionAggregateArgs) {
    return await this.transactionService.aggregate(transactionAggregateArgs);
  }

  async count(transactionCountArgs: Prisma.TransactionCountArgs) {
    return await this.transactionService.count(transactionCountArgs);
  }
}
