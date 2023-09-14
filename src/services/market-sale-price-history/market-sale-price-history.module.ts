import { Module } from '@nestjs/common';
import { MarketSalePriceHistoryService } from './market-sale-price-history.service';
import { MarketSalePriceHistoryResolver } from './market-sale-price-history.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MarketSalePriceHistoryController } from './market-sale-price-history.controller';

@Module({
  providers: [PrismaService, MarketSalePriceHistoryResolver, MarketSalePriceHistoryController, MarketSalePriceHistoryService],
  exports: [MarketSalePriceHistoryController],
})
export class MarketSalePriceHistoryModule {}
