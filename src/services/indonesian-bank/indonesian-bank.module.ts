import { Module } from '@nestjs/common';
import { IndonesianBankService } from './indonesianBank.service';
import { IndonesianBankResolver } from './indonesianBank.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { IndonesianBankController } from './indonesianBank.controller';

@Module({
  providers: [PrismaService, IndonesianBankResolver, IndonesianBankController, IndonesianBankService],
  exports: [IndonesianBankController],
})
export class IndonesianBankModule {}
