import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DeliveryLocationHistoryService } from './delivery-location-history.service';

@Injectable()
export class DeliveryLocationHistoryController {
  constructor(private readonly deliveryLocationHistoryService: DeliveryLocationHistoryService) {}

  async createOne(deliveryLocationHistoryCreateArgs: Prisma.DeliveryLocationHistoryCreateArgs) {
    return await this.deliveryLocationHistoryService.createOne(deliveryLocationHistoryCreateArgs);
  }

  async createMany(deliveryLocationHistoryCreateManyArgs: Prisma.DeliveryLocationHistoryCreateManyArgs) {
    return await this.deliveryLocationHistoryService.createMany(deliveryLocationHistoryCreateManyArgs);
  }

  async findOne(deliveryLocationHistoryFindUniqueArgs: Prisma.DeliveryLocationHistoryFindUniqueArgs) {
    return await this.deliveryLocationHistoryService.findOne(deliveryLocationHistoryFindUniqueArgs);
  }

  async findMany(deliveryLocationHistoryFindManyArgs: Prisma.DeliveryLocationHistoryFindManyArgs) {
    return await this.deliveryLocationHistoryService.findMany(deliveryLocationHistoryFindManyArgs);
  }

  async findFirst(deliveryLocationHistoryFindFirstArgs: Prisma.DeliveryLocationHistoryFindFirstArgs) {
    return await this.deliveryLocationHistoryService.findFirst(deliveryLocationHistoryFindFirstArgs);
  }

  async updateOne(deliveryLocationHistoryUpdateOneArgs: Prisma.DeliveryLocationHistoryUpdateArgs) {
    return await this.deliveryLocationHistoryService.updateOne(deliveryLocationHistoryUpdateOneArgs);
  }

  async updateMany(deliveryLocationHistoryUpdateManyArgs: Prisma.DeliveryLocationHistoryUpdateManyArgs) {
    return await this.deliveryLocationHistoryService.updateMany(deliveryLocationHistoryUpdateManyArgs);
  }

  async delete(deliveryLocationHistoryDeleteArgs: Prisma.DeliveryLocationHistoryDeleteArgs) {
    return await this.deliveryLocationHistoryService.delete(deliveryLocationHistoryDeleteArgs);
  }

  async deleteMany(deliveryLocationHistoryDeleteManyArgs: Prisma.DeliveryLocationHistoryDeleteManyArgs) {
    return await this.deliveryLocationHistoryService.deleteMany(deliveryLocationHistoryDeleteManyArgs);
  }

  async aggregate(deliveryLocationHistoryAggregateArgs: Prisma.DeliveryLocationHistoryAggregateArgs) {
    return await this.deliveryLocationHistoryService.aggregate(deliveryLocationHistoryAggregateArgs);
  }

  async count(deliveryLocationHistoryCountArgs: Prisma.DeliveryLocationHistoryCountArgs) {
    return await this.deliveryLocationHistoryService.count(deliveryLocationHistoryCountArgs);
  }
}
