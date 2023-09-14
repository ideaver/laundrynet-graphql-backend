import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MachineCategoryService } from './machineCategory.service';

@Injectable()
export class MachineCategoryController {
  constructor(private readonly machineCategoryService: MachineCategoryService) {}

  async createOne(machineCategoryCreateArgs: Prisma.MachineCategoryCreateArgs) {
    return await this.machineCategoryService.createOne(machineCategoryCreateArgs);
  }

  async createMany(machineCategoryCreateManyArgs: Prisma.MachineCategoryCreateManyArgs) {
    return await this.machineCategoryService.createMany(machineCategoryCreateManyArgs);
  }

  async findOne(machineCategoryFindUniqueArgs: Prisma.MachineCategoryFindUniqueArgs) {
    return await this.machineCategoryService.findOne(machineCategoryFindUniqueArgs);
  }

  async findMany(machineCategoryFindManyArgs: Prisma.MachineCategoryFindManyArgs) {
    return await this.machineCategoryService.findMany(machineCategoryFindManyArgs);
  }

  async findFirst(machineCategoryFindFirstArgs: Prisma.MachineCategoryFindFirstArgs) {
    return await this.machineCategoryService.findFirst(machineCategoryFindFirstArgs);
  }

  async updateOne(machineCategoryUpdateOneArgs: Prisma.MachineCategoryUpdateArgs) {
    return await this.machineCategoryService.updateOne(machineCategoryUpdateOneArgs);
  }

  async updateMany(machineCategoryUpdateManyArgs: Prisma.MachineCategoryUpdateManyArgs) {
    return await this.machineCategoryService.updateMany(machineCategoryUpdateManyArgs);
  }

  async delete(machineCategoryDeleteArgs: Prisma.MachineCategoryDeleteArgs) {
    return await this.machineCategoryService.delete(machineCategoryDeleteArgs);
  }

  async deleteMany(machineCategoryDeleteManyArgs: Prisma.MachineCategoryDeleteManyArgs) {
    return await this.machineCategoryService.deleteMany(machineCategoryDeleteManyArgs);
  }

  async aggregate(machineCategoryAggregateArgs: Prisma.MachineCategoryAggregateArgs) {
    return await this.machineCategoryService.aggregate(machineCategoryAggregateArgs);
  }

  async count(machineCategoryCountArgs: Prisma.MachineCategoryCountArgs) {
    return await this.machineCategoryService.count(machineCategoryCountArgs);
  }
}
