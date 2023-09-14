import { Module } from '@nestjs/common';
import { PrinterMachineService } from './printerMachine.service';
import { PrinterMachineResolver } from './printerMachine.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PrinterMachineController } from './printerMachine.controller';

@Module({
  providers: [PrismaService, PrinterMachineResolver, PrinterMachineController, PrinterMachineService],
  exports: [PrinterMachineController],
})
export class PrinterMachineModule {}
