import { Module } from '@nestjs/common';
import { ServiceOrderService } from './serviceOrder.service';
import { ServiceOrderResolver } from './serviceOrder.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ServiceOrderController } from './serviceOrder.controller';

@Module({
  providers: [PrismaService, ServiceOrderResolver, ServiceOrderController, ServiceOrderService],
  exports: [ServiceOrderController],
})
export class ServiceOrderModule {}
