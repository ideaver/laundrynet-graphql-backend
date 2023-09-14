import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeliveryStatusService {
  constructor(private prisma: PrismaService) {}

  async createOne(deliveryStatusCreateArgs: Prisma.DeliveryStatusCreateArgs) {
    try {
      return await this.prisma.deliveryStatus.create(deliveryStatusCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(deliveryStatusCreateManyArgs: Prisma.DeliveryStatusCreateManyArgs) {
    try {
      return await this.prisma.deliveryStatus.createMany(deliveryStatusCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(deliveryStatusFindUniqueArgs: Prisma.DeliveryStatusFindUniqueArgs) {
    try {
      return await this.prisma.deliveryStatus.findUnique(deliveryStatusFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(deliveryStatusFindManyArgs: Prisma.DeliveryStatusFindManyArgs) {
    try {
      return await this.prisma.deliveryStatus.findMany(deliveryStatusFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(deliveryStatusFindFirstArgs: Prisma.DeliveryStatusFindFirstArgs) {
    try {
      return await this.prisma.deliveryStatus.findFirst(deliveryStatusFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(deliveryStatusUpdateOneArgs: Prisma.DeliveryStatusUpdateArgs) {
    try {
      return await this.prisma.deliveryStatus.update(deliveryStatusUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(deliveryStatusUpdateManyArgs: Prisma.DeliveryStatusUpdateManyArgs) {
    try {
      return await this.prisma.deliveryStatus.updateMany(deliveryStatusUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(deliveryStatusDeleteArgs: Prisma.DeliveryStatusDeleteArgs) {
    try {
      await this.prisma.deliveryStatus.delete(deliveryStatusDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(deliveryStatusDeleteManyArgs: Prisma.DeliveryStatusDeleteManyArgs) {
    try {
      await this.prisma.deliveryStatus.deleteMany(deliveryStatusDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(deliveryStatusAggregateArgs: Prisma.DeliveryStatusAggregateArgs) {
    try {
      return await this.prisma.deliveryStatus.aggregate(deliveryStatusAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(deliveryStatusCountArgs: Prisma.DeliveryStatusCountArgs) {
    try {
      return await this.prisma.deliveryStatus.count(deliveryStatusCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
