import { Module } from '@nestjs/common';
import { OutletVoucherService } from './outlet-voucher.service';
import { OutletVoucherResolver } from './outlet-voucher.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletVoucherController } from './outlet-voucher.controller';

@Module({
  providers: [PrismaService, OutletVoucherResolver, OutletVoucherController, OutletVoucherService],
  exports: [OutletVoucherController],
})
export class OutletVoucherModule {}
