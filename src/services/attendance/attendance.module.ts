import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceResolver } from './attendance.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AttendanceController } from './attendance.controller';

@Module({
  providers: [PrismaService, AttendanceResolver, AttendanceController, AttendanceService],
  exports: [AttendanceController],
})
export class AttendanceModule {}
