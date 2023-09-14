import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OutletSettingService {
  constructor(private prisma: PrismaService) {}

  async createOne(outletSettingCreateArgs: Prisma.OutletSettingCreateArgs) {
    try {
      return await this.prisma.outletSetting.create(outletSettingCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(outletSettingCreateManyArgs: Prisma.OutletSettingCreateManyArgs) {
    try {
      return await this.prisma.outletSetting.createMany(outletSettingCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(outletSettingFindUniqueArgs: Prisma.OutletSettingFindUniqueArgs) {
    try {
      return await this.prisma.outletSetting.findUnique(outletSettingFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(outletSettingFindManyArgs: Prisma.OutletSettingFindManyArgs) {
    try {
      return await this.prisma.outletSetting.findMany(outletSettingFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(outletSettingFindFirstArgs: Prisma.OutletSettingFindFirstArgs) {
    try {
      return await this.prisma.outletSetting.findFirst(outletSettingFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(outletSettingUpdateOneArgs: Prisma.OutletSettingUpdateArgs) {
    try {
      return await this.prisma.outletSetting.update(outletSettingUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(outletSettingUpdateManyArgs: Prisma.OutletSettingUpdateManyArgs) {
    try {
      return await this.prisma.outletSetting.updateMany(outletSettingUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(outletSettingDeleteArgs: Prisma.OutletSettingDeleteArgs) {
    try {
      await this.prisma.outletSetting.delete(outletSettingDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(outletSettingDeleteManyArgs: Prisma.OutletSettingDeleteManyArgs) {
    try {
      await this.prisma.outletSetting.deleteMany(outletSettingDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(outletSettingAggregateArgs: Prisma.OutletSettingAggregateArgs) {
    try {
      return await this.prisma.outletSetting.aggregate(outletSettingAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(outletSettingCountArgs: Prisma.OutletSettingCountArgs) {
    try {
      return await this.prisma.outletSetting.count(outletSettingCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
