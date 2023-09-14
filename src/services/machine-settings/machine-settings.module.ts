import { Module } from '@nestjs/common';
import { MachineSettingsService } from './machineSettings.service';
import { MachineSettingsResolver } from './machineSettings.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MachineSettingsController } from './machineSettings.controller';

@Module({
  providers: [PrismaService, MachineSettingsResolver, MachineSettingsController, MachineSettingsService],
  exports: [MachineSettingsController],
})
export class MachineSettingsModule {}
