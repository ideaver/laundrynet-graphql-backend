import { Module } from '@nestjs/common';
import { BusinessHourService } from './business-hour.service';
import { BusinessHourResolver } from './business-hour.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BusinessHourController } from './business-hour.controller';

@Module({
  providers: [PrismaService, BusinessHourResolver, BusinessHourController, BusinessHourService],
  exports: [BusinessHourController],
})
export class BusinessHourModule {}
