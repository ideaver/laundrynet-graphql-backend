import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeController } from './employee.controller';

@Module({
  providers: [PrismaService, EmployeeResolver, EmployeeController, EmployeeService],
  exports: [EmployeeController],
})
export class EmployeeModule {}
