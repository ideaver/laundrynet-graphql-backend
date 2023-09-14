import { Module } from '@nestjs/common';
import { LaundryItemService } from './laundry-item.service';
import { LaundryItemResolver } from './laundry-item.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { LaundryItemController } from './laundry-item.controller';

@Module({
  providers: [PrismaService, LaundryItemResolver, LaundryItemController, LaundryItemService],
  exports: [LaundryItemController],
})
export class LaundryItemModule {}
