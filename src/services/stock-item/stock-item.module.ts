import { Module } from '@nestjs/common';
import { StockItemService } from './stock-item.service';
import { StockItemResolver } from './stock-item.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { StockItemController } from './stock-item.controller';

@Module({
  providers: [PrismaService, StockItemResolver, StockItemController, StockItemService],
  exports: [StockItemController],
})
export class StockItemModule {}
