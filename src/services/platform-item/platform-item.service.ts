import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlatformItemService {
  constructor(private prisma: PrismaService) {}

  async createOne(platformItemCreateArgs: Prisma.PlatformItemCreateArgs) {
    try {
      return await this.prisma.platformItem.create(platformItemCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(platformItemCreateManyArgs: Prisma.PlatformItemCreateManyArgs) {
    try {
      return await this.prisma.platformItem.createMany(platformItemCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(platformItemFindUniqueArgs: Prisma.PlatformItemFindUniqueArgs) {
    try {
      return await this.prisma.platformItem.findUnique(platformItemFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(platformItemFindManyArgs: Prisma.PlatformItemFindManyArgs) {
    try {
      return await this.prisma.platformItem.findMany(platformItemFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(platformItemFindFirstArgs: Prisma.PlatformItemFindFirstArgs) {
    try {
      return await this.prisma.platformItem.findFirst(platformItemFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(platformItemUpdateOneArgs: Prisma.PlatformItemUpdateArgs) {
    try {
      return await this.prisma.platformItem.update(platformItemUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(platformItemUpdateManyArgs: Prisma.PlatformItemUpdateManyArgs) {
    try {
      return await this.prisma.platformItem.updateMany(platformItemUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(platformItemDeleteArgs: Prisma.PlatformItemDeleteArgs) {
    try {
      await this.prisma.platformItem.delete(platformItemDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(platformItemDeleteManyArgs: Prisma.PlatformItemDeleteManyArgs) {
    try {
      await this.prisma.platformItem.deleteMany(platformItemDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(platformItemAggregateArgs: Prisma.PlatformItemAggregateArgs) {
    try {
      return await this.prisma.platformItem.aggregate(platformItemAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(platformItemCountArgs: Prisma.PlatformItemCountArgs) {
    try {
      return await this.prisma.platformItem.count(platformItemCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
