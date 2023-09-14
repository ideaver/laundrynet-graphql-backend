import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OutletVoucherService {
  constructor(private prisma: PrismaService) {}

  async createOne(outletVoucherCreateArgs: Prisma.OutletVoucherCreateArgs) {
    try {
      return await this.prisma.outletVoucher.create(outletVoucherCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(outletVoucherCreateManyArgs: Prisma.OutletVoucherCreateManyArgs) {
    try {
      return await this.prisma.outletVoucher.createMany(outletVoucherCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(outletVoucherFindUniqueArgs: Prisma.OutletVoucherFindUniqueArgs) {
    try {
      return await this.prisma.outletVoucher.findUnique(outletVoucherFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(outletVoucherFindManyArgs: Prisma.OutletVoucherFindManyArgs) {
    try {
      return await this.prisma.outletVoucher.findMany(outletVoucherFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(outletVoucherFindFirstArgs: Prisma.OutletVoucherFindFirstArgs) {
    try {
      return await this.prisma.outletVoucher.findFirst(outletVoucherFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(outletVoucherUpdateOneArgs: Prisma.OutletVoucherUpdateArgs) {
    try {
      return await this.prisma.outletVoucher.update(outletVoucherUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(outletVoucherUpdateManyArgs: Prisma.OutletVoucherUpdateManyArgs) {
    try {
      return await this.prisma.outletVoucher.updateMany(outletVoucherUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(outletVoucherDeleteArgs: Prisma.OutletVoucherDeleteArgs) {
    try {
      await this.prisma.outletVoucher.delete(outletVoucherDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(outletVoucherDeleteManyArgs: Prisma.OutletVoucherDeleteManyArgs) {
    try {
      await this.prisma.outletVoucher.deleteMany(outletVoucherDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(outletVoucherAggregateArgs: Prisma.OutletVoucherAggregateArgs) {
    try {
      return await this.prisma.outletVoucher.aggregate(outletVoucherAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(outletVoucherCountArgs: Prisma.OutletVoucherCountArgs) {
    try {
      return await this.prisma.outletVoucher.count(outletVoucherCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
