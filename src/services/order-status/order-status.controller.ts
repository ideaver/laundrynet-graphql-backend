import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderStatusService } from './order-status.service';

@Injectable()
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  async createOne(orderStatusCreateArgs: Prisma.OrderStatusCreateArgs) {
    return await this.orderStatusService.createOne(orderStatusCreateArgs);
  }

  async createMany(orderStatusCreateManyArgs: Prisma.OrderStatusCreateManyArgs) {
    return await this.orderStatusService.createMany(orderStatusCreateManyArgs);
  }

  async findOne(orderStatusFindUniqueArgs: Prisma.OrderStatusFindUniqueArgs) {
    return await this.orderStatusService.findOne(orderStatusFindUniqueArgs);
  }

  async findMany(orderStatusFindManyArgs: Prisma.OrderStatusFindManyArgs) {
    return await this.orderStatusService.findMany(orderStatusFindManyArgs);
  }

  async findFirst(orderStatusFindFirstArgs: Prisma.OrderStatusFindFirstArgs) {
    return await this.orderStatusService.findFirst(orderStatusFindFirstArgs);
  }

  async updateOne(orderStatusUpdateOneArgs: Prisma.OrderStatusUpdateArgs) {
    return await this.orderStatusService.updateOne(orderStatusUpdateOneArgs);
  }

  async updateMany(orderStatusUpdateManyArgs: Prisma.OrderStatusUpdateManyArgs) {
    return await this.orderStatusService.updateMany(orderStatusUpdateManyArgs);
  }

  async delete(orderStatusDeleteArgs: Prisma.OrderStatusDeleteArgs) {
    return await this.orderStatusService.delete(orderStatusDeleteArgs);
  }

  async deleteMany(orderStatusDeleteManyArgs: Prisma.OrderStatusDeleteManyArgs) {
    return await this.orderStatusService.deleteMany(orderStatusDeleteManyArgs);
  }

  async aggregate(orderStatusAggregateArgs: Prisma.OrderStatusAggregateArgs) {
    return await this.orderStatusService.aggregate(orderStatusAggregateArgs);
  }

  async count(orderStatusCountArgs: Prisma.OrderStatusCountArgs) {
    return await this.orderStatusService.count(orderStatusCountArgs);
  }
}
