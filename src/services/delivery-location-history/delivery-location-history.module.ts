import { Module } from '@nestjs/common';
import { DeliveryLocationHistoryService } from './deliveryLocationHistory.service';
import { DeliveryLocationHistoryResolver } from './deliveryLocationHistory.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DeliveryLocationHistoryController } from './deliveryLocationHistory.controller';

@Module({
  providers: [PrismaService, DeliveryLocationHistoryResolver, DeliveryLocationHistoryController, DeliveryLocationHistoryService],
  exports: [DeliveryLocationHistoryController],
})
export class DeliveryLocationHistoryModule {}
