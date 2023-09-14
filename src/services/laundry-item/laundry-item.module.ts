import { Module } from '@nestjs/common';
import { LaundryItemService } from './laundryItem.service';
import { LaundryItemResolver } from './laundryItem.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { LaundryItemController } from './laundryItem.controller';

@Module({
  providers: [PrismaService, LaundryItemResolver, LaundryItemController, LaundryItemService],
  exports: [LaundryItemController],
})
export class LaundryItemModule {}
