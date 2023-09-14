import { Module } from '@nestjs/common';
import { DeliveryStatusService } from './delivery-status.service';
import { DeliveryStatusResolver } from './delivery-status.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DeliveryStatusController } from './delivery-status.controller';

@Module({
  providers: [PrismaService, DeliveryStatusResolver, DeliveryStatusController, DeliveryStatusService],
  exports: [DeliveryStatusController],
})
export class DeliveryStatusModule {}
