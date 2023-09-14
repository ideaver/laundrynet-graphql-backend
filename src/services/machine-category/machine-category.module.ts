import { Module } from '@nestjs/common';
import { MachineCategoryService } from './machineCategory.service';
import { MachineCategoryResolver } from './machineCategory.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MachineCategoryController } from './machineCategory.controller';

@Module({
  providers: [PrismaService, MachineCategoryResolver, MachineCategoryController, MachineCategoryService],
  exports: [MachineCategoryController],
})
export class MachineCategoryModule {}
