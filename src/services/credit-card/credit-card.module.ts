import { Module } from '@nestjs/common';
import { CreditCardService } from './creditCard.service';
import { CreditCardResolver } from './creditCard.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CreditCardController } from './creditCard.controller';

@Module({
  providers: [PrismaService, CreditCardResolver, CreditCardController, CreditCardService],
  exports: [CreditCardController],
})
export class CreditCardModule {}
