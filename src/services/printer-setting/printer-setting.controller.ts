import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrinterSettingService } from './printerSetting.service';

@Injectable()
export class PrinterSettingController {
  constructor(private readonly printerSettingService: PrinterSettingService) {}

  async createOne(printerSettingCreateArgs: Prisma.PrinterSettingCreateArgs) {
    return await this.printerSettingService.createOne(printerSettingCreateArgs);
  }

  async createMany(printerSettingCreateManyArgs: Prisma.PrinterSettingCreateManyArgs) {
    return await this.printerSettingService.createMany(printerSettingCreateManyArgs);
  }

  async findOne(printerSettingFindUniqueArgs: Prisma.PrinterSettingFindUniqueArgs) {
    return await this.printerSettingService.findOne(printerSettingFindUniqueArgs);
  }

  async findMany(printerSettingFindManyArgs: Prisma.PrinterSettingFindManyArgs) {
    return await this.printerSettingService.findMany(printerSettingFindManyArgs);
  }

  async findFirst(printerSettingFindFirstArgs: Prisma.PrinterSettingFindFirstArgs) {
    return await this.printerSettingService.findFirst(printerSettingFindFirstArgs);
  }

  async updateOne(printerSettingUpdateOneArgs: Prisma.PrinterSettingUpdateArgs) {
    return await this.printerSettingService.updateOne(printerSettingUpdateOneArgs);
  }

  async updateMany(printerSettingUpdateManyArgs: Prisma.PrinterSettingUpdateManyArgs) {
    return await this.printerSettingService.updateMany(printerSettingUpdateManyArgs);
  }

  async delete(printerSettingDeleteArgs: Prisma.PrinterSettingDeleteArgs) {
    return await this.printerSettingService.delete(printerSettingDeleteArgs);
  }

  async deleteMany(printerSettingDeleteManyArgs: Prisma.PrinterSettingDeleteManyArgs) {
    return await this.printerSettingService.deleteMany(printerSettingDeleteManyArgs);
  }

  async aggregate(printerSettingAggregateArgs: Prisma.PrinterSettingAggregateArgs) {
    return await this.printerSettingService.aggregate(printerSettingAggregateArgs);
  }

  async count(printerSettingCountArgs: Prisma.PrinterSettingCountArgs) {
    return await this.printerSettingService.count(printerSettingCountArgs);
  }
}
