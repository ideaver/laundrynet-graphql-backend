import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrinterMachineService {
  constructor(private prisma: PrismaService) {}

  async createOne(printerMachineCreateArgs: Prisma.PrinterMachineCreateArgs) {
    try {
      return await this.prisma.printerMachine.create(printerMachineCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(printerMachineCreateManyArgs: Prisma.PrinterMachineCreateManyArgs) {
    try {
      return await this.prisma.printerMachine.createMany(printerMachineCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(printerMachineFindUniqueArgs: Prisma.PrinterMachineFindUniqueArgs) {
    try {
      return await this.prisma.printerMachine.findUnique(printerMachineFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(printerMachineFindManyArgs: Prisma.PrinterMachineFindManyArgs) {
    try {
      return await this.prisma.printerMachine.findMany(printerMachineFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(printerMachineFindFirstArgs: Prisma.PrinterMachineFindFirstArgs) {
    try {
      return await this.prisma.printerMachine.findFirst(printerMachineFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(printerMachineUpdateOneArgs: Prisma.PrinterMachineUpdateArgs) {
    try {
      return await this.prisma.printerMachine.update(printerMachineUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(printerMachineUpdateManyArgs: Prisma.PrinterMachineUpdateManyArgs) {
    try {
      return await this.prisma.printerMachine.updateMany(printerMachineUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(printerMachineDeleteArgs: Prisma.PrinterMachineDeleteArgs) {
    try {
      await this.prisma.printerMachine.delete(printerMachineDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(printerMachineDeleteManyArgs: Prisma.PrinterMachineDeleteManyArgs) {
    try {
      await this.prisma.printerMachine.deleteMany(printerMachineDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(printerMachineAggregateArgs: Prisma.PrinterMachineAggregateArgs) {
    try {
      return await this.prisma.printerMachine.aggregate(printerMachineAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(printerMachineCountArgs: Prisma.PrinterMachineCountArgs) {
    try {
      return await this.prisma.printerMachine.count(printerMachineCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
