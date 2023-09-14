import { Module } from '@nestjs/common';
import { EmployeeActivityComissionService } from './employeeActivityComission.service';
import { EmployeeActivityComissionResolver } from './employeeActivityComission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeActivityComissionController } from './employeeActivityComission.controller';

@Module({
  providers: [PrismaService, EmployeeActivityComissionResolver, EmployeeActivityComissionController, EmployeeActivityComissionService],
  exports: [EmployeeActivityComissionController],
})
export class EmployeeActivityComissionModule {}
