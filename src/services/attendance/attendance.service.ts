import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async createOne(attendanceCreateArgs: Prisma.AttendanceCreateArgs) {
    try {
      return await this.prisma.attendance.create(attendanceCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(attendanceCreateManyArgs: Prisma.AttendanceCreateManyArgs) {
    try {
      return await this.prisma.attendance.createMany(attendanceCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(attendanceFindUniqueArgs: Prisma.AttendanceFindUniqueArgs) {
    try {
      return await this.prisma.attendance.findUnique(attendanceFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(attendanceFindManyArgs: Prisma.AttendanceFindManyArgs) {
    try {
      return await this.prisma.attendance.findMany(attendanceFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(attendanceFindFirstArgs: Prisma.AttendanceFindFirstArgs) {
    try {
      return await this.prisma.attendance.findFirst(attendanceFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(attendanceUpdateOneArgs: Prisma.AttendanceUpdateArgs) {
    try {
      return await this.prisma.attendance.update(attendanceUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(attendanceUpdateManyArgs: Prisma.AttendanceUpdateManyArgs) {
    try {
      return await this.prisma.attendance.updateMany(attendanceUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(attendanceDeleteArgs: Prisma.AttendanceDeleteArgs) {
    try {
      await this.prisma.attendance.delete(attendanceDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(attendanceDeleteManyArgs: Prisma.AttendanceDeleteManyArgs) {
    try {
      await this.prisma.attendance.deleteMany(attendanceDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(attendanceAggregateArgs: Prisma.AttendanceAggregateArgs) {
    try {
      return await this.prisma.attendance.aggregate(attendanceAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(attendanceCountArgs: Prisma.AttendanceCountArgs) {
    try {
      return await this.prisma.attendance.count(attendanceCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
