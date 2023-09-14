import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlatformOrderService {
  constructor(private prisma: PrismaService) {}

  async createOne(platformOrderCreateArgs: Prisma.PlatformOrderCreateArgs) {
    try {
      return await this.prisma.platformOrder.create(platformOrderCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(platformOrderCreateManyArgs: Prisma.PlatformOrderCreateManyArgs) {
    try {
      return await this.prisma.platformOrder.createMany(platformOrderCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(platformOrderFindUniqueArgs: Prisma.PlatformOrderFindUniqueArgs) {
    try {
      return await this.prisma.platformOrder.findUnique(platformOrderFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(platformOrderFindManyArgs: Prisma.PlatformOrderFindManyArgs) {
    try {
      return await this.prisma.platformOrder.findMany(platformOrderFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(platformOrderFindFirstArgs: Prisma.PlatformOrderFindFirstArgs) {
    try {
      return await this.prisma.platformOrder.findFirst(platformOrderFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(platformOrderUpdateOneArgs: Prisma.PlatformOrderUpdateArgs) {
    try {
      return await this.prisma.platformOrder.update(platformOrderUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(platformOrderUpdateManyArgs: Prisma.PlatformOrderUpdateManyArgs) {
    try {
      return await this.prisma.platformOrder.updateMany(platformOrderUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(platformOrderDeleteArgs: Prisma.PlatformOrderDeleteArgs) {
    try {
      await this.prisma.platformOrder.delete(platformOrderDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(platformOrderDeleteManyArgs: Prisma.PlatformOrderDeleteManyArgs) {
    try {
      await this.prisma.platformOrder.deleteMany(platformOrderDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(platformOrderAggregateArgs: Prisma.PlatformOrderAggregateArgs) {
    try {
      return await this.prisma.platformOrder.aggregate(platformOrderAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(platformOrderCountArgs: Prisma.PlatformOrderCountArgs) {
    try {
      return await this.prisma.platformOrder.count(platformOrderCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
