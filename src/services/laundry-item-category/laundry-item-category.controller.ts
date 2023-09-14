import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LaundryItemCategoryService } from './laundryItemCategory.service';

@Injectable()
export class LaundryItemCategoryController {
  constructor(private readonly laundryItemCategoryService: LaundryItemCategoryService) {}

  async createOne(laundryItemCategoryCreateArgs: Prisma.LaundryItemCategoryCreateArgs) {
    return await this.laundryItemCategoryService.createOne(laundryItemCategoryCreateArgs);
  }

  async createMany(laundryItemCategoryCreateManyArgs: Prisma.LaundryItemCategoryCreateManyArgs) {
    return await this.laundryItemCategoryService.createMany(laundryItemCategoryCreateManyArgs);
  }

  async findOne(laundryItemCategoryFindUniqueArgs: Prisma.LaundryItemCategoryFindUniqueArgs) {
    return await this.laundryItemCategoryService.findOne(laundryItemCategoryFindUniqueArgs);
  }

  async findMany(laundryItemCategoryFindManyArgs: Prisma.LaundryItemCategoryFindManyArgs) {
    return await this.laundryItemCategoryService.findMany(laundryItemCategoryFindManyArgs);
  }

  async findFirst(laundryItemCategoryFindFirstArgs: Prisma.LaundryItemCategoryFindFirstArgs) {
    return await this.laundryItemCategoryService.findFirst(laundryItemCategoryFindFirstArgs);
  }

  async updateOne(laundryItemCategoryUpdateOneArgs: Prisma.LaundryItemCategoryUpdateArgs) {
    return await this.laundryItemCategoryService.updateOne(laundryItemCategoryUpdateOneArgs);
  }

  async updateMany(laundryItemCategoryUpdateManyArgs: Prisma.LaundryItemCategoryUpdateManyArgs) {
    return await this.laundryItemCategoryService.updateMany(laundryItemCategoryUpdateManyArgs);
  }

  async delete(laundryItemCategoryDeleteArgs: Prisma.LaundryItemCategoryDeleteArgs) {
    return await this.laundryItemCategoryService.delete(laundryItemCategoryDeleteArgs);
  }

  async deleteMany(laundryItemCategoryDeleteManyArgs: Prisma.LaundryItemCategoryDeleteManyArgs) {
    return await this.laundryItemCategoryService.deleteMany(laundryItemCategoryDeleteManyArgs);
  }

  async aggregate(laundryItemCategoryAggregateArgs: Prisma.LaundryItemCategoryAggregateArgs) {
    return await this.laundryItemCategoryService.aggregate(laundryItemCategoryAggregateArgs);
  }

  async count(laundryItemCategoryCountArgs: Prisma.LaundryItemCategoryCountArgs) {
    return await this.laundryItemCategoryService.count(laundryItemCategoryCountArgs);
  }
}
