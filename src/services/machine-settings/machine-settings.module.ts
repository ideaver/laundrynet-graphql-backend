import { Module } from '@nestjs/common';
import { MachineSettingsService } from './machine-settings.service';
import { MachineSettingsResolver } from './machine-settings.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MachineSettingsController } from './machine-settings.controller';

@Module({
  providers: [PrismaService, MachineSettingsResolver, MachineSettingsController, MachineSettingsService],
  exports: [MachineSettingsController],
})
export class MachineSettingsModule {}
