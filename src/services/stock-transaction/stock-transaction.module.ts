import { Module } from '@nestjs/common';
import { StockTransactionService } from './stockTransaction.service';
import { StockTransactionResolver } from './stockTransaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { StockTransactionController } from './stockTransaction.controller';

@Module({
  providers: [PrismaService, StockTransactionResolver, StockTransactionController, StockTransactionService],
  exports: [StockTransactionController],
})
export class StockTransactionModule {}
