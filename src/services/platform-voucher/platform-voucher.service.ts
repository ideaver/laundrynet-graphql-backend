import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlatformVoucherService {
  constructor(private prisma: PrismaService) {}

  async createOne(platformVoucherCreateArgs: Prisma.PlatformVoucherCreateArgs) {
    try {
      return await this.prisma.platformVoucher.create(platformVoucherCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(platformVoucherCreateManyArgs: Prisma.PlatformVoucherCreateManyArgs) {
    try {
      return await this.prisma.platformVoucher.createMany(platformVoucherCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(platformVoucherFindUniqueArgs: Prisma.PlatformVoucherFindUniqueArgs) {
    try {
      return await this.prisma.platformVoucher.findUnique(platformVoucherFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(platformVoucherFindManyArgs: Prisma.PlatformVoucherFindManyArgs) {
    try {
      return await this.prisma.platformVoucher.findMany(platformVoucherFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(platformVoucherFindFirstArgs: Prisma.PlatformVoucherFindFirstArgs) {
    try {
      return await this.prisma.platformVoucher.findFirst(platformVoucherFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(platformVoucherUpdateOneArgs: Prisma.PlatformVoucherUpdateArgs) {
    try {
      return await this.prisma.platformVoucher.update(platformVoucherUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(platformVoucherUpdateManyArgs: Prisma.PlatformVoucherUpdateManyArgs) {
    try {
      return await this.prisma.platformVoucher.updateMany(platformVoucherUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(platformVoucherDeleteArgs: Prisma.PlatformVoucherDeleteArgs) {
    try {
      await this.prisma.platformVoucher.delete(platformVoucherDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(platformVoucherDeleteManyArgs: Prisma.PlatformVoucherDeleteManyArgs) {
    try {
      await this.prisma.platformVoucher.deleteMany(platformVoucherDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(platformVoucherAggregateArgs: Prisma.PlatformVoucherAggregateArgs) {
    try {
      return await this.prisma.platformVoucher.aggregate(platformVoucherAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(platformVoucherCountArgs: Prisma.PlatformVoucherCountArgs) {
    try {
      return await this.prisma.platformVoucher.count(platformVoucherCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
