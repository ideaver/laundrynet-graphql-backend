import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async createOne(employeeCreateArgs: Prisma.EmployeeCreateArgs) {
    try {
      return await this.prisma.employee.create(employeeCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(employeeCreateManyArgs: Prisma.EmployeeCreateManyArgs) {
    try {
      return await this.prisma.employee.createMany(employeeCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(employeeFindUniqueArgs: Prisma.EmployeeFindUniqueArgs) {
    try {
      return await this.prisma.employee.findUnique(employeeFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(employeeFindManyArgs: Prisma.EmployeeFindManyArgs) {
    try {
      return await this.prisma.employee.findMany(employeeFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(employeeFindFirstArgs: Prisma.EmployeeFindFirstArgs) {
    try {
      return await this.prisma.employee.findFirst(employeeFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(employeeUpdateOneArgs: Prisma.EmployeeUpdateArgs) {
    try {
      return await this.prisma.employee.update(employeeUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(employeeUpdateManyArgs: Prisma.EmployeeUpdateManyArgs) {
    try {
      return await this.prisma.employee.updateMany(employeeUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(employeeDeleteArgs: Prisma.EmployeeDeleteArgs) {
    try {
      await this.prisma.employee.delete(employeeDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(employeeDeleteManyArgs: Prisma.EmployeeDeleteManyArgs) {
    try {
      await this.prisma.employee.deleteMany(employeeDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(employeeAggregateArgs: Prisma.EmployeeAggregateArgs) {
    try {
      return await this.prisma.employee.aggregate(employeeAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(employeeCountArgs: Prisma.EmployeeCountArgs) {
    try {
      return await this.prisma.employee.count(employeeCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
