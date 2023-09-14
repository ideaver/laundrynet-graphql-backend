import { Module } from '@nestjs/common';
import { VoucherSettingService } from './voucher-setting.service';
import { VoucherSettingResolver } from './voucher-setting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { VoucherSettingController } from './voucher-setting.controller';

@Module({
  providers: [PrismaService, VoucherSettingResolver, VoucherSettingController, VoucherSettingService],
  exports: [VoucherSettingController],
})
export class VoucherSettingModule {}
