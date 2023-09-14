import { Module } from '@nestjs/common';
import { DeliveryLocationHistoryService } from './delivery-location-history.service';
import { DeliveryLocationHistoryResolver } from './delivery-location-history.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DeliveryLocationHistoryController } from './delivery-location-history.controller';

@Module({
  providers: [PrismaService, DeliveryLocationHistoryResolver, DeliveryLocationHistoryController, DeliveryLocationHistoryService],
  exports: [DeliveryLocationHistoryController],
})
export class DeliveryLocationHistoryModule {}
