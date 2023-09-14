import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceOrderService {
  constructor(private prisma: PrismaService) {}

  async createOne(serviceOrderCreateArgs: Prisma.ServiceOrderCreateArgs) {
    try {
      return await this.prisma.serviceOrder.create(serviceOrderCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(serviceOrderCreateManyArgs: Prisma.ServiceOrderCreateManyArgs) {
    try {
      return await this.prisma.serviceOrder.createMany(serviceOrderCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(serviceOrderFindUniqueArgs: Prisma.ServiceOrderFindUniqueArgs) {
    try {
      return await this.prisma.serviceOrder.findUnique(serviceOrderFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(serviceOrderFindManyArgs: Prisma.ServiceOrderFindManyArgs) {
    try {
      return await this.prisma.serviceOrder.findMany(serviceOrderFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(serviceOrderFindFirstArgs: Prisma.ServiceOrderFindFirstArgs) {
    try {
      return await this.prisma.serviceOrder.findFirst(serviceOrderFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(serviceOrderUpdateOneArgs: Prisma.ServiceOrderUpdateArgs) {
    try {
      return await this.prisma.serviceOrder.update(serviceOrderUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(serviceOrderUpdateManyArgs: Prisma.ServiceOrderUpdateManyArgs) {
    try {
      return await this.prisma.serviceOrder.updateMany(serviceOrderUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(serviceOrderDeleteArgs: Prisma.ServiceOrderDeleteArgs) {
    try {
      await this.prisma.serviceOrder.delete(serviceOrderDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(serviceOrderDeleteManyArgs: Prisma.ServiceOrderDeleteManyArgs) {
    try {
      await this.prisma.serviceOrder.deleteMany(serviceOrderDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(serviceOrderAggregateArgs: Prisma.ServiceOrderAggregateArgs) {
    try {
      return await this.prisma.serviceOrder.aggregate(serviceOrderAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(serviceOrderCountArgs: Prisma.ServiceOrderCountArgs) {
    try {
      return await this.prisma.serviceOrder.count(serviceOrderCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
