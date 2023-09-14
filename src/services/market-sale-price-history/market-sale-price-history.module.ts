import { Module } from '@nestjs/common';
import { MarketSalePriceHistoryService } from './marketSalePriceHistory.service';
import { MarketSalePriceHistoryResolver } from './marketSalePriceHistory.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MarketSalePriceHistoryController } from './marketSalePriceHistory.controller';

@Module({
  providers: [PrismaService, MarketSalePriceHistoryResolver, MarketSalePriceHistoryController, MarketSalePriceHistoryService],
  exports: [MarketSalePriceHistoryController],
})
export class MarketSalePriceHistoryModule {}
