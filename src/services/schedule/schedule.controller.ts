import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ScheduleService } from './schedule.service';

@Injectable()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  async createOne(scheduleCreateArgs: Prisma.ScheduleCreateArgs) {
    return await this.scheduleService.createOne(scheduleCreateArgs);
  }

  async createMany(scheduleCreateManyArgs: Prisma.ScheduleCreateManyArgs) {
    return await this.scheduleService.createMany(scheduleCreateManyArgs);
  }

  async findOne(scheduleFindUniqueArgs: Prisma.ScheduleFindUniqueArgs) {
    return await this.scheduleService.findOne(scheduleFindUniqueArgs);
  }

  async findMany(scheduleFindManyArgs: Prisma.ScheduleFindManyArgs) {
    return await this.scheduleService.findMany(scheduleFindManyArgs);
  }

  async findFirst(scheduleFindFirstArgs: Prisma.ScheduleFindFirstArgs) {
    return await this.scheduleService.findFirst(scheduleFindFirstArgs);
  }

  async updateOne(scheduleUpdateOneArgs: Prisma.ScheduleUpdateArgs) {
    return await this.scheduleService.updateOne(scheduleUpdateOneArgs);
  }

  async updateMany(scheduleUpdateManyArgs: Prisma.ScheduleUpdateManyArgs) {
    return await this.scheduleService.updateMany(scheduleUpdateManyArgs);
  }

  async delete(scheduleDeleteArgs: Prisma.ScheduleDeleteArgs) {
    return await this.scheduleService.delete(scheduleDeleteArgs);
  }

  async deleteMany(scheduleDeleteManyArgs: Prisma.ScheduleDeleteManyArgs) {
    return await this.scheduleService.deleteMany(scheduleDeleteManyArgs);
  }

  async aggregate(scheduleAggregateArgs: Prisma.ScheduleAggregateArgs) {
    return await this.scheduleService.aggregate(scheduleAggregateArgs);
  }

  async count(scheduleCountArgs: Prisma.ScheduleCountArgs) {
    return await this.scheduleService.count(scheduleCountArgs);
  }
}
