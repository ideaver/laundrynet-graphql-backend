import { Module } from '@nestjs/common';
import { LaundryItemRequestService } from './laundry-item-request.service';
import { LaundryItemRequestResolver } from './laundry-item-request.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { LaundryItemRequestController } from './laundry-item-request.controller';

@Module({
  providers: [PrismaService, LaundryItemRequestResolver, LaundryItemRequestController, LaundryItemRequestService],
  exports: [LaundryItemRequestController],
})
export class LaundryItemRequestModule {}
