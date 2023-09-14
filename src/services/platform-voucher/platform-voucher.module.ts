import { Module } from '@nestjs/common';
import { PlatformVoucherService } from './platformVoucher.service';
import { PlatformVoucherResolver } from './platformVoucher.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PlatformVoucherController } from './platformVoucher.controller';

@Module({
  providers: [PrismaService, PlatformVoucherResolver, PlatformVoucherController, PlatformVoucherService],
  exports: [PlatformVoucherController],
})
export class PlatformVoucherModule {}
