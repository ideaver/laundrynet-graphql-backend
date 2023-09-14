import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PlatformItemService } from './platformItem.service';

@Injectable()
export class PlatformItemController {
  constructor(private readonly platformItemService: PlatformItemService) {}

  async createOne(platformItemCreateArgs: Prisma.PlatformItemCreateArgs) {
    return await this.platformItemService.createOne(platformItemCreateArgs);
  }

  async createMany(platformItemCreateManyArgs: Prisma.PlatformItemCreateManyArgs) {
    return await this.platformItemService.createMany(platformItemCreateManyArgs);
  }

  async findOne(platformItemFindUniqueArgs: Prisma.PlatformItemFindUniqueArgs) {
    return await this.platformItemService.findOne(platformItemFindUniqueArgs);
  }

  async findMany(platformItemFindManyArgs: Prisma.PlatformItemFindManyArgs) {
    return await this.platformItemService.findMany(platformItemFindManyArgs);
  }

  async findFirst(platformItemFindFirstArgs: Prisma.PlatformItemFindFirstArgs) {
    return await this.platformItemService.findFirst(platformItemFindFirstArgs);
  }

  async updateOne(platformItemUpdateOneArgs: Prisma.PlatformItemUpdateArgs) {
    return await this.platformItemService.updateOne(platformItemUpdateOneArgs);
  }

  async updateMany(platformItemUpdateManyArgs: Prisma.PlatformItemUpdateManyArgs) {
    return await this.platformItemService.updateMany(platformItemUpdateManyArgs);
  }

  async delete(platformItemDeleteArgs: Prisma.PlatformItemDeleteArgs) {
    return await this.platformItemService.delete(platformItemDeleteArgs);
  }

  async deleteMany(platformItemDeleteManyArgs: Prisma.PlatformItemDeleteManyArgs) {
    return await this.platformItemService.deleteMany(platformItemDeleteManyArgs);
  }

  async aggregate(platformItemAggregateArgs: Prisma.PlatformItemAggregateArgs) {
    return await this.platformItemService.aggregate(platformItemAggregateArgs);
  }

  async count(platformItemCountArgs: Prisma.PlatformItemCountArgs) {
    return await this.platformItemService.count(platformItemCountArgs);
  }
}
