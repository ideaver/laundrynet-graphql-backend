import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryResolver } from './delivery.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DeliveryController } from './delivery.controller';

@Module({
  providers: [PrismaService, DeliveryResolver, DeliveryController, DeliveryService],
  exports: [DeliveryController],
})
export class DeliveryModule {}
