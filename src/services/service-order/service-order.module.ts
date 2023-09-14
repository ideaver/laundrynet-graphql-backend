import { Module } from '@nestjs/common';
import { ServiceOrderService } from './service-order.service';
import { ServiceOrderResolver } from './service-order.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ServiceOrderController } from './service-order.controller';

@Module({
  providers: [PrismaService, ServiceOrderResolver, ServiceOrderController, ServiceOrderService],
  exports: [ServiceOrderController],
})
export class ServiceOrderModule {}
