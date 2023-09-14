import { Module } from '@nestjs/common';
import { LaundryItemRequestService } from './laundryItemRequest.service';
import { LaundryItemRequestResolver } from './laundryItemRequest.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { LaundryItemRequestController } from './laundryItemRequest.controller';

@Module({
  providers: [PrismaService, LaundryItemRequestResolver, LaundryItemRequestController, LaundryItemRequestService],
  exports: [LaundryItemRequestController],
})
export class LaundryItemRequestModule {}
