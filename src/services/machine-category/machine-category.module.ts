import { Module } from '@nestjs/common';
import { MachineCategoryService } from './machine-category.service';
import { MachineCategoryResolver } from './machine-category.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MachineCategoryController } from './machine-category.controller';

@Module({
  providers: [PrismaService, MachineCategoryResolver, MachineCategoryController, MachineCategoryService],
  exports: [MachineCategoryController],
})
export class MachineCategoryModule {}
