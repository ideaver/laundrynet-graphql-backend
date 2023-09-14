import { Module } from '@nestjs/common';
import { DeliveryStatusService } from './deliveryStatus.service';
import { DeliveryStatusResolver } from './deliveryStatus.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DeliveryStatusController } from './deliveryStatus.controller';

@Module({
  providers: [PrismaService, DeliveryStatusResolver, DeliveryStatusController, DeliveryStatusService],
  exports: [DeliveryStatusController],
})
export class DeliveryStatusModule {}
