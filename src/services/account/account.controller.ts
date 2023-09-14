import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccountService } from './account.service';

@Injectable()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  async createOne(accountCreateArgs: Prisma.AccountCreateArgs) {
    return await this.accountService.createOne(accountCreateArgs);
  }

  async createMany(accountCreateManyArgs: Prisma.AccountCreateManyArgs) {
    return await this.accountService.createMany(accountCreateManyArgs);
  }

  async findOne(accountFindUniqueArgs: Prisma.AccountFindUniqueArgs) {
    return await this.accountService.findOne(accountFindUniqueArgs);
  }

  async findMany(accountFindManyArgs: Prisma.AccountFindManyArgs) {
    return await this.accountService.findMany(accountFindManyArgs);
  }

  async findFirst(accountFindFirstArgs: Prisma.AccountFindFirstArgs) {
    return await this.accountService.findFirst(accountFindFirstArgs);
  }

  async updateOne(accountUpdateOneArgs: Prisma.AccountUpdateArgs) {
    return await this.accountService.updateOne(accountUpdateOneArgs);
  }

  async updateMany(accountUpdateManyArgs: Prisma.AccountUpdateManyArgs) {
    return await this.accountService.updateMany(accountUpdateManyArgs);
  }

  async delete(accountDeleteArgs: Prisma.AccountDeleteArgs) {
    return await this.accountService.delete(accountDeleteArgs);
  }

  async deleteMany(accountDeleteManyArgs: Prisma.AccountDeleteManyArgs) {
    return await this.accountService.deleteMany(accountDeleteManyArgs);
  }

  async aggregate(accountAggregateArgs: Prisma.AccountAggregateArgs) {
    return await this.accountService.aggregate(accountAggregateArgs);
  }

  async count(accountCountArgs: Prisma.AccountCountArgs) {
    return await this.accountService.count(accountCountArgs);
  }
}
