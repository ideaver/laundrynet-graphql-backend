import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardResolver } from './credit-card.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CreditCardController } from './credit-card.controller';

@Module({
  providers: [PrismaService, CreditCardResolver, CreditCardController, CreditCardService],
  exports: [CreditCardController],
})
export class CreditCardModule {}
