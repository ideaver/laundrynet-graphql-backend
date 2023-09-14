import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeliveryLocationHistoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(deliveryLocationHistoryCreateArgs: Prisma.DeliveryLocationHistoryCreateArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.create(deliveryLocationHistoryCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(deliveryLocationHistoryCreateManyArgs: Prisma.DeliveryLocationHistoryCreateManyArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.createMany(deliveryLocationHistoryCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(deliveryLocationHistoryFindUniqueArgs: Prisma.DeliveryLocationHistoryFindUniqueArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.findUnique(deliveryLocationHistoryFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(deliveryLocationHistoryFindManyArgs: Prisma.DeliveryLocationHistoryFindManyArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.findMany(deliveryLocationHistoryFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(deliveryLocationHistoryFindFirstArgs: Prisma.DeliveryLocationHistoryFindFirstArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.findFirst(deliveryLocationHistoryFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(deliveryLocationHistoryUpdateOneArgs: Prisma.DeliveryLocationHistoryUpdateArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.update(deliveryLocationHistoryUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(deliveryLocationHistoryUpdateManyArgs: Prisma.DeliveryLocationHistoryUpdateManyArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.updateMany(deliveryLocationHistoryUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(deliveryLocationHistoryDeleteArgs: Prisma.DeliveryLocationHistoryDeleteArgs) {
    try {
      await this.prisma.deliveryLocationHistory.delete(deliveryLocationHistoryDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(deliveryLocationHistoryDeleteManyArgs: Prisma.DeliveryLocationHistoryDeleteManyArgs) {
    try {
      await this.prisma.deliveryLocationHistory.deleteMany(deliveryLocationHistoryDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(deliveryLocationHistoryAggregateArgs: Prisma.DeliveryLocationHistoryAggregateArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.aggregate(deliveryLocationHistoryAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(deliveryLocationHistoryCountArgs: Prisma.DeliveryLocationHistoryCountArgs) {
    try {
      return await this.prisma.deliveryLocationHistory.count(deliveryLocationHistoryCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
