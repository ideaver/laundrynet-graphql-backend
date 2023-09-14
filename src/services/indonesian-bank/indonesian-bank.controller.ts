import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IndonesianBankService } from './indonesian-bank.service';

@Injectable()
export class IndonesianBankController {
  constructor(private readonly indonesianBankService: IndonesianBankService) {}

  async createOne(indonesianBankCreateArgs: Prisma.IndonesianBankCreateArgs) {
    return await this.indonesianBankService.createOne(indonesianBankCreateArgs);
  }

  async createMany(indonesianBankCreateManyArgs: Prisma.IndonesianBankCreateManyArgs) {
    return await this.indonesianBankService.createMany(indonesianBankCreateManyArgs);
  }

  async findOne(indonesianBankFindUniqueArgs: Prisma.IndonesianBankFindUniqueArgs) {
    return await this.indonesianBankService.findOne(indonesianBankFindUniqueArgs);
  }

  async findMany(indonesianBankFindManyArgs: Prisma.IndonesianBankFindManyArgs) {
    return await this.indonesianBankService.findMany(indonesianBankFindManyArgs);
  }

  async findFirst(indonesianBankFindFirstArgs: Prisma.IndonesianBankFindFirstArgs) {
    return await this.indonesianBankService.findFirst(indonesianBankFindFirstArgs);
  }

  async updateOne(indonesianBankUpdateOneArgs: Prisma.IndonesianBankUpdateArgs) {
    return await this.indonesianBankService.updateOne(indonesianBankUpdateOneArgs);
  }

  async updateMany(indonesianBankUpdateManyArgs: Prisma.IndonesianBankUpdateManyArgs) {
    return await this.indonesianBankService.updateMany(indonesianBankUpdateManyArgs);
  }

  async delete(indonesianBankDeleteArgs: Prisma.IndonesianBankDeleteArgs) {
    return await this.indonesianBankService.delete(indonesianBankDeleteArgs);
  }

  async deleteMany(indonesianBankDeleteManyArgs: Prisma.IndonesianBankDeleteManyArgs) {
    return await this.indonesianBankService.deleteMany(indonesianBankDeleteManyArgs);
  }

  async aggregate(indonesianBankAggregateArgs: Prisma.IndonesianBankAggregateArgs) {
    return await this.indonesianBankService.aggregate(indonesianBankAggregateArgs);
  }

  async count(indonesianBankCountArgs: Prisma.IndonesianBankCountArgs) {
    return await this.indonesianBankService.count(indonesianBankCountArgs);
  }
}
