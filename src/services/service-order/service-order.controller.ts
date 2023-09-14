import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ServiceOrderService } from './service-order.service';

@Injectable()
export class ServiceOrderController {
  constructor(private readonly serviceOrderService: ServiceOrderService) {}

  async createOne(serviceOrderCreateArgs: Prisma.ServiceOrderCreateArgs) {
    return await this.serviceOrderService.createOne(serviceOrderCreateArgs);
  }

  async createMany(serviceOrderCreateManyArgs: Prisma.ServiceOrderCreateManyArgs) {
    return await this.serviceOrderService.createMany(serviceOrderCreateManyArgs);
  }

  async findOne(serviceOrderFindUniqueArgs: Prisma.ServiceOrderFindUniqueArgs) {
    return await this.serviceOrderService.findOne(serviceOrderFindUniqueArgs);
  }

  async findMany(serviceOrderFindManyArgs: Prisma.ServiceOrderFindManyArgs) {
    return await this.serviceOrderService.findMany(serviceOrderFindManyArgs);
  }

  async findFirst(serviceOrderFindFirstArgs: Prisma.ServiceOrderFindFirstArgs) {
    return await this.serviceOrderService.findFirst(serviceOrderFindFirstArgs);
  }

  async updateOne(serviceOrderUpdateOneArgs: Prisma.ServiceOrderUpdateArgs) {
    return await this.serviceOrderService.updateOne(serviceOrderUpdateOneArgs);
  }

  async updateMany(serviceOrderUpdateManyArgs: Prisma.ServiceOrderUpdateManyArgs) {
    return await this.serviceOrderService.updateMany(serviceOrderUpdateManyArgs);
  }

  async delete(serviceOrderDeleteArgs: Prisma.ServiceOrderDeleteArgs) {
    return await this.serviceOrderService.delete(serviceOrderDeleteArgs);
  }

  async deleteMany(serviceOrderDeleteManyArgs: Prisma.ServiceOrderDeleteManyArgs) {
    return await this.serviceOrderService.deleteMany(serviceOrderDeleteManyArgs);
  }

  async aggregate(serviceOrderAggregateArgs: Prisma.ServiceOrderAggregateArgs) {
    return await this.serviceOrderService.aggregate(serviceOrderAggregateArgs);
  }

  async count(serviceOrderCountArgs: Prisma.ServiceOrderCountArgs) {
    return await this.serviceOrderService.count(serviceOrderCountArgs);
  }
}
