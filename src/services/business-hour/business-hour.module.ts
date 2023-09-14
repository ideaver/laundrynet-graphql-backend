import { Module } from '@nestjs/common';
import { BusinessHourService } from './businessHour.service';
import { BusinessHourResolver } from './businessHour.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BusinessHourController } from './businessHour.controller';

@Module({
  providers: [PrismaService, BusinessHourResolver, BusinessHourController, BusinessHourService],
  exports: [BusinessHourController],
})
export class BusinessHourModule {}
