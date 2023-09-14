import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OutletLaundryItemServiceService } from './outletLaundryItemService.service';

@Injectable()
export class OutletLaundryItemServiceController {
  constructor(private readonly outletLaundryItemServiceService: OutletLaundryItemServiceService) {}

  async createOne(outletLaundryItemServiceCreateArgs: Prisma.OutletLaundryItemServiceCreateArgs) {
    return await this.outletLaundryItemServiceService.createOne(outletLaundryItemServiceCreateArgs);
  }

  async createMany(outletLaundryItemServiceCreateManyArgs: Prisma.OutletLaundryItemServiceCreateManyArgs) {
    return await this.outletLaundryItemServiceService.createMany(outletLaundryItemServiceCreateManyArgs);
  }

  async findOne(outletLaundryItemServiceFindUniqueArgs: Prisma.OutletLaundryItemServiceFindUniqueArgs) {
    return await this.outletLaundryItemServiceService.findOne(outletLaundryItemServiceFindUniqueArgs);
  }

  async findMany(outletLaundryItemServiceFindManyArgs: Prisma.OutletLaundryItemServiceFindManyArgs) {
    return await this.outletLaundryItemServiceService.findMany(outletLaundryItemServiceFindManyArgs);
  }

  async findFirst(outletLaundryItemServiceFindFirstArgs: Prisma.OutletLaundryItemServiceFindFirstArgs) {
    return await this.outletLaundryItemServiceService.findFirst(outletLaundryItemServiceFindFirstArgs);
  }

  async updateOne(outletLaundryItemServiceUpdateOneArgs: Prisma.OutletLaundryItemServiceUpdateArgs) {
    return await this.outletLaundryItemServiceService.updateOne(outletLaundryItemServiceUpdateOneArgs);
  }

  async updateMany(outletLaundryItemServiceUpdateManyArgs: Prisma.OutletLaundryItemServiceUpdateManyArgs) {
    return await this.outletLaundryItemServiceService.updateMany(outletLaundryItemServiceUpdateManyArgs);
  }

  async delete(outletLaundryItemServiceDeleteArgs: Prisma.OutletLaundryItemServiceDeleteArgs) {
    return await this.outletLaundryItemServiceService.delete(outletLaundryItemServiceDeleteArgs);
  }

  async deleteMany(outletLaundryItemServiceDeleteManyArgs: Prisma.OutletLaundryItemServiceDeleteManyArgs) {
    return await this.outletLaundryItemServiceService.deleteMany(outletLaundryItemServiceDeleteManyArgs);
  }

  async aggregate(outletLaundryItemServiceAggregateArgs: Prisma.OutletLaundryItemServiceAggregateArgs) {
    return await this.outletLaundryItemServiceService.aggregate(outletLaundryItemServiceAggregateArgs);
  }

  async count(outletLaundryItemServiceCountArgs: Prisma.OutletLaundryItemServiceCountArgs) {
    return await this.outletLaundryItemServiceService.count(outletLaundryItemServiceCountArgs);
  }
}
