import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async createOne(scheduleCreateArgs: Prisma.ScheduleCreateArgs) {
    try {
      return await this.prisma.schedule.create(scheduleCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(scheduleCreateManyArgs: Prisma.ScheduleCreateManyArgs) {
    try {
      return await this.prisma.schedule.createMany(scheduleCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(scheduleFindUniqueArgs: Prisma.ScheduleFindUniqueArgs) {
    try {
      return await this.prisma.schedule.findUnique(scheduleFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(scheduleFindManyArgs: Prisma.ScheduleFindManyArgs) {
    try {
      return await this.prisma.schedule.findMany(scheduleFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(scheduleFindFirstArgs: Prisma.ScheduleFindFirstArgs) {
    try {
      return await this.prisma.schedule.findFirst(scheduleFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(scheduleUpdateOneArgs: Prisma.ScheduleUpdateArgs) {
    try {
      return await this.prisma.schedule.update(scheduleUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(scheduleUpdateManyArgs: Prisma.ScheduleUpdateManyArgs) {
    try {
      return await this.prisma.schedule.updateMany(scheduleUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(scheduleDeleteArgs: Prisma.ScheduleDeleteArgs) {
    try {
      await this.prisma.schedule.delete(scheduleDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(scheduleDeleteManyArgs: Prisma.ScheduleDeleteManyArgs) {
    try {
      await this.prisma.schedule.deleteMany(scheduleDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(scheduleAggregateArgs: Prisma.ScheduleAggregateArgs) {
    try {
      return await this.prisma.schedule.aggregate(scheduleAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(scheduleCountArgs: Prisma.ScheduleCountArgs) {
    try {
      return await this.prisma.schedule.count(scheduleCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
