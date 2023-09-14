import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BusinessHourService } from './business-hour.service';

@Injectable()
export class BusinessHourController {
  constructor(private readonly businessHourService: BusinessHourService) {}

  async createOne(businessHourCreateArgs: Prisma.BusinessHourCreateArgs) {
    return await this.businessHourService.createOne(businessHourCreateArgs);
  }

  async createMany(businessHourCreateManyArgs: Prisma.BusinessHourCreateManyArgs) {
    return await this.businessHourService.createMany(businessHourCreateManyArgs);
  }

  async findOne(businessHourFindUniqueArgs: Prisma.BusinessHourFindUniqueArgs) {
    return await this.businessHourService.findOne(businessHourFindUniqueArgs);
  }

  async findMany(businessHourFindManyArgs: Prisma.BusinessHourFindManyArgs) {
    return await this.businessHourService.findMany(businessHourFindManyArgs);
  }

  async findFirst(businessHourFindFirstArgs: Prisma.BusinessHourFindFirstArgs) {
    return await this.businessHourService.findFirst(businessHourFindFirstArgs);
  }

  async updateOne(businessHourUpdateOneArgs: Prisma.BusinessHourUpdateArgs) {
    return await this.businessHourService.updateOne(businessHourUpdateOneArgs);
  }

  async updateMany(businessHourUpdateManyArgs: Prisma.BusinessHourUpdateManyArgs) {
    return await this.businessHourService.updateMany(businessHourUpdateManyArgs);
  }

  async delete(businessHourDeleteArgs: Prisma.BusinessHourDeleteArgs) {
    return await this.businessHourService.delete(businessHourDeleteArgs);
  }

  async deleteMany(businessHourDeleteManyArgs: Prisma.BusinessHourDeleteManyArgs) {
    return await this.businessHourService.deleteMany(businessHourDeleteManyArgs);
  }

  async aggregate(businessHourAggregateArgs: Prisma.BusinessHourAggregateArgs) {
    return await this.businessHourService.aggregate(businessHourAggregateArgs);
  }

  async count(businessHourCountArgs: Prisma.BusinessHourCountArgs) {
    return await this.businessHourService.count(businessHourCountArgs);
  }
}
