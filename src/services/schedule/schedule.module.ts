import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleResolver } from './schedule.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ScheduleController } from './schedule.controller';

@Module({
  providers: [PrismaService, ScheduleResolver, ScheduleController, ScheduleService],
  exports: [ScheduleController],
})
export class ScheduleModule {}
