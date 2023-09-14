import { Module } from '@nestjs/common';
import { EdcMachineService } from './edcMachine.service';
import { EdcMachineResolver } from './edcMachine.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EdcMachineController } from './edcMachine.controller';

@Module({
  providers: [PrismaService, EdcMachineResolver, EdcMachineController, EdcMachineService],
  exports: [EdcMachineController],
})
export class EdcMachineModule {}
