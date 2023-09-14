import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { VoucherSettingService } from './voucherSetting.service';

@Injectable()
export class VoucherSettingController {
  constructor(private readonly voucherSettingService: VoucherSettingService) {}

  async createOne(voucherSettingCreateArgs: Prisma.VoucherSettingCreateArgs) {
    return await this.voucherSettingService.createOne(voucherSettingCreateArgs);
  }

  async createMany(voucherSettingCreateManyArgs: Prisma.VoucherSettingCreateManyArgs) {
    return await this.voucherSettingService.createMany(voucherSettingCreateManyArgs);
  }

  async findOne(voucherSettingFindUniqueArgs: Prisma.VoucherSettingFindUniqueArgs) {
    return await this.voucherSettingService.findOne(voucherSettingFindUniqueArgs);
  }

  async findMany(voucherSettingFindManyArgs: Prisma.VoucherSettingFindManyArgs) {
    return await this.voucherSettingService.findMany(voucherSettingFindManyArgs);
  }

  async findFirst(voucherSettingFindFirstArgs: Prisma.VoucherSettingFindFirstArgs) {
    return await this.voucherSettingService.findFirst(voucherSettingFindFirstArgs);
  }

  async updateOne(voucherSettingUpdateOneArgs: Prisma.VoucherSettingUpdateArgs) {
    return await this.voucherSettingService.updateOne(voucherSettingUpdateOneArgs);
  }

  async updateMany(voucherSettingUpdateManyArgs: Prisma.VoucherSettingUpdateManyArgs) {
    return await this.voucherSettingService.updateMany(voucherSettingUpdateManyArgs);
  }

  async delete(voucherSettingDeleteArgs: Prisma.VoucherSettingDeleteArgs) {
    return await this.voucherSettingService.delete(voucherSettingDeleteArgs);
  }

  async deleteMany(voucherSettingDeleteManyArgs: Prisma.VoucherSettingDeleteManyArgs) {
    return await this.voucherSettingService.deleteMany(voucherSettingDeleteManyArgs);
  }

  async aggregate(voucherSettingAggregateArgs: Prisma.VoucherSettingAggregateArgs) {
    return await this.voucherSettingService.aggregate(voucherSettingAggregateArgs);
  }

  async count(voucherSettingCountArgs: Prisma.VoucherSettingCountArgs) {
    return await this.voucherSettingService.count(voucherSettingCountArgs);
  }
}
