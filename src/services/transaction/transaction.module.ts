import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionController } from './transaction.controller';

@Module({
  providers: [PrismaService, TransactionResolver, TransactionController, TransactionService],
  exports: [TransactionController],
})
export class TransactionModule {}
