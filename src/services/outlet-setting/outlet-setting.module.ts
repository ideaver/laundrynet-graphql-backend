import { Module } from '@nestjs/common';
import { OutletSettingService } from './outlet-setting.service';
import { OutletSettingResolver } from './outlet-setting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletSettingController } from './outlet-setting.controller';

@Module({
  providers: [PrismaService, OutletSettingResolver, OutletSettingController, OutletSettingService],
  exports: [OutletSettingController],
})
export class OutletSettingModule {}
