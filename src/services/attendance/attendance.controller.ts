import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AttendanceService } from './attendance.service';

@Injectable()
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  async createOne(attendanceCreateArgs: Prisma.AttendanceCreateArgs) {
    return await this.attendanceService.createOne(attendanceCreateArgs);
  }

  async createMany(attendanceCreateManyArgs: Prisma.AttendanceCreateManyArgs) {
    return await this.attendanceService.createMany(attendanceCreateManyArgs);
  }

  async findOne(attendanceFindUniqueArgs: Prisma.AttendanceFindUniqueArgs) {
    return await this.attendanceService.findOne(attendanceFindUniqueArgs);
  }

  async findMany(attendanceFindManyArgs: Prisma.AttendanceFindManyArgs) {
    return await this.attendanceService.findMany(attendanceFindManyArgs);
  }

  async findFirst(attendanceFindFirstArgs: Prisma.AttendanceFindFirstArgs) {
    return await this.attendanceService.findFirst(attendanceFindFirstArgs);
  }

  async updateOne(attendanceUpdateOneArgs: Prisma.AttendanceUpdateArgs) {
    return await this.attendanceService.updateOne(attendanceUpdateOneArgs);
  }

  async updateMany(attendanceUpdateManyArgs: Prisma.AttendanceUpdateManyArgs) {
    return await this.attendanceService.updateMany(attendanceUpdateManyArgs);
  }

  async delete(attendanceDeleteArgs: Prisma.AttendanceDeleteArgs) {
    return await this.attendanceService.delete(attendanceDeleteArgs);
  }

  async deleteMany(attendanceDeleteManyArgs: Prisma.AttendanceDeleteManyArgs) {
    return await this.attendanceService.deleteMany(attendanceDeleteManyArgs);
  }

  async aggregate(attendanceAggregateArgs: Prisma.AttendanceAggregateArgs) {
    return await this.attendanceService.aggregate(attendanceAggregateArgs);
  }

  async count(attendanceCountArgs: Prisma.AttendanceCountArgs) {
    return await this.attendanceService.count(attendanceCountArgs);
  }
}
