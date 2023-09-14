import { Module } from '@nestjs/common';
import { PlatformOrderService } from './platformOrder.service';
import { PlatformOrderResolver } from './platformOrder.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PlatformOrderController } from './platformOrder.controller';

@Module({
  providers: [PrismaService, PlatformOrderResolver, PlatformOrderController, PlatformOrderService],
  exports: [PlatformOrderController],
})
export class PlatformOrderModule {}
