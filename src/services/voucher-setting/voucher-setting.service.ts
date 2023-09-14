import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class VoucherSettingService {
  constructor(private prisma: PrismaService) {}

  async createOne(voucherSettingCreateArgs: Prisma.VoucherSettingCreateArgs) {
    try {
      return await this.prisma.voucherSetting.create(voucherSettingCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(voucherSettingCreateManyArgs: Prisma.VoucherSettingCreateManyArgs) {
    try {
      return await this.prisma.voucherSetting.createMany(voucherSettingCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(voucherSettingFindUniqueArgs: Prisma.VoucherSettingFindUniqueArgs) {
    try {
      return await this.prisma.voucherSetting.findUnique(voucherSettingFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(voucherSettingFindManyArgs: Prisma.VoucherSettingFindManyArgs) {
    try {
      return await this.prisma.voucherSetting.findMany(voucherSettingFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(voucherSettingFindFirstArgs: Prisma.VoucherSettingFindFirstArgs) {
    try {
      return await this.prisma.voucherSetting.findFirst(voucherSettingFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(voucherSettingUpdateOneArgs: Prisma.VoucherSettingUpdateArgs) {
    try {
      return await this.prisma.voucherSetting.update(voucherSettingUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(voucherSettingUpdateManyArgs: Prisma.VoucherSettingUpdateManyArgs) {
    try {
      return await this.prisma.voucherSetting.updateMany(voucherSettingUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(voucherSettingDeleteArgs: Prisma.VoucherSettingDeleteArgs) {
    try {
      await this.prisma.voucherSetting.delete(voucherSettingDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(voucherSettingDeleteManyArgs: Prisma.VoucherSettingDeleteManyArgs) {
    try {
      await this.prisma.voucherSetting.deleteMany(voucherSettingDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(voucherSettingAggregateArgs: Prisma.VoucherSettingAggregateArgs) {
    try {
      return await this.prisma.voucherSetting.aggregate(voucherSettingAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(voucherSettingCountArgs: Prisma.VoucherSettingCountArgs) {
    try {
      return await this.prisma.voucherSetting.count(voucherSettingCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
