import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherResolver } from './voucher.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { VoucherController } from './voucher.controller';

@Module({
  providers: [PrismaService, VoucherResolver, VoucherController, VoucherService],
  exports: [VoucherController],
})
export class VoucherModule {}
