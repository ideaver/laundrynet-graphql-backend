import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OwnerService } from './owner.service';

@Injectable()
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  async createOne(ownerCreateArgs: Prisma.OwnerCreateArgs) {
    return await this.ownerService.createOne(ownerCreateArgs);
  }

  async createMany(ownerCreateManyArgs: Prisma.OwnerCreateManyArgs) {
    return await this.ownerService.createMany(ownerCreateManyArgs);
  }

  async findOne(ownerFindUniqueArgs: Prisma.OwnerFindUniqueArgs) {
    return await this.ownerService.findOne(ownerFindUniqueArgs);
  }

  async findMany(ownerFindManyArgs: Prisma.OwnerFindManyArgs) {
    return await this.ownerService.findMany(ownerFindManyArgs);
  }

  async findFirst(ownerFindFirstArgs: Prisma.OwnerFindFirstArgs) {
    return await this.ownerService.findFirst(ownerFindFirstArgs);
  }

  async updateOne(ownerUpdateOneArgs: Prisma.OwnerUpdateArgs) {
    return await this.ownerService.updateOne(ownerUpdateOneArgs);
  }

  async updateMany(ownerUpdateManyArgs: Prisma.OwnerUpdateManyArgs) {
    return await this.ownerService.updateMany(ownerUpdateManyArgs);
  }

  async delete(ownerDeleteArgs: Prisma.OwnerDeleteArgs) {
    return await this.ownerService.delete(ownerDeleteArgs);
  }

  async deleteMany(ownerDeleteManyArgs: Prisma.OwnerDeleteManyArgs) {
    return await this.ownerService.deleteMany(ownerDeleteManyArgs);
  }

  async aggregate(ownerAggregateArgs: Prisma.OwnerAggregateArgs) {
    return await this.ownerService.aggregate(ownerAggregateArgs);
  }

  async count(ownerCountArgs: Prisma.OwnerCountArgs) {
    return await this.ownerService.count(ownerCountArgs);
  }
}
