import { Module } from '@nestjs/common';
import { UnitOfMeasureService } from './unit-of-measure.service';
import { UnitOfMeasureResolver } from './unit-of-measure.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UnitOfMeasureController } from './unit-of-measure.controller';

@Module({
  providers: [PrismaService, UnitOfMeasureResolver, UnitOfMeasureController, UnitOfMeasureService],
  exports: [UnitOfMeasureController],
})
export class UnitOfMeasureModule {}
