import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EdcMachineService } from './edc-machine.service';

@Injectable()
export class EdcMachineController {
  constructor(private readonly edcMachineService: EdcMachineService) {}

  async createOne(edcMachineCreateArgs: Prisma.EdcMachineCreateArgs) {
    return await this.edcMachineService.createOne(edcMachineCreateArgs);
  }

  async createMany(edcMachineCreateManyArgs: Prisma.EdcMachineCreateManyArgs) {
    return await this.edcMachineService.createMany(edcMachineCreateManyArgs);
  }

  async findOne(edcMachineFindUniqueArgs: Prisma.EdcMachineFindUniqueArgs) {
    return await this.edcMachineService.findOne(edcMachineFindUniqueArgs);
  }

  async findMany(edcMachineFindManyArgs: Prisma.EdcMachineFindManyArgs) {
    return await this.edcMachineService.findMany(edcMachineFindManyArgs);
  }

  async findFirst(edcMachineFindFirstArgs: Prisma.EdcMachineFindFirstArgs) {
    return await this.edcMachineService.findFirst(edcMachineFindFirstArgs);
  }

  async updateOne(edcMachineUpdateOneArgs: Prisma.EdcMachineUpdateArgs) {
    return await this.edcMachineService.updateOne(edcMachineUpdateOneArgs);
  }

  async updateMany(edcMachineUpdateManyArgs: Prisma.EdcMachineUpdateManyArgs) {
    return await this.edcMachineService.updateMany(edcMachineUpdateManyArgs);
  }

  async delete(edcMachineDeleteArgs: Prisma.EdcMachineDeleteArgs) {
    return await this.edcMachineService.delete(edcMachineDeleteArgs);
  }

  async deleteMany(edcMachineDeleteManyArgs: Prisma.EdcMachineDeleteManyArgs) {
    return await this.edcMachineService.deleteMany(edcMachineDeleteManyArgs);
  }

  async aggregate(edcMachineAggregateArgs: Prisma.EdcMachineAggregateArgs) {
    return await this.edcMachineService.aggregate(edcMachineAggregateArgs);
  }

  async count(edcMachineCountArgs: Prisma.EdcMachineCountArgs) {
    return await this.edcMachineService.count(edcMachineCountArgs);
  }
}
