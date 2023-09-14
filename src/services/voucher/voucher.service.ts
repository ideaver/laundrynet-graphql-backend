import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class VoucherService {
  constructor(private prisma: PrismaService) {}

  async createOne(voucherCreateArgs: Prisma.VoucherCreateArgs) {
    try {
      return await this.prisma.voucher.create(voucherCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(voucherCreateManyArgs: Prisma.VoucherCreateManyArgs) {
    try {
      return await this.prisma.voucher.createMany(voucherCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(voucherFindUniqueArgs: Prisma.VoucherFindUniqueArgs) {
    try {
      return await this.prisma.voucher.findUnique(voucherFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(voucherFindManyArgs: Prisma.VoucherFindManyArgs) {
    try {
      return await this.prisma.voucher.findMany(voucherFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(voucherFindFirstArgs: Prisma.VoucherFindFirstArgs) {
    try {
      return await this.prisma.voucher.findFirst(voucherFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(voucherUpdateOneArgs: Prisma.VoucherUpdateArgs) {
    try {
      return await this.prisma.voucher.update(voucherUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(voucherUpdateManyArgs: Prisma.VoucherUpdateManyArgs) {
    try {
      return await this.prisma.voucher.updateMany(voucherUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(voucherDeleteArgs: Prisma.VoucherDeleteArgs) {
    try {
      await this.prisma.voucher.delete(voucherDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(voucherDeleteManyArgs: Prisma.VoucherDeleteManyArgs) {
    try {
      await this.prisma.voucher.deleteMany(voucherDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(voucherAggregateArgs: Prisma.VoucherAggregateArgs) {
    try {
      return await this.prisma.voucher.aggregate(voucherAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(voucherCountArgs: Prisma.VoucherCountArgs) {
    try {
      return await this.prisma.voucher.count(voucherCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
