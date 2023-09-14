import { Module } from '@nestjs/common';
import { IndonesianBankService } from './indonesian-bank.service';
import { IndonesianBankResolver } from './indonesian-bank.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { IndonesianBankController } from './indonesian-bank.controller';

@Module({
  providers: [PrismaService, IndonesianBankResolver, IndonesianBankController, IndonesianBankService],
  exports: [IndonesianBankController],
})
export class IndonesianBankModule {}
