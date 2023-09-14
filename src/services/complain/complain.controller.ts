import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ComplainService } from './complain.service';

@Injectable()
export class ComplainController {
  constructor(private readonly complainService: ComplainService) {}

  async createOne(complainCreateArgs: Prisma.ComplainCreateArgs) {
    return await this.complainService.createOne(complainCreateArgs);
  }

  async createMany(complainCreateManyArgs: Prisma.ComplainCreateManyArgs) {
    return await this.complainService.createMany(complainCreateManyArgs);
  }

  async findOne(complainFindUniqueArgs: Prisma.ComplainFindUniqueArgs) {
    return await this.complainService.findOne(complainFindUniqueArgs);
  }

  async findMany(complainFindManyArgs: Prisma.ComplainFindManyArgs) {
    return await this.complainService.findMany(complainFindManyArgs);
  }

  async findFirst(complainFindFirstArgs: Prisma.ComplainFindFirstArgs) {
    return await this.complainService.findFirst(complainFindFirstArgs);
  }

  async updateOne(complainUpdateOneArgs: Prisma.ComplainUpdateArgs) {
    return await this.complainService.updateOne(complainUpdateOneArgs);
  }

  async updateMany(complainUpdateManyArgs: Prisma.ComplainUpdateManyArgs) {
    return await this.complainService.updateMany(complainUpdateManyArgs);
  }

  async delete(complainDeleteArgs: Prisma.ComplainDeleteArgs) {
    return await this.complainService.delete(complainDeleteArgs);
  }

  async deleteMany(complainDeleteManyArgs: Prisma.ComplainDeleteManyArgs) {
    return await this.complainService.deleteMany(complainDeleteManyArgs);
  }

  async aggregate(complainAggregateArgs: Prisma.ComplainAggregateArgs) {
    return await this.complainService.aggregate(complainAggregateArgs);
  }

  async count(complainCountArgs: Prisma.ComplainCountArgs) {
    return await this.complainService.count(complainCountArgs);
  }
}
