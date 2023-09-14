import { Module } from '@nestjs/common';
import { PlatformVoucherService } from './platform-voucher.service';
import { PlatformVoucherResolver } from './platform-voucher.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PlatformVoucherController } from './platform-voucher.controller';

@Module({
  providers: [PrismaService, PlatformVoucherResolver, PlatformVoucherController, PlatformVoucherService],
  exports: [PlatformVoucherController],
})
export class PlatformVoucherModule {}
