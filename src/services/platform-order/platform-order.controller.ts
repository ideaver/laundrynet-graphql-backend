import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PlatformOrderService } from './platform-order.service';

@Injectable()
export class PlatformOrderController {
  constructor(private readonly platformOrderService: PlatformOrderService) {}

  async createOne(platformOrderCreateArgs: Prisma.PlatformOrderCreateArgs) {
    return await this.platformOrderService.createOne(platformOrderCreateArgs);
  }

  async createMany(platformOrderCreateManyArgs: Prisma.PlatformOrderCreateManyArgs) {
    return await this.platformOrderService.createMany(platformOrderCreateManyArgs);
  }

  async findOne(platformOrderFindUniqueArgs: Prisma.PlatformOrderFindUniqueArgs) {
    return await this.platformOrderService.findOne(platformOrderFindUniqueArgs);
  }

  async findMany(platformOrderFindManyArgs: Prisma.PlatformOrderFindManyArgs) {
    return await this.platformOrderService.findMany(platformOrderFindManyArgs);
  }

  async findFirst(platformOrderFindFirstArgs: Prisma.PlatformOrderFindFirstArgs) {
    return await this.platformOrderService.findFirst(platformOrderFindFirstArgs);
  }

  async updateOne(platformOrderUpdateOneArgs: Prisma.PlatformOrderUpdateArgs) {
    return await this.platformOrderService.updateOne(platformOrderUpdateOneArgs);
  }

  async updateMany(platformOrderUpdateManyArgs: Prisma.PlatformOrderUpdateManyArgs) {
    return await this.platformOrderService.updateMany(platformOrderUpdateManyArgs);
  }

  async delete(platformOrderDeleteArgs: Prisma.PlatformOrderDeleteArgs) {
    return await this.platformOrderService.delete(platformOrderDeleteArgs);
  }

  async deleteMany(platformOrderDeleteManyArgs: Prisma.PlatformOrderDeleteManyArgs) {
    return await this.platformOrderService.deleteMany(platformOrderDeleteManyArgs);
  }

  async aggregate(platformOrderAggregateArgs: Prisma.PlatformOrderAggregateArgs) {
    return await this.platformOrderService.aggregate(platformOrderAggregateArgs);
  }

  async count(platformOrderCountArgs: Prisma.PlatformOrderCountArgs) {
    return await this.platformOrderService.count(platformOrderCountArgs);
  }
}
