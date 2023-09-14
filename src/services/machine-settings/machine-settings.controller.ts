import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MachineSettingsService } from './machineSettings.service';

@Injectable()
export class MachineSettingsController {
  constructor(private readonly machineSettingsService: MachineSettingsService) {}

  async createOne(machineSettingsCreateArgs: Prisma.MachineSettingsCreateArgs) {
    return await this.machineSettingsService.createOne(machineSettingsCreateArgs);
  }

  async createMany(machineSettingsCreateManyArgs: Prisma.MachineSettingsCreateManyArgs) {
    return await this.machineSettingsService.createMany(machineSettingsCreateManyArgs);
  }

  async findOne(machineSettingsFindUniqueArgs: Prisma.MachineSettingsFindUniqueArgs) {
    return await this.machineSettingsService.findOne(machineSettingsFindUniqueArgs);
  }

  async findMany(machineSettingsFindManyArgs: Prisma.MachineSettingsFindManyArgs) {
    return await this.machineSettingsService.findMany(machineSettingsFindManyArgs);
  }

  async findFirst(machineSettingsFindFirstArgs: Prisma.MachineSettingsFindFirstArgs) {
    return await this.machineSettingsService.findFirst(machineSettingsFindFirstArgs);
  }

  async updateOne(machineSettingsUpdateOneArgs: Prisma.MachineSettingsUpdateArgs) {
    return await this.machineSettingsService.updateOne(machineSettingsUpdateOneArgs);
  }

  async updateMany(machineSettingsUpdateManyArgs: Prisma.MachineSettingsUpdateManyArgs) {
    return await this.machineSettingsService.updateMany(machineSettingsUpdateManyArgs);
  }

  async delete(machineSettingsDeleteArgs: Prisma.MachineSettingsDeleteArgs) {
    return await this.machineSettingsService.delete(machineSettingsDeleteArgs);
  }

  async deleteMany(machineSettingsDeleteManyArgs: Prisma.MachineSettingsDeleteManyArgs) {
    return await this.machineSettingsService.deleteMany(machineSettingsDeleteManyArgs);
  }

  async aggregate(machineSettingsAggregateArgs: Prisma.MachineSettingsAggregateArgs) {
    return await this.machineSettingsService.aggregate(machineSettingsAggregateArgs);
  }

  async count(machineSettingsCountArgs: Prisma.MachineSettingsCountArgs) {
    return await this.machineSettingsService.count(machineSettingsCountArgs);
  }
}
