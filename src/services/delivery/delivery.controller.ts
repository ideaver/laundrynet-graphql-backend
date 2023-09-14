import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DeliveryService } from './delivery.service';

@Injectable()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  async createOne(deliveryCreateArgs: Prisma.DeliveryCreateArgs) {
    return await this.deliveryService.createOne(deliveryCreateArgs);
  }

  async createMany(deliveryCreateManyArgs: Prisma.DeliveryCreateManyArgs) {
    return await this.deliveryService.createMany(deliveryCreateManyArgs);
  }

  async findOne(deliveryFindUniqueArgs: Prisma.DeliveryFindUniqueArgs) {
    return await this.deliveryService.findOne(deliveryFindUniqueArgs);
  }

  async findMany(deliveryFindManyArgs: Prisma.DeliveryFindManyArgs) {
    return await this.deliveryService.findMany(deliveryFindManyArgs);
  }

  async findFirst(deliveryFindFirstArgs: Prisma.DeliveryFindFirstArgs) {
    return await this.deliveryService.findFirst(deliveryFindFirstArgs);
  }

  async updateOne(deliveryUpdateOneArgs: Prisma.DeliveryUpdateArgs) {
    return await this.deliveryService.updateOne(deliveryUpdateOneArgs);
  }

  async updateMany(deliveryUpdateManyArgs: Prisma.DeliveryUpdateManyArgs) {
    return await this.deliveryService.updateMany(deliveryUpdateManyArgs);
  }

  async delete(deliveryDeleteArgs: Prisma.DeliveryDeleteArgs) {
    return await this.deliveryService.delete(deliveryDeleteArgs);
  }

  async deleteMany(deliveryDeleteManyArgs: Prisma.DeliveryDeleteManyArgs) {
    return await this.deliveryService.deleteMany(deliveryDeleteManyArgs);
  }

  async aggregate(deliveryAggregateArgs: Prisma.DeliveryAggregateArgs) {
    return await this.deliveryService.aggregate(deliveryAggregateArgs);
  }

  async count(deliveryCountArgs: Prisma.DeliveryCountArgs) {
    return await this.deliveryService.count(deliveryCountArgs);
  }
}
