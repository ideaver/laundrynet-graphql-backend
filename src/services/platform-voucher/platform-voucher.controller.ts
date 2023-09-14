import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PlatformVoucherService } from './platformVoucher.service';

@Injectable()
export class PlatformVoucherController {
  constructor(private readonly platformVoucherService: PlatformVoucherService) {}

  async createOne(platformVoucherCreateArgs: Prisma.PlatformVoucherCreateArgs) {
    return await this.platformVoucherService.createOne(platformVoucherCreateArgs);
  }

  async createMany(platformVoucherCreateManyArgs: Prisma.PlatformVoucherCreateManyArgs) {
    return await this.platformVoucherService.createMany(platformVoucherCreateManyArgs);
  }

  async findOne(platformVoucherFindUniqueArgs: Prisma.PlatformVoucherFindUniqueArgs) {
    return await this.platformVoucherService.findOne(platformVoucherFindUniqueArgs);
  }

  async findMany(platformVoucherFindManyArgs: Prisma.PlatformVoucherFindManyArgs) {
    return await this.platformVoucherService.findMany(platformVoucherFindManyArgs);
  }

  async findFirst(platformVoucherFindFirstArgs: Prisma.PlatformVoucherFindFirstArgs) {
    return await this.platformVoucherService.findFirst(platformVoucherFindFirstArgs);
  }

  async updateOne(platformVoucherUpdateOneArgs: Prisma.PlatformVoucherUpdateArgs) {
    return await this.platformVoucherService.updateOne(platformVoucherUpdateOneArgs);
  }

  async updateMany(platformVoucherUpdateManyArgs: Prisma.PlatformVoucherUpdateManyArgs) {
    return await this.platformVoucherService.updateMany(platformVoucherUpdateManyArgs);
  }

  async delete(platformVoucherDeleteArgs: Prisma.PlatformVoucherDeleteArgs) {
    return await this.platformVoucherService.delete(platformVoucherDeleteArgs);
  }

  async deleteMany(platformVoucherDeleteManyArgs: Prisma.PlatformVoucherDeleteManyArgs) {
    return await this.platformVoucherService.deleteMany(platformVoucherDeleteManyArgs);
  }

  async aggregate(platformVoucherAggregateArgs: Prisma.PlatformVoucherAggregateArgs) {
    return await this.platformVoucherService.aggregate(platformVoucherAggregateArgs);
  }

  async count(platformVoucherCountArgs: Prisma.PlatformVoucherCountArgs) {
    return await this.platformVoucherService.count(platformVoucherCountArgs);
  }
}
