import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrinterSettingService {
  constructor(private prisma: PrismaService) {}

  async createOne(printerSettingCreateArgs: Prisma.PrinterSettingCreateArgs) {
    try {
      return await this.prisma.printerSetting.create(printerSettingCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(printerSettingCreateManyArgs: Prisma.PrinterSettingCreateManyArgs) {
    try {
      return await this.prisma.printerSetting.createMany(printerSettingCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(printerSettingFindUniqueArgs: Prisma.PrinterSettingFindUniqueArgs) {
    try {
      return await this.prisma.printerSetting.findUnique(printerSettingFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(printerSettingFindManyArgs: Prisma.PrinterSettingFindManyArgs) {
    try {
      return await this.prisma.printerSetting.findMany(printerSettingFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(printerSettingFindFirstArgs: Prisma.PrinterSettingFindFirstArgs) {
    try {
      return await this.prisma.printerSetting.findFirst(printerSettingFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(printerSettingUpdateOneArgs: Prisma.PrinterSettingUpdateArgs) {
    try {
      return await this.prisma.printerSetting.update(printerSettingUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(printerSettingUpdateManyArgs: Prisma.PrinterSettingUpdateManyArgs) {
    try {
      return await this.prisma.printerSetting.updateMany(printerSettingUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(printerSettingDeleteArgs: Prisma.PrinterSettingDeleteArgs) {
    try {
      await this.prisma.printerSetting.delete(printerSettingDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(printerSettingDeleteManyArgs: Prisma.PrinterSettingDeleteManyArgs) {
    try {
      await this.prisma.printerSetting.deleteMany(printerSettingDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(printerSettingAggregateArgs: Prisma.PrinterSettingAggregateArgs) {
    try {
      return await this.prisma.printerSetting.aggregate(printerSettingAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(printerSettingCountArgs: Prisma.PrinterSettingCountArgs) {
    try {
      return await this.prisma.printerSetting.count(printerSettingCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
