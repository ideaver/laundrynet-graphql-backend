import { Module } from '@nestjs/common';
import { AccountSettingService } from './accountSetting.service';
import { AccountSettingResolver } from './accountSetting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccountSettingController } from './accountSetting.controller';

@Module({
  providers: [PrismaService, AccountSettingResolver, AccountSettingController, AccountSettingService],
  exports: [AccountSettingController],
})
export class AccountSettingModule {}
