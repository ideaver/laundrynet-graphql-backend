import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeeActivityComissionService {
  constructor(private prisma: PrismaService) {}

  async createOne(employeeActivityComissionCreateArgs: Prisma.EmployeeActivityComissionCreateArgs) {
    try {
      return await this.prisma.employeeActivityComission.create(employeeActivityComissionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(employeeActivityComissionCreateManyArgs: Prisma.EmployeeActivityComissionCreateManyArgs) {
    try {
      return await this.prisma.employeeActivityComission.createMany(employeeActivityComissionCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(employeeActivityComissionFindUniqueArgs: Prisma.EmployeeActivityComissionFindUniqueArgs) {
    try {
      return await this.prisma.employeeActivityComission.findUnique(employeeActivityComissionFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(employeeActivityComissionFindManyArgs: Prisma.EmployeeActivityComissionFindManyArgs) {
    try {
      return await this.prisma.employeeActivityComission.findMany(employeeActivityComissionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(employeeActivityComissionFindFirstArgs: Prisma.EmployeeActivityComissionFindFirstArgs) {
    try {
      return await this.prisma.employeeActivityComission.findFirst(employeeActivityComissionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(employeeActivityComissionUpdateOneArgs: Prisma.EmployeeActivityComissionUpdateArgs) {
    try {
      return await this.prisma.employeeActivityComission.update(employeeActivityComissionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(employeeActivityComissionUpdateManyArgs: Prisma.EmployeeActivityComissionUpdateManyArgs) {
    try {
      return await this.prisma.employeeActivityComission.updateMany(employeeActivityComissionUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(employeeActivityComissionDeleteArgs: Prisma.EmployeeActivityComissionDeleteArgs) {
    try {
      await this.prisma.employeeActivityComission.delete(employeeActivityComissionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(employeeActivityComissionDeleteManyArgs: Prisma.EmployeeActivityComissionDeleteManyArgs) {
    try {
      await this.prisma.employeeActivityComission.deleteMany(employeeActivityComissionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(employeeActivityComissionAggregateArgs: Prisma.EmployeeActivityComissionAggregateArgs) {
    try {
      return await this.prisma.employeeActivityComission.aggregate(employeeActivityComissionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(employeeActivityComissionCountArgs: Prisma.EmployeeActivityComissionCountArgs) {
    try {
      return await this.prisma.employeeActivityComission.count(employeeActivityComissionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
