import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OutletService {
  constructor(private prisma: PrismaService) {}

  async createOne(outletCreateArgs: Prisma.OutletCreateArgs) {
    try {
      return await this.prisma.outlet.create(outletCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(outletCreateManyArgs: Prisma.OutletCreateManyArgs) {
    try {
      return await this.prisma.outlet.createMany(outletCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(outletFindUniqueArgs: Prisma.OutletFindUniqueArgs) {
    try {
      return await this.prisma.outlet.findUnique(outletFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(outletFindManyArgs: Prisma.OutletFindManyArgs) {
    try {
      return await this.prisma.outlet.findMany(outletFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(outletFindFirstArgs: Prisma.OutletFindFirstArgs) {
    try {
      return await this.prisma.outlet.findFirst(outletFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(outletUpdateOneArgs: Prisma.OutletUpdateArgs) {
    try {
      return await this.prisma.outlet.update(outletUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(outletUpdateManyArgs: Prisma.OutletUpdateManyArgs) {
    try {
      return await this.prisma.outlet.updateMany(outletUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(outletDeleteArgs: Prisma.OutletDeleteArgs) {
    try {
      await this.prisma.outlet.delete(outletDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(outletDeleteManyArgs: Prisma.OutletDeleteManyArgs) {
    try {
      await this.prisma.outlet.deleteMany(outletDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(outletAggregateArgs: Prisma.OutletAggregateArgs) {
    try {
      return await this.prisma.outlet.aggregate(outletAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(outletCountArgs: Prisma.OutletCountArgs) {
    try {
      return await this.prisma.outlet.count(outletCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
