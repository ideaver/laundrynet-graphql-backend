import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LaundryItemService } from './laundryItem.service';

@Injectable()
export class LaundryItemController {
  constructor(private readonly laundryItemService: LaundryItemService) {}

  async createOne(laundryItemCreateArgs: Prisma.LaundryItemCreateArgs) {
    return await this.laundryItemService.createOne(laundryItemCreateArgs);
  }

  async createMany(laundryItemCreateManyArgs: Prisma.LaundryItemCreateManyArgs) {
    return await this.laundryItemService.createMany(laundryItemCreateManyArgs);
  }

  async findOne(laundryItemFindUniqueArgs: Prisma.LaundryItemFindUniqueArgs) {
    return await this.laundryItemService.findOne(laundryItemFindUniqueArgs);
  }

  async findMany(laundryItemFindManyArgs: Prisma.LaundryItemFindManyArgs) {
    return await this.laundryItemService.findMany(laundryItemFindManyArgs);
  }

  async findFirst(laundryItemFindFirstArgs: Prisma.LaundryItemFindFirstArgs) {
    return await this.laundryItemService.findFirst(laundryItemFindFirstArgs);
  }

  async updateOne(laundryItemUpdateOneArgs: Prisma.LaundryItemUpdateArgs) {
    return await this.laundryItemService.updateOne(laundryItemUpdateOneArgs);
  }

  async updateMany(laundryItemUpdateManyArgs: Prisma.LaundryItemUpdateManyArgs) {
    return await this.laundryItemService.updateMany(laundryItemUpdateManyArgs);
  }

  async delete(laundryItemDeleteArgs: Prisma.LaundryItemDeleteArgs) {
    return await this.laundryItemService.delete(laundryItemDeleteArgs);
  }

  async deleteMany(laundryItemDeleteManyArgs: Prisma.LaundryItemDeleteManyArgs) {
    return await this.laundryItemService.deleteMany(laundryItemDeleteManyArgs);
  }

  async aggregate(laundryItemAggregateArgs: Prisma.LaundryItemAggregateArgs) {
    return await this.laundryItemService.aggregate(laundryItemAggregateArgs);
  }

  async count(laundryItemCountArgs: Prisma.LaundryItemCountArgs) {
    return await this.laundryItemService.count(laundryItemCountArgs);
  }
}
