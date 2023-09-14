import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OutletLaundryItemServiceService {
  constructor(private prisma: PrismaService) {}

  async createOne(outletLaundryItemServiceCreateArgs: Prisma.OutletLaundryItemServiceCreateArgs) {
    try {
      return await this.prisma.outletLaundryItemService.create(outletLaundryItemServiceCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(outletLaundryItemServiceCreateManyArgs: Prisma.OutletLaundryItemServiceCreateManyArgs) {
    try {
      return await this.prisma.outletLaundryItemService.createMany(outletLaundryItemServiceCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(outletLaundryItemServiceFindUniqueArgs: Prisma.OutletLaundryItemServiceFindUniqueArgs) {
    try {
      return await this.prisma.outletLaundryItemService.findUnique(outletLaundryItemServiceFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(outletLaundryItemServiceFindManyArgs: Prisma.OutletLaundryItemServiceFindManyArgs) {
    try {
      return await this.prisma.outletLaundryItemService.findMany(outletLaundryItemServiceFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(outletLaundryItemServiceFindFirstArgs: Prisma.OutletLaundryItemServiceFindFirstArgs) {
    try {
      return await this.prisma.outletLaundryItemService.findFirst(outletLaundryItemServiceFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(outletLaundryItemServiceUpdateOneArgs: Prisma.OutletLaundryItemServiceUpdateArgs) {
    try {
      return await this.prisma.outletLaundryItemService.update(outletLaundryItemServiceUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(outletLaundryItemServiceUpdateManyArgs: Prisma.OutletLaundryItemServiceUpdateManyArgs) {
    try {
      return await this.prisma.outletLaundryItemService.updateMany(outletLaundryItemServiceUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(outletLaundryItemServiceDeleteArgs: Prisma.OutletLaundryItemServiceDeleteArgs) {
    try {
      await this.prisma.outletLaundryItemService.delete(outletLaundryItemServiceDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(outletLaundryItemServiceDeleteManyArgs: Prisma.OutletLaundryItemServiceDeleteManyArgs) {
    try {
      await this.prisma.outletLaundryItemService.deleteMany(outletLaundryItemServiceDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(outletLaundryItemServiceAggregateArgs: Prisma.OutletLaundryItemServiceAggregateArgs) {
    try {
      return await this.prisma.outletLaundryItemService.aggregate(outletLaundryItemServiceAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(outletLaundryItemServiceCountArgs: Prisma.OutletLaundryItemServiceCountArgs) {
    try {
      return await this.prisma.outletLaundryItemService.count(outletLaundryItemServiceCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
