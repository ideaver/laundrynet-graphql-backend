import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OutletVoucherService } from './outletVoucher.service';

@Injectable()
export class OutletVoucherController {
  constructor(private readonly outletVoucherService: OutletVoucherService) {}

  async createOne(outletVoucherCreateArgs: Prisma.OutletVoucherCreateArgs) {
    return await this.outletVoucherService.createOne(outletVoucherCreateArgs);
  }

  async createMany(outletVoucherCreateManyArgs: Prisma.OutletVoucherCreateManyArgs) {
    return await this.outletVoucherService.createMany(outletVoucherCreateManyArgs);
  }

  async findOne(outletVoucherFindUniqueArgs: Prisma.OutletVoucherFindUniqueArgs) {
    return await this.outletVoucherService.findOne(outletVoucherFindUniqueArgs);
  }

  async findMany(outletVoucherFindManyArgs: Prisma.OutletVoucherFindManyArgs) {
    return await this.outletVoucherService.findMany(outletVoucherFindManyArgs);
  }

  async findFirst(outletVoucherFindFirstArgs: Prisma.OutletVoucherFindFirstArgs) {
    return await this.outletVoucherService.findFirst(outletVoucherFindFirstArgs);
  }

  async updateOne(outletVoucherUpdateOneArgs: Prisma.OutletVoucherUpdateArgs) {
    return await this.outletVoucherService.updateOne(outletVoucherUpdateOneArgs);
  }

  async updateMany(outletVoucherUpdateManyArgs: Prisma.OutletVoucherUpdateManyArgs) {
    return await this.outletVoucherService.updateMany(outletVoucherUpdateManyArgs);
  }

  async delete(outletVoucherDeleteArgs: Prisma.OutletVoucherDeleteArgs) {
    return await this.outletVoucherService.delete(outletVoucherDeleteArgs);
  }

  async deleteMany(outletVoucherDeleteManyArgs: Prisma.OutletVoucherDeleteManyArgs) {
    return await this.outletVoucherService.deleteMany(outletVoucherDeleteManyArgs);
  }

  async aggregate(outletVoucherAggregateArgs: Prisma.OutletVoucherAggregateArgs) {
    return await this.outletVoucherService.aggregate(outletVoucherAggregateArgs);
  }

  async count(outletVoucherCountArgs: Prisma.OutletVoucherCountArgs) {
    return await this.outletVoucherService.count(outletVoucherCountArgs);
  }
}
