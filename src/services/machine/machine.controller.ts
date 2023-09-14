import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MachineService } from './machine.service';

@Injectable()
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  async createOne(machineCreateArgs: Prisma.MachineCreateArgs) {
    return await this.machineService.createOne(machineCreateArgs);
  }

  async createMany(machineCreateManyArgs: Prisma.MachineCreateManyArgs) {
    return await this.machineService.createMany(machineCreateManyArgs);
  }

  async findOne(machineFindUniqueArgs: Prisma.MachineFindUniqueArgs) {
    return await this.machineService.findOne(machineFindUniqueArgs);
  }

  async findMany(machineFindManyArgs: Prisma.MachineFindManyArgs) {
    return await this.machineService.findMany(machineFindManyArgs);
  }

  async findFirst(machineFindFirstArgs: Prisma.MachineFindFirstArgs) {
    return await this.machineService.findFirst(machineFindFirstArgs);
  }

  async updateOne(machineUpdateOneArgs: Prisma.MachineUpdateArgs) {
    return await this.machineService.updateOne(machineUpdateOneArgs);
  }

  async updateMany(machineUpdateManyArgs: Prisma.MachineUpdateManyArgs) {
    return await this.machineService.updateMany(machineUpdateManyArgs);
  }

  async delete(machineDeleteArgs: Prisma.MachineDeleteArgs) {
    return await this.machineService.delete(machineDeleteArgs);
  }

  async deleteMany(machineDeleteManyArgs: Prisma.MachineDeleteManyArgs) {
    return await this.machineService.deleteMany(machineDeleteManyArgs);
  }

  async aggregate(machineAggregateArgs: Prisma.MachineAggregateArgs) {
    return await this.machineService.aggregate(machineAggregateArgs);
  }

  async count(machineCountArgs: Prisma.MachineCountArgs) {
    return await this.machineService.count(machineCountArgs);
  }
}
