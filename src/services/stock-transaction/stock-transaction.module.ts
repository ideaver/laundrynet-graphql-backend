import { Module } from '@nestjs/common';
import { StockTransactionService } from './stock-transaction.service';
import { StockTransactionResolver } from './stock-transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { StockTransactionController } from './stock-transaction.controller';

@Module({
  providers: [PrismaService, StockTransactionResolver, StockTransactionController, StockTransactionService],
  exports: [StockTransactionController],
})
export class StockTransactionModule {}
