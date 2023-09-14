import { Module } from '@nestjs/common';
import { OrderStatusService } from './orderStatus.service';
import { OrderStatusResolver } from './orderStatus.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OrderStatusController } from './orderStatus.controller';

@Module({
  providers: [PrismaService, OrderStatusResolver, OrderStatusController, OrderStatusService],
  exports: [OrderStatusController],
})
export class OrderStatusModule {}
