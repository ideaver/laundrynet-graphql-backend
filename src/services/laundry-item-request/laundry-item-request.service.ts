import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class LaundryItemRequestService {
  constructor(private prisma: PrismaService) {}

  async createOne(laundryItemRequestCreateArgs: Prisma.LaundryItemRequestCreateArgs) {
    try {
      return await this.prisma.laundryItemRequest.create(laundryItemRequestCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(laundryItemRequestCreateManyArgs: Prisma.LaundryItemRequestCreateManyArgs) {
    try {
      return await this.prisma.laundryItemRequest.createMany(laundryItemRequestCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(laundryItemRequestFindUniqueArgs: Prisma.LaundryItemRequestFindUniqueArgs) {
    try {
      return await this.prisma.laundryItemRequest.findUnique(laundryItemRequestFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(laundryItemRequestFindManyArgs: Prisma.LaundryItemRequestFindManyArgs) {
    try {
      return await this.prisma.laundryItemRequest.findMany(laundryItemRequestFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(laundryItemRequestFindFirstArgs: Prisma.LaundryItemRequestFindFirstArgs) {
    try {
      return await this.prisma.laundryItemRequest.findFirst(laundryItemRequestFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(laundryItemRequestUpdateOneArgs: Prisma.LaundryItemRequestUpdateArgs) {
    try {
      return await this.prisma.laundryItemRequest.update(laundryItemRequestUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(laundryItemRequestUpdateManyArgs: Prisma.LaundryItemRequestUpdateManyArgs) {
    try {
      return await this.prisma.laundryItemRequest.updateMany(laundryItemRequestUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(laundryItemRequestDeleteArgs: Prisma.LaundryItemRequestDeleteArgs) {
    try {
      await this.prisma.laundryItemRequest.delete(laundryItemRequestDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(laundryItemRequestDeleteManyArgs: Prisma.LaundryItemRequestDeleteManyArgs) {
    try {
      await this.prisma.laundryItemRequest.deleteMany(laundryItemRequestDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(laundryItemRequestAggregateArgs: Prisma.LaundryItemRequestAggregateArgs) {
    try {
      return await this.prisma.laundryItemRequest.aggregate(laundryItemRequestAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(laundryItemRequestCountArgs: Prisma.LaundryItemRequestCountArgs) {
    try {
      return await this.prisma.laundryItemRequest.count(laundryItemRequestCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
