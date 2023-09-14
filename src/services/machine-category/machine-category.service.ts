import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class MachineCategoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(machineCategoryCreateArgs: Prisma.MachineCategoryCreateArgs) {
    try {
      return await this.prisma.machineCategory.create(machineCategoryCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(machineCategoryCreateManyArgs: Prisma.MachineCategoryCreateManyArgs) {
    try {
      return await this.prisma.machineCategory.createMany(machineCategoryCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(machineCategoryFindUniqueArgs: Prisma.MachineCategoryFindUniqueArgs) {
    try {
      return await this.prisma.machineCategory.findUnique(machineCategoryFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(machineCategoryFindManyArgs: Prisma.MachineCategoryFindManyArgs) {
    try {
      return await this.prisma.machineCategory.findMany(machineCategoryFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(machineCategoryFindFirstArgs: Prisma.MachineCategoryFindFirstArgs) {
    try {
      return await this.prisma.machineCategory.findFirst(machineCategoryFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(machineCategoryUpdateOneArgs: Prisma.MachineCategoryUpdateArgs) {
    try {
      return await this.prisma.machineCategory.update(machineCategoryUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(machineCategoryUpdateManyArgs: Prisma.MachineCategoryUpdateManyArgs) {
    try {
      return await this.prisma.machineCategory.updateMany(machineCategoryUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(machineCategoryDeleteArgs: Prisma.MachineCategoryDeleteArgs) {
    try {
      await this.prisma.machineCategory.delete(machineCategoryDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(machineCategoryDeleteManyArgs: Prisma.MachineCategoryDeleteManyArgs) {
    try {
      await this.prisma.machineCategory.deleteMany(machineCategoryDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(machineCategoryAggregateArgs: Prisma.MachineCategoryAggregateArgs) {
    try {
      return await this.prisma.machineCategory.aggregate(machineCategoryAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(machineCategoryCountArgs: Prisma.MachineCategoryCountArgs) {
    try {
      return await this.prisma.machineCategory.count(machineCategoryCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
