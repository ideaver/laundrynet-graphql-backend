import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DeliveryService {
  constructor(private prisma: PrismaService) {}

  async createOne(deliveryCreateArgs: Prisma.DeliveryCreateArgs) {
    try {
      return await this.prisma.delivery.create(deliveryCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(deliveryCreateManyArgs: Prisma.DeliveryCreateManyArgs) {
    try {
      return await this.prisma.delivery.createMany(deliveryCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(deliveryFindUniqueArgs: Prisma.DeliveryFindUniqueArgs) {
    try {
      return await this.prisma.delivery.findUnique(deliveryFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(deliveryFindManyArgs: Prisma.DeliveryFindManyArgs) {
    try {
      return await this.prisma.delivery.findMany(deliveryFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(deliveryFindFirstArgs: Prisma.DeliveryFindFirstArgs) {
    try {
      return await this.prisma.delivery.findFirst(deliveryFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(deliveryUpdateOneArgs: Prisma.DeliveryUpdateArgs) {
    try {
      return await this.prisma.delivery.update(deliveryUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(deliveryUpdateManyArgs: Prisma.DeliveryUpdateManyArgs) {
    try {
      return await this.prisma.delivery.updateMany(deliveryUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(deliveryDeleteArgs: Prisma.DeliveryDeleteArgs) {
    try {
      await this.prisma.delivery.delete(deliveryDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(deliveryDeleteManyArgs: Prisma.DeliveryDeleteManyArgs) {
    try {
      await this.prisma.delivery.deleteMany(deliveryDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(deliveryAggregateArgs: Prisma.DeliveryAggregateArgs) {
    try {
      return await this.prisma.delivery.aggregate(deliveryAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(deliveryCountArgs: Prisma.DeliveryCountArgs) {
    try {
      return await this.prisma.delivery.count(deliveryCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
