import { Module } from '@nestjs/common';
import { VoucherSettingService } from './voucherSetting.service';
import { VoucherSettingResolver } from './voucherSetting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { VoucherSettingController } from './voucherSetting.controller';

@Module({
  providers: [PrismaService, VoucherSettingResolver, VoucherSettingController, VoucherSettingService],
  exports: [VoucherSettingController],
})
export class VoucherSettingModule {}
