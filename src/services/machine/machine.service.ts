import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class MachineService {
  constructor(private prisma: PrismaService) {}

  async createOne(machineCreateArgs: Prisma.MachineCreateArgs) {
    try {
      return await this.prisma.machine.create(machineCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(machineCreateManyArgs: Prisma.MachineCreateManyArgs) {
    try {
      return await this.prisma.machine.createMany(machineCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(machineFindUniqueArgs: Prisma.MachineFindUniqueArgs) {
    try {
      return await this.prisma.machine.findUnique(machineFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(machineFindManyArgs: Prisma.MachineFindManyArgs) {
    try {
      return await this.prisma.machine.findMany(machineFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(machineFindFirstArgs: Prisma.MachineFindFirstArgs) {
    try {
      return await this.prisma.machine.findFirst(machineFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(machineUpdateOneArgs: Prisma.MachineUpdateArgs) {
    try {
      return await this.prisma.machine.update(machineUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(machineUpdateManyArgs: Prisma.MachineUpdateManyArgs) {
    try {
      return await this.prisma.machine.updateMany(machineUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(machineDeleteArgs: Prisma.MachineDeleteArgs) {
    try {
      await this.prisma.machine.delete(machineDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(machineDeleteManyArgs: Prisma.MachineDeleteManyArgs) {
    try {
      await this.prisma.machine.deleteMany(machineDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(machineAggregateArgs: Prisma.MachineAggregateArgs) {
    try {
      return await this.prisma.machine.aggregate(machineAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(machineCountArgs: Prisma.MachineCountArgs) {
    try {
      return await this.prisma.machine.count(machineCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
