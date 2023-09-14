import { Module } from '@nestjs/common';
import { UnitOfMeasureService } from './unitOfMeasure.service';
import { UnitOfMeasureResolver } from './unitOfMeasure.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UnitOfMeasureController } from './unitOfMeasure.controller';

@Module({
  providers: [PrismaService, UnitOfMeasureResolver, UnitOfMeasureController, UnitOfMeasureService],
  exports: [UnitOfMeasureController],
})
export class UnitOfMeasureModule {}
