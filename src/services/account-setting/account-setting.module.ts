import { Module } from '@nestjs/common';
import { AccountSettingService } from './account-setting.service';
import { AccountSettingResolver } from './account-setting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccountSettingController } from './account-setting.controller';

@Module({
  providers: [PrismaService, AccountSettingResolver, AccountSettingController, AccountSettingService],
  exports: [AccountSettingController],
})
export class AccountSettingModule {}
