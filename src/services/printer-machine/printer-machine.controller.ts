import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrinterMachineService } from './printerMachine.service';

@Injectable()
export class PrinterMachineController {
  constructor(private readonly printerMachineService: PrinterMachineService) {}

  async createOne(printerMachineCreateArgs: Prisma.PrinterMachineCreateArgs) {
    return await this.printerMachineService.createOne(printerMachineCreateArgs);
  }

  async createMany(printerMachineCreateManyArgs: Prisma.PrinterMachineCreateManyArgs) {
    return await this.printerMachineService.createMany(printerMachineCreateManyArgs);
  }

  async findOne(printerMachineFindUniqueArgs: Prisma.PrinterMachineFindUniqueArgs) {
    return await this.printerMachineService.findOne(printerMachineFindUniqueArgs);
  }

  async findMany(printerMachineFindManyArgs: Prisma.PrinterMachineFindManyArgs) {
    return await this.printerMachineService.findMany(printerMachineFindManyArgs);
  }

  async findFirst(printerMachineFindFirstArgs: Prisma.PrinterMachineFindFirstArgs) {
    return await this.printerMachineService.findFirst(printerMachineFindFirstArgs);
  }

  async updateOne(printerMachineUpdateOneArgs: Prisma.PrinterMachineUpdateArgs) {
    return await this.printerMachineService.updateOne(printerMachineUpdateOneArgs);
  }

  async updateMany(printerMachineUpdateManyArgs: Prisma.PrinterMachineUpdateManyArgs) {
    return await this.printerMachineService.updateMany(printerMachineUpdateManyArgs);
  }

  async delete(printerMachineDeleteArgs: Prisma.PrinterMachineDeleteArgs) {
    return await this.printerMachineService.delete(printerMachineDeleteArgs);
  }

  async deleteMany(printerMachineDeleteManyArgs: Prisma.PrinterMachineDeleteManyArgs) {
    return await this.printerMachineService.deleteMany(printerMachineDeleteManyArgs);
  }

  async aggregate(printerMachineAggregateArgs: Prisma.PrinterMachineAggregateArgs) {
    return await this.printerMachineService.aggregate(printerMachineAggregateArgs);
  }

  async count(printerMachineCountArgs: Prisma.PrinterMachineCountArgs) {
    return await this.printerMachineService.count(printerMachineCountArgs);
  }
}
