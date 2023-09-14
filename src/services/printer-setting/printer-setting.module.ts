import { Module } from '@nestjs/common';
import { PrinterSettingService } from './printerSetting.service';
import { PrinterSettingResolver } from './printerSetting.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PrinterSettingController } from './printerSetting.controller';

@Module({
  providers: [PrismaService, PrinterSettingResolver, PrinterSettingController, PrinterSettingService],
  exports: [PrinterSettingController],
})
export class PrinterSettingModule {}
