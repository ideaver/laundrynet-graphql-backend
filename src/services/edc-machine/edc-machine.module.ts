import { Module } from '@nestjs/common';
import { EdcMachineService } from './edc-machine.service';
import { EdcMachineResolver } from './edc-machine.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EdcMachineController } from './edc-machine.controller';

@Module({
  providers: [PrismaService, EdcMachineResolver, EdcMachineController, EdcMachineService],
  exports: [EdcMachineController],
})
export class EdcMachineModule {}
