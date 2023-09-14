import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  async createOne(customerCreateArgs: Prisma.CustomerCreateArgs) {
    return await this.customerService.createOne(customerCreateArgs);
  }

  async createMany(customerCreateManyArgs: Prisma.CustomerCreateManyArgs) {
    return await this.customerService.createMany(customerCreateManyArgs);
  }

  async findOne(customerFindUniqueArgs: Prisma.CustomerFindUniqueArgs) {
    return await this.customerService.findOne(customerFindUniqueArgs);
  }

  async findMany(customerFindManyArgs: Prisma.CustomerFindManyArgs) {
    return await this.customerService.findMany(customerFindManyArgs);
  }

  async findFirst(customerFindFirstArgs: Prisma.CustomerFindFirstArgs) {
    return await this.customerService.findFirst(customerFindFirstArgs);
  }

  async updateOne(customerUpdateOneArgs: Prisma.CustomerUpdateArgs) {
    return await this.customerService.updateOne(customerUpdateOneArgs);
  }

  async updateMany(customerUpdateManyArgs: Prisma.CustomerUpdateManyArgs) {
    return await this.customerService.updateMany(customerUpdateManyArgs);
  }

  async delete(customerDeleteArgs: Prisma.CustomerDeleteArgs) {
    return await this.customerService.delete(customerDeleteArgs);
  }

  async deleteMany(customerDeleteManyArgs: Prisma.CustomerDeleteManyArgs) {
    return await this.customerService.deleteMany(customerDeleteManyArgs);
  }

  async aggregate(customerAggregateArgs: Prisma.CustomerAggregateArgs) {
    return await this.customerService.aggregate(customerAggregateArgs);
  }

  async count(customerCountArgs: Prisma.CustomerCountArgs) {
    return await this.customerService.count(customerCountArgs);
  }
}
