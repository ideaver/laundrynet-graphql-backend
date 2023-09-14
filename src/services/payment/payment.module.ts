import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PaymentController } from './payment.controller';

@Module({
  providers: [PrismaService, PaymentResolver, PaymentController, PaymentService],
  exports: [PaymentController],
})
export class PaymentModule {}
