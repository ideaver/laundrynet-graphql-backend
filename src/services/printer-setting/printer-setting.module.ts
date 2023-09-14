import { Module } from '@nestjs/common';
import { PrinterSettingService } from './printer-setting.service';
import { PrinterSettingResolver } from './printer-setting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PrinterSettingController } from './printer-setting.controller';

@Module({
  providers: [PrismaService, PrinterSettingResolver, PrinterSettingController, PrinterSettingService],
  exports: [PrinterSettingController],
})
export class PrinterSettingModule {}
