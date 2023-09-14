import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class EdcMachineService {
  constructor(private prisma: PrismaService) {}

  async createOne(edcMachineCreateArgs: Prisma.EdcMachineCreateArgs) {
    try {
      return await this.prisma.edcMachine.create(edcMachineCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(edcMachineCreateManyArgs: Prisma.EdcMachineCreateManyArgs) {
    try {
      return await this.prisma.edcMachine.createMany(edcMachineCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(edcMachineFindUniqueArgs: Prisma.EdcMachineFindUniqueArgs) {
    try {
      return await this.prisma.edcMachine.findUnique(edcMachineFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(edcMachineFindManyArgs: Prisma.EdcMachineFindManyArgs) {
    try {
      return await this.prisma.edcMachine.findMany(edcMachineFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(edcMachineFindFirstArgs: Prisma.EdcMachineFindFirstArgs) {
    try {
      return await this.prisma.edcMachine.findFirst(edcMachineFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(edcMachineUpdateOneArgs: Prisma.EdcMachineUpdateArgs) {
    try {
      return await this.prisma.edcMachine.update(edcMachineUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(edcMachineUpdateManyArgs: Prisma.EdcMachineUpdateManyArgs) {
    try {
      return await this.prisma.edcMachine.updateMany(edcMachineUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(edcMachineDeleteArgs: Prisma.EdcMachineDeleteArgs) {
    try {
      await this.prisma.edcMachine.delete(edcMachineDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(edcMachineDeleteManyArgs: Prisma.EdcMachineDeleteManyArgs) {
    try {
      await this.prisma.edcMachine.deleteMany(edcMachineDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(edcMachineAggregateArgs: Prisma.EdcMachineAggregateArgs) {
    try {
      return await this.prisma.edcMachine.aggregate(edcMachineAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(edcMachineCountArgs: Prisma.EdcMachineCountArgs) {
    try {
      return await this.prisma.edcMachine.count(edcMachineCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
