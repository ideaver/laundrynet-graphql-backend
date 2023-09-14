import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OutletService } from './outlet.service';

@Injectable()
export class OutletController {
  constructor(private readonly outletService: OutletService) {}

  async createOne(outletCreateArgs: Prisma.OutletCreateArgs) {
    return await this.outletService.createOne(outletCreateArgs);
  }

  async createMany(outletCreateManyArgs: Prisma.OutletCreateManyArgs) {
    return await this.outletService.createMany(outletCreateManyArgs);
  }

  async findOne(outletFindUniqueArgs: Prisma.OutletFindUniqueArgs) {
    return await this.outletService.findOne(outletFindUniqueArgs);
  }

  async findMany(outletFindManyArgs: Prisma.OutletFindManyArgs) {
    return await this.outletService.findMany(outletFindManyArgs);
  }

  async findFirst(outletFindFirstArgs: Prisma.OutletFindFirstArgs) {
    return await this.outletService.findFirst(outletFindFirstArgs);
  }

  async updateOne(outletUpdateOneArgs: Prisma.OutletUpdateArgs) {
    return await this.outletService.updateOne(outletUpdateOneArgs);
  }

  async updateMany(outletUpdateManyArgs: Prisma.OutletUpdateManyArgs) {
    return await this.outletService.updateMany(outletUpdateManyArgs);
  }

  async delete(outletDeleteArgs: Prisma.OutletDeleteArgs) {
    return await this.outletService.delete(outletDeleteArgs);
  }

  async deleteMany(outletDeleteManyArgs: Prisma.OutletDeleteManyArgs) {
    return await this.outletService.deleteMany(outletDeleteManyArgs);
  }

  async aggregate(outletAggregateArgs: Prisma.OutletAggregateArgs) {
    return await this.outletService.aggregate(outletAggregateArgs);
  }

  async count(outletCountArgs: Prisma.OutletCountArgs) {
    return await this.outletService.count(outletCountArgs);
  }
}
