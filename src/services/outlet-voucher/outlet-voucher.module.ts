import { Module } from '@nestjs/common';
import { OutletVoucherService } from './outletVoucher.service';
import { OutletVoucherResolver } from './outletVoucher.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletVoucherController } from './outletVoucher.controller';

@Module({
  providers: [PrismaService, OutletVoucherResolver, OutletVoucherController, OutletVoucherService],
  exports: [OutletVoucherController],
})
export class OutletVoucherModule {}
