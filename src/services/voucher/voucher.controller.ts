import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { VoucherService } from './voucher.service';

@Injectable()
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  async createOne(voucherCreateArgs: Prisma.VoucherCreateArgs) {
    return await this.voucherService.createOne(voucherCreateArgs);
  }

  async createMany(voucherCreateManyArgs: Prisma.VoucherCreateManyArgs) {
    return await this.voucherService.createMany(voucherCreateManyArgs);
  }

  async findOne(voucherFindUniqueArgs: Prisma.VoucherFindUniqueArgs) {
    return await this.voucherService.findOne(voucherFindUniqueArgs);
  }

  async findMany(voucherFindManyArgs: Prisma.VoucherFindManyArgs) {
    return await this.voucherService.findMany(voucherFindManyArgs);
  }

  async findFirst(voucherFindFirstArgs: Prisma.VoucherFindFirstArgs) {
    return await this.voucherService.findFirst(voucherFindFirstArgs);
  }

  async updateOne(voucherUpdateOneArgs: Prisma.VoucherUpdateArgs) {
    return await this.voucherService.updateOne(voucherUpdateOneArgs);
  }

  async updateMany(voucherUpdateManyArgs: Prisma.VoucherUpdateManyArgs) {
    return await this.voucherService.updateMany(voucherUpdateManyArgs);
  }

  async delete(voucherDeleteArgs: Prisma.VoucherDeleteArgs) {
    return await this.voucherService.delete(voucherDeleteArgs);
  }

  async deleteMany(voucherDeleteManyArgs: Prisma.VoucherDeleteManyArgs) {
    return await this.voucherService.deleteMany(voucherDeleteManyArgs);
  }

  async aggregate(voucherAggregateArgs: Prisma.VoucherAggregateArgs) {
    return await this.voucherService.aggregate(voucherAggregateArgs);
  }

  async count(voucherCountArgs: Prisma.VoucherCountArgs) {
    return await this.voucherService.count(voucherCountArgs);
  }
}
