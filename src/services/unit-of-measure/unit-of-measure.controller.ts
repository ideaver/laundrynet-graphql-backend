import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UnitOfMeasureService } from './unit-of-measure.service';

@Injectable()
export class UnitOfMeasureController {
  constructor(private readonly unitOfMeasureService: UnitOfMeasureService) {}

  async createOne(unitOfMeasureCreateArgs: Prisma.UnitOfMeasureCreateArgs) {
    return await this.unitOfMeasureService.createOne(unitOfMeasureCreateArgs);
  }

  async createMany(unitOfMeasureCreateManyArgs: Prisma.UnitOfMeasureCreateManyArgs) {
    return await this.unitOfMeasureService.createMany(unitOfMeasureCreateManyArgs);
  }

  async findOne(unitOfMeasureFindUniqueArgs: Prisma.UnitOfMeasureFindUniqueArgs) {
    return await this.unitOfMeasureService.findOne(unitOfMeasureFindUniqueArgs);
  }

  async findMany(unitOfMeasureFindManyArgs: Prisma.UnitOfMeasureFindManyArgs) {
    return await this.unitOfMeasureService.findMany(unitOfMeasureFindManyArgs);
  }

  async findFirst(unitOfMeasureFindFirstArgs: Prisma.UnitOfMeasureFindFirstArgs) {
    return await this.unitOfMeasureService.findFirst(unitOfMeasureFindFirstArgs);
  }

  async updateOne(unitOfMeasureUpdateOneArgs: Prisma.UnitOfMeasureUpdateArgs) {
    return await this.unitOfMeasureService.updateOne(unitOfMeasureUpdateOneArgs);
  }

  async updateMany(unitOfMeasureUpdateManyArgs: Prisma.UnitOfMeasureUpdateManyArgs) {
    return await this.unitOfMeasureService.updateMany(unitOfMeasureUpdateManyArgs);
  }

  async delete(unitOfMeasureDeleteArgs: Prisma.UnitOfMeasureDeleteArgs) {
    return await this.unitOfMeasureService.delete(unitOfMeasureDeleteArgs);
  }

  async deleteMany(unitOfMeasureDeleteManyArgs: Prisma.UnitOfMeasureDeleteManyArgs) {
    return await this.unitOfMeasureService.deleteMany(unitOfMeasureDeleteManyArgs);
  }

  async aggregate(unitOfMeasureAggregateArgs: Prisma.UnitOfMeasureAggregateArgs) {
    return await this.unitOfMeasureService.aggregate(unitOfMeasureAggregateArgs);
  }

  async count(unitOfMeasureCountArgs: Prisma.UnitOfMeasureCountArgs) {
    return await this.unitOfMeasureService.count(unitOfMeasureCountArgs);
  }
}
