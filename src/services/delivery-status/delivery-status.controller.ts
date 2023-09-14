import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DeliveryStatusService } from './deliveryStatus.service';

@Injectable()
export class DeliveryStatusController {
  constructor(private readonly deliveryStatusService: DeliveryStatusService) {}

  async createOne(deliveryStatusCreateArgs: Prisma.DeliveryStatusCreateArgs) {
    return await this.deliveryStatusService.createOne(deliveryStatusCreateArgs);
  }

  async createMany(deliveryStatusCreateManyArgs: Prisma.DeliveryStatusCreateManyArgs) {
    return await this.deliveryStatusService.createMany(deliveryStatusCreateManyArgs);
  }

  async findOne(deliveryStatusFindUniqueArgs: Prisma.DeliveryStatusFindUniqueArgs) {
    return await this.deliveryStatusService.findOne(deliveryStatusFindUniqueArgs);
  }

  async findMany(deliveryStatusFindManyArgs: Prisma.DeliveryStatusFindManyArgs) {
    return await this.deliveryStatusService.findMany(deliveryStatusFindManyArgs);
  }

  async findFirst(deliveryStatusFindFirstArgs: Prisma.DeliveryStatusFindFirstArgs) {
    return await this.deliveryStatusService.findFirst(deliveryStatusFindFirstArgs);
  }

  async updateOne(deliveryStatusUpdateOneArgs: Prisma.DeliveryStatusUpdateArgs) {
    return await this.deliveryStatusService.updateOne(deliveryStatusUpdateOneArgs);
  }

  async updateMany(deliveryStatusUpdateManyArgs: Prisma.DeliveryStatusUpdateManyArgs) {
    return await this.deliveryStatusService.updateMany(deliveryStatusUpdateManyArgs);
  }

  async delete(deliveryStatusDeleteArgs: Prisma.DeliveryStatusDeleteArgs) {
    return await this.deliveryStatusService.delete(deliveryStatusDeleteArgs);
  }

  async deleteMany(deliveryStatusDeleteManyArgs: Prisma.DeliveryStatusDeleteManyArgs) {
    return await this.deliveryStatusService.deleteMany(deliveryStatusDeleteManyArgs);
  }

  async aggregate(deliveryStatusAggregateArgs: Prisma.DeliveryStatusAggregateArgs) {
    return await this.deliveryStatusService.aggregate(deliveryStatusAggregateArgs);
  }

  async count(deliveryStatusCountArgs: Prisma.DeliveryStatusCountArgs) {
    return await this.deliveryStatusService.count(deliveryStatusCountArgs);
  }
}
