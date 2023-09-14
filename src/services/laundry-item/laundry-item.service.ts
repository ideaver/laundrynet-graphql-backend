import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class LaundryItemService {
  constructor(private prisma: PrismaService) {}

  async createOne(laundryItemCreateArgs: Prisma.LaundryItemCreateArgs) {
    try {
      return await this.prisma.laundryItem.create(laundryItemCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(laundryItemCreateManyArgs: Prisma.LaundryItemCreateManyArgs) {
    try {
      return await this.prisma.laundryItem.createMany(laundryItemCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(laundryItemFindUniqueArgs: Prisma.LaundryItemFindUniqueArgs) {
    try {
      return await this.prisma.laundryItem.findUnique(laundryItemFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(laundryItemFindManyArgs: Prisma.LaundryItemFindManyArgs) {
    try {
      return await this.prisma.laundryItem.findMany(laundryItemFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(laundryItemFindFirstArgs: Prisma.LaundryItemFindFirstArgs) {
    try {
      return await this.prisma.laundryItem.findFirst(laundryItemFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(laundryItemUpdateOneArgs: Prisma.LaundryItemUpdateArgs) {
    try {
      return await this.prisma.laundryItem.update(laundryItemUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(laundryItemUpdateManyArgs: Prisma.LaundryItemUpdateManyArgs) {
    try {
      return await this.prisma.laundryItem.updateMany(laundryItemUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(laundryItemDeleteArgs: Prisma.LaundryItemDeleteArgs) {
    try {
      await this.prisma.laundryItem.delete(laundryItemDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(laundryItemDeleteManyArgs: Prisma.LaundryItemDeleteManyArgs) {
    try {
      await this.prisma.laundryItem.deleteMany(laundryItemDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(laundryItemAggregateArgs: Prisma.LaundryItemAggregateArgs) {
    try {
      return await this.prisma.laundryItem.aggregate(laundryItemAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(laundryItemCountArgs: Prisma.LaundryItemCountArgs) {
    try {
      return await this.prisma.laundryItem.count(laundryItemCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
