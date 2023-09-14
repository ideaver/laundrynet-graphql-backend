import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineResolver } from './machine.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MachineController } from './machine.controller';

@Module({
  providers: [PrismaService, MachineResolver, MachineController, MachineService],
  exports: [MachineController],
})
export class MachineModule {}
