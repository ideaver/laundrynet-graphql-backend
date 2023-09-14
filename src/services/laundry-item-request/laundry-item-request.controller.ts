import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LaundryItemRequestService } from './laundry-item-request.service';

@Injectable()
export class LaundryItemRequestController {
  constructor(private readonly laundryItemRequestService: LaundryItemRequestService) {}

  async createOne(laundryItemRequestCreateArgs: Prisma.LaundryItemRequestCreateArgs) {
    return await this.laundryItemRequestService.createOne(laundryItemRequestCreateArgs);
  }

  async createMany(laundryItemRequestCreateManyArgs: Prisma.LaundryItemRequestCreateManyArgs) {
    return await this.laundryItemRequestService.createMany(laundryItemRequestCreateManyArgs);
  }

  async findOne(laundryItemRequestFindUniqueArgs: Prisma.LaundryItemRequestFindUniqueArgs) {
    return await this.laundryItemRequestService.findOne(laundryItemRequestFindUniqueArgs);
  }

  async findMany(laundryItemRequestFindManyArgs: Prisma.LaundryItemRequestFindManyArgs) {
    return await this.laundryItemRequestService.findMany(laundryItemRequestFindManyArgs);
  }

  async findFirst(laundryItemRequestFindFirstArgs: Prisma.LaundryItemRequestFindFirstArgs) {
    return await this.laundryItemRequestService.findFirst(laundryItemRequestFindFirstArgs);
  }

  async updateOne(laundryItemRequestUpdateOneArgs: Prisma.LaundryItemRequestUpdateArgs) {
    return await this.laundryItemRequestService.updateOne(laundryItemRequestUpdateOneArgs);
  }

  async updateMany(laundryItemRequestUpdateManyArgs: Prisma.LaundryItemRequestUpdateManyArgs) {
    return await this.laundryItemRequestService.updateMany(laundryItemRequestUpdateManyArgs);
  }

  async delete(laundryItemRequestDeleteArgs: Prisma.LaundryItemRequestDeleteArgs) {
    return await this.laundryItemRequestService.delete(laundryItemRequestDeleteArgs);
  }

  async deleteMany(laundryItemRequestDeleteManyArgs: Prisma.LaundryItemRequestDeleteManyArgs) {
    return await this.laundryItemRequestService.deleteMany(laundryItemRequestDeleteManyArgs);
  }

  async aggregate(laundryItemRequestAggregateArgs: Prisma.LaundryItemRequestAggregateArgs) {
    return await this.laundryItemRequestService.aggregate(laundryItemRequestAggregateArgs);
  }

  async count(laundryItemRequestCountArgs: Prisma.LaundryItemRequestCountArgs) {
    return await this.laundryItemRequestService.count(laundryItemRequestCountArgs);
  }
}
