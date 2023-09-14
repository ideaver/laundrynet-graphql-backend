import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeeActivityComissionService } from './employee-activity-comission.service';

@Injectable()
export class EmployeeActivityComissionController {
  constructor(private readonly employeeActivityComissionService: EmployeeActivityComissionService) {}

  async createOne(employeeActivityComissionCreateArgs: Prisma.EmployeeActivityComissionCreateArgs) {
    return await this.employeeActivityComissionService.createOne(employeeActivityComissionCreateArgs);
  }

  async createMany(employeeActivityComissionCreateManyArgs: Prisma.EmployeeActivityComissionCreateManyArgs) {
    return await this.employeeActivityComissionService.createMany(employeeActivityComissionCreateManyArgs);
  }

  async findOne(employeeActivityComissionFindUniqueArgs: Prisma.EmployeeActivityComissionFindUniqueArgs) {
    return await this.employeeActivityComissionService.findOne(employeeActivityComissionFindUniqueArgs);
  }

  async findMany(employeeActivityComissionFindManyArgs: Prisma.EmployeeActivityComissionFindManyArgs) {
    return await this.employeeActivityComissionService.findMany(employeeActivityComissionFindManyArgs);
  }

  async findFirst(employeeActivityComissionFindFirstArgs: Prisma.EmployeeActivityComissionFindFirstArgs) {
    return await this.employeeActivityComissionService.findFirst(employeeActivityComissionFindFirstArgs);
  }

  async updateOne(employeeActivityComissionUpdateOneArgs: Prisma.EmployeeActivityComissionUpdateArgs) {
    return await this.employeeActivityComissionService.updateOne(employeeActivityComissionUpdateOneArgs);
  }

  async updateMany(employeeActivityComissionUpdateManyArgs: Prisma.EmployeeActivityComissionUpdateManyArgs) {
    return await this.employeeActivityComissionService.updateMany(employeeActivityComissionUpdateManyArgs);
  }

  async delete(employeeActivityComissionDeleteArgs: Prisma.EmployeeActivityComissionDeleteArgs) {
    return await this.employeeActivityComissionService.delete(employeeActivityComissionDeleteArgs);
  }

  async deleteMany(employeeActivityComissionDeleteManyArgs: Prisma.EmployeeActivityComissionDeleteManyArgs) {
    return await this.employeeActivityComissionService.deleteMany(employeeActivityComissionDeleteManyArgs);
  }

  async aggregate(employeeActivityComissionAggregateArgs: Prisma.EmployeeActivityComissionAggregateArgs) {
    return await this.employeeActivityComissionService.aggregate(employeeActivityComissionAggregateArgs);
  }

  async count(employeeActivityComissionCountArgs: Prisma.EmployeeActivityComissionCountArgs) {
    return await this.employeeActivityComissionService.count(employeeActivityComissionCountArgs);
  }
}
