import { Module } from '@nestjs/common';
import { PrinterMachineService } from './printer-machine.service';
import { PrinterMachineResolver } from './printer-machine.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PrinterMachineController } from './printer-machine.controller';

@Module({
  providers: [PrismaService, PrinterMachineResolver, PrinterMachineController, PrinterMachineService],
  exports: [PrinterMachineController],
})
export class PrinterMachineModule {}
