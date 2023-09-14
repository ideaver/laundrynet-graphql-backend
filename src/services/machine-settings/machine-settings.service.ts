import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class MachineSettingsService {
  constructor(private prisma: PrismaService) {}

  async createOne(machineSettingsCreateArgs: Prisma.MachineSettingsCreateArgs) {
    try {
      return await this.prisma.machineSettings.create(machineSettingsCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(machineSettingsCreateManyArgs: Prisma.MachineSettingsCreateManyArgs) {
    try {
      return await this.prisma.machineSettings.createMany(machineSettingsCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(machineSettingsFindUniqueArgs: Prisma.MachineSettingsFindUniqueArgs) {
    try {
      return await this.prisma.machineSettings.findUnique(machineSettingsFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(machineSettingsFindManyArgs: Prisma.MachineSettingsFindManyArgs) {
    try {
      return await this.prisma.machineSettings.findMany(machineSettingsFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(machineSettingsFindFirstArgs: Prisma.MachineSettingsFindFirstArgs) {
    try {
      return await this.prisma.machineSettings.findFirst(machineSettingsFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(machineSettingsUpdateOneArgs: Prisma.MachineSettingsUpdateArgs) {
    try {
      return await this.prisma.machineSettings.update(machineSettingsUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(machineSettingsUpdateManyArgs: Prisma.MachineSettingsUpdateManyArgs) {
    try {
      return await this.prisma.machineSettings.updateMany(machineSettingsUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(machineSettingsDeleteArgs: Prisma.MachineSettingsDeleteArgs) {
    try {
      await this.prisma.machineSettings.delete(machineSettingsDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(machineSettingsDeleteManyArgs: Prisma.MachineSettingsDeleteManyArgs) {
    try {
      await this.prisma.machineSettings.deleteMany(machineSettingsDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(machineSettingsAggregateArgs: Prisma.MachineSettingsAggregateArgs) {
    try {
      return await this.prisma.machineSettings.aggregate(machineSettingsAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(machineSettingsCountArgs: Prisma.MachineSettingsCountArgs) {
    try {
      return await this.prisma.machineSettings.count(machineSettingsCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
