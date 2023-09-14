import { Module } from '@nestjs/common';
import { StockItemService } from './stockItem.service';
import { StockItemResolver } from './stockItem.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { StockItemController } from './stockItem.controller';

@Module({
  providers: [PrismaService, StockItemResolver, StockItemController, StockItemService],
  exports: [StockItemController],
})
export class StockItemModule {}
