import { Module } from '@nestjs/common';
import { LaundryItemCategoryService } from './laundry-item-category.service';
import { LaundryItemCategoryResolver } from './laundry-item-category.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { LaundryItemCategoryController } from './laundry-item-category.controller';

@Module({
  providers: [PrismaService, LaundryItemCategoryResolver, LaundryItemCategoryController, LaundryItemCategoryService],
  exports: [LaundryItemCategoryController],
})
export class LaundryItemCategoryModule {}
