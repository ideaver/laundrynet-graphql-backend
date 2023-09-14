import { Module } from '@nestjs/common';
import { EmployeeActivityComissionService } from './employee-activity-comission.service';
import { EmployeeActivityComissionResolver } from './employee-activity-comission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeActivityComissionController } from './employee-activity-comission.controller';

@Module({
  providers: [PrismaService, EmployeeActivityComissionResolver, EmployeeActivityComissionController, EmployeeActivityComissionService],
  exports: [EmployeeActivityComissionController],
})
export class EmployeeActivityComissionModule {}
