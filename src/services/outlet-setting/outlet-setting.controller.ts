import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OutletSettingService } from './outlet-setting.service';

@Injectable()
export class OutletSettingController {
  constructor(private readonly outletSettingService: OutletSettingService) {}

  async createOne(outletSettingCreateArgs: Prisma.OutletSettingCreateArgs) {
    return await this.outletSettingService.createOne(outletSettingCreateArgs);
  }

  async createMany(outletSettingCreateManyArgs: Prisma.OutletSettingCreateManyArgs) {
    return await this.outletSettingService.createMany(outletSettingCreateManyArgs);
  }

  async findOne(outletSettingFindUniqueArgs: Prisma.OutletSettingFindUniqueArgs) {
    return await this.outletSettingService.findOne(outletSettingFindUniqueArgs);
  }

  async findMany(outletSettingFindManyArgs: Prisma.OutletSettingFindManyArgs) {
    return await this.outletSettingService.findMany(outletSettingFindManyArgs);
  }

  async findFirst(outletSettingFindFirstArgs: Prisma.OutletSettingFindFirstArgs) {
    return await this.outletSettingService.findFirst(outletSettingFindFirstArgs);
  }

  async updateOne(outletSettingUpdateOneArgs: Prisma.OutletSettingUpdateArgs) {
    return await this.outletSettingService.updateOne(outletSettingUpdateOneArgs);
  }

  async updateMany(outletSettingUpdateManyArgs: Prisma.OutletSettingUpdateManyArgs) {
    return await this.outletSettingService.updateMany(outletSettingUpdateManyArgs);
  }

  async delete(outletSettingDeleteArgs: Prisma.OutletSettingDeleteArgs) {
    return await this.outletSettingService.delete(outletSettingDeleteArgs);
  }

  async deleteMany(outletSettingDeleteManyArgs: Prisma.OutletSettingDeleteManyArgs) {
    return await this.outletSettingService.deleteMany(outletSettingDeleteManyArgs);
  }

  async aggregate(outletSettingAggregateArgs: Prisma.OutletSettingAggregateArgs) {
    return await this.outletSettingService.aggregate(outletSettingAggregateArgs);
  }

  async count(outletSettingCountArgs: Prisma.OutletSettingCountArgs) {
    return await this.outletSettingService.count(outletSettingCountArgs);
  }
}
