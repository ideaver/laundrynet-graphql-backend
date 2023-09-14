import { Module } from '@nestjs/common';
import { PlatformOrderService } from './platform-order.service';
import { PlatformOrderResolver } from './platform-order.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PlatformOrderController } from './platform-order.controller';

@Module({
  providers: [PrismaService, PlatformOrderResolver, PlatformOrderController, PlatformOrderService],
  exports: [PlatformOrderController],
})
export class PlatformOrderModule {}
