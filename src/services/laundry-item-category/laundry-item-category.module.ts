import { Module } from '@nestjs/common';
import { LaundryItemCategoryService } from './laundryItemCategory.service';
import { LaundryItemCategoryResolver } from './laundryItemCategory.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { LaundryItemCategoryController } from './laundryItemCategory.controller';

@Module({
  providers: [PrismaService, LaundryItemCategoryResolver, LaundryItemCategoryController, LaundryItemCategoryService],
  exports: [LaundryItemCategoryController],
})
export class LaundryItemCategoryModule {}
