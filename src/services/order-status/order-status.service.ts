import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderStatusService {
  constructor(private prisma: PrismaService) {}

  async createOne(orderStatusCreateArgs: Prisma.OrderStatusCreateArgs) {
    try {
      return await this.prisma.orderStatus.create(orderStatusCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(orderStatusCreateManyArgs: Prisma.OrderStatusCreateManyArgs) {
    try {
      return await this.prisma.orderStatus.createMany(orderStatusCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(orderStatusFindUniqueArgs: Prisma.OrderStatusFindUniqueArgs) {
    try {
      return await this.prisma.orderStatus.findUnique(orderStatusFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(orderStatusFindManyArgs: Prisma.OrderStatusFindManyArgs) {
    try {
      return await this.prisma.orderStatus.findMany(orderStatusFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(orderStatusFindFirstArgs: Prisma.OrderStatusFindFirstArgs) {
    try {
      return await this.prisma.orderStatus.findFirst(orderStatusFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(orderStatusUpdateOneArgs: Prisma.OrderStatusUpdateArgs) {
    try {
      return await this.prisma.orderStatus.update(orderStatusUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(orderStatusUpdateManyArgs: Prisma.OrderStatusUpdateManyArgs) {
    try {
      return await this.prisma.orderStatus.updateMany(orderStatusUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(orderStatusDeleteArgs: Prisma.OrderStatusDeleteArgs) {
    try {
      await this.prisma.orderStatus.delete(orderStatusDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(orderStatusDeleteManyArgs: Prisma.OrderStatusDeleteManyArgs) {
    try {
      await this.prisma.orderStatus.deleteMany(orderStatusDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(orderStatusAggregateArgs: Prisma.OrderStatusAggregateArgs) {
    try {
      return await this.prisma.orderStatus.aggregate(orderStatusAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(orderStatusCountArgs: Prisma.OrderStatusCountArgs) {
    try {
      return await this.prisma.orderStatus.count(orderStatusCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
