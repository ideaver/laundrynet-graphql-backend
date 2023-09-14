import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class AccountSettingService {
  constructor(private prisma: PrismaService) {}

  async createOne(accountSettingCreateArgs: Prisma.AccountSettingCreateArgs) {
    try {
      return await this.prisma.accountSetting.create(accountSettingCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(accountSettingCreateManyArgs: Prisma.AccountSettingCreateManyArgs) {
    try {
      return await this.prisma.accountSetting.createMany(accountSettingCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(accountSettingFindUniqueArgs: Prisma.AccountSettingFindUniqueArgs) {
    try {
      return await this.prisma.accountSetting.findUnique(accountSettingFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(accountSettingFindManyArgs: Prisma.AccountSettingFindManyArgs) {
    try {
      return await this.prisma.accountSetting.findMany(accountSettingFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(accountSettingFindFirstArgs: Prisma.AccountSettingFindFirstArgs) {
    try {
      return await this.prisma.accountSetting.findFirst(accountSettingFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(accountSettingUpdateOneArgs: Prisma.AccountSettingUpdateArgs) {
    try {
      return await this.prisma.accountSetting.update(accountSettingUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(accountSettingUpdateManyArgs: Prisma.AccountSettingUpdateManyArgs) {
    try {
      return await this.prisma.accountSetting.updateMany(accountSettingUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(accountSettingDeleteArgs: Prisma.AccountSettingDeleteArgs) {
    try {
      await this.prisma.accountSetting.delete(accountSettingDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(accountSettingDeleteManyArgs: Prisma.AccountSettingDeleteManyArgs) {
    try {
      await this.prisma.accountSetting.deleteMany(accountSettingDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(accountSettingAggregateArgs: Prisma.AccountSettingAggregateArgs) {
    try {
      return await this.prisma.accountSetting.aggregate(accountSettingAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(accountSettingCountArgs: Prisma.AccountSettingCountArgs) {
    try {
      return await this.prisma.accountSetting.count(accountSettingCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
