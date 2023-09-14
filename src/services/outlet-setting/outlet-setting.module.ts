import { Module } from '@nestjs/common';
import { OutletSettingService } from './outletSetting.service';
import { OutletSettingResolver } from './outletSetting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletSettingController } from './outletSetting.controller';

@Module({
  providers: [PrismaService, OutletSettingResolver, OutletSettingController, OutletSettingService],
  exports: [OutletSettingController],
})
export class OutletSettingModule {}
