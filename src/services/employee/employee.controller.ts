import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  async createOne(employeeCreateArgs: Prisma.EmployeeCreateArgs) {
    return await this.employeeService.createOne(employeeCreateArgs);
  }

  async createMany(employeeCreateManyArgs: Prisma.EmployeeCreateManyArgs) {
    return await this.employeeService.createMany(employeeCreateManyArgs);
  }

  async findOne(employeeFindUniqueArgs: Prisma.EmployeeFindUniqueArgs) {
    return await this.employeeService.findOne(employeeFindUniqueArgs);
  }

  async findMany(employeeFindManyArgs: Prisma.EmployeeFindManyArgs) {
    return await this.employeeService.findMany(employeeFindManyArgs);
  }

  async findFirst(employeeFindFirstArgs: Prisma.EmployeeFindFirstArgs) {
    return await this.employeeService.findFirst(employeeFindFirstArgs);
  }

  async updateOne(employeeUpdateOneArgs: Prisma.EmployeeUpdateArgs) {
    return await this.employeeService.updateOne(employeeUpdateOneArgs);
  }

  async updateMany(employeeUpdateManyArgs: Prisma.EmployeeUpdateManyArgs) {
    return await this.employeeService.updateMany(employeeUpdateManyArgs);
  }

  async delete(employeeDeleteArgs: Prisma.EmployeeDeleteArgs) {
    return await this.employeeService.delete(employeeDeleteArgs);
  }

  async deleteMany(employeeDeleteManyArgs: Prisma.EmployeeDeleteManyArgs) {
    return await this.employeeService.deleteMany(employeeDeleteManyArgs);
  }

  async aggregate(employeeAggregateArgs: Prisma.EmployeeAggregateArgs) {
    return await this.employeeService.aggregate(employeeAggregateArgs);
  }

  async count(employeeCountArgs: Prisma.EmployeeCountArgs) {
    return await this.employeeService.count(employeeCountArgs);
  }
}
