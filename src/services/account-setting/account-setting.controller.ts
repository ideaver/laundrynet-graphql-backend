import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccountSettingService } from './account-setting.service';

@Injectable()
export class AccountSettingController {
  constructor(private readonly accountSettingService: AccountSettingService) {}

  async createOne(accountSettingCreateArgs: Prisma.AccountSettingCreateArgs) {
    return await this.accountSettingService.createOne(accountSettingCreateArgs);
  }

  async createMany(accountSettingCreateManyArgs: Prisma.AccountSettingCreateManyArgs) {
    return await this.accountSettingService.createMany(accountSettingCreateManyArgs);
  }

  async findOne(accountSettingFindUniqueArgs: Prisma.AccountSettingFindUniqueArgs) {
    return await this.accountSettingService.findOne(accountSettingFindUniqueArgs);
  }

  async findMany(accountSettingFindManyArgs: Prisma.AccountSettingFindManyArgs) {
    return await this.accountSettingService.findMany(accountSettingFindManyArgs);
  }

  async findFirst(accountSettingFindFirstArgs: Prisma.AccountSettingFindFirstArgs) {
    return await this.accountSettingService.findFirst(accountSettingFindFirstArgs);
  }

  async updateOne(accountSettingUpdateOneArgs: Prisma.AccountSettingUpdateArgs) {
    return await this.accountSettingService.updateOne(accountSettingUpdateOneArgs);
  }

  async updateMany(accountSettingUpdateManyArgs: Prisma.AccountSettingUpdateManyArgs) {
    return await this.accountSettingService.updateMany(accountSettingUpdateManyArgs);
  }

  async delete(accountSettingDeleteArgs: Prisma.AccountSettingDeleteArgs) {
    return await this.accountSettingService.delete(accountSettingDeleteArgs);
  }

  async deleteMany(accountSettingDeleteManyArgs: Prisma.AccountSettingDeleteManyArgs) {
    return await this.accountSettingService.deleteMany(accountSettingDeleteManyArgs);
  }

  async aggregate(accountSettingAggregateArgs: Prisma.AccountSettingAggregateArgs) {
    return await this.accountSettingService.aggregate(accountSettingAggregateArgs);
  }

  async count(accountSettingCountArgs: Prisma.AccountSettingCountArgs) {
    return await this.accountSettingService.count(accountSettingCountArgs);
  }
}
