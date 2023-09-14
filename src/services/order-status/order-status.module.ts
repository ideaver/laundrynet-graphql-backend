import { Module } from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import { OrderStatusResolver } from './order-status.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OrderStatusController } from './order-status.controller';

@Module({
  providers: [PrismaService, OrderStatusResolver, OrderStatusController, OrderStatusService],
  exports: [OrderStatusController],
})
export class OrderStatusModule {}
