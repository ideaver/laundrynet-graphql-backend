import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class UnitOfMeasureService {
  constructor(private prisma: PrismaService) {}

  async createOne(unitOfMeasureCreateArgs: Prisma.UnitOfMeasureCreateArgs) {
    try {
      return await this.prisma.unitOfMeasure.create(unitOfMeasureCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(unitOfMeasureCreateManyArgs: Prisma.UnitOfMeasureCreateManyArgs) {
    try {
      return await this.prisma.unitOfMeasure.createMany(unitOfMeasureCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(unitOfMeasureFindUniqueArgs: Prisma.UnitOfMeasureFindUniqueArgs) {
    try {
      return await this.prisma.unitOfMeasure.findUnique(unitOfMeasureFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(unitOfMeasureFindManyArgs: Prisma.UnitOfMeasureFindManyArgs) {
    try {
      return await this.prisma.unitOfMeasure.findMany(unitOfMeasureFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(unitOfMeasureFindFirstArgs: Prisma.UnitOfMeasureFindFirstArgs) {
    try {
      return await this.prisma.unitOfMeasure.findFirst(unitOfMeasureFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(unitOfMeasureUpdateOneArgs: Prisma.UnitOfMeasureUpdateArgs) {
    try {
      return await this.prisma.unitOfMeasure.update(unitOfMeasureUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(unitOfMeasureUpdateManyArgs: Prisma.UnitOfMeasureUpdateManyArgs) {
    try {
      return await this.prisma.unitOfMeasure.updateMany(unitOfMeasureUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(unitOfMeasureDeleteArgs: Prisma.UnitOfMeasureDeleteArgs) {
    try {
      await this.prisma.unitOfMeasure.delete(unitOfMeasureDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(unitOfMeasureDeleteManyArgs: Prisma.UnitOfMeasureDeleteManyArgs) {
    try {
      await this.prisma.unitOfMeasure.deleteMany(unitOfMeasureDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(unitOfMeasureAggregateArgs: Prisma.UnitOfMeasureAggregateArgs) {
    try {
      return await this.prisma.unitOfMeasure.aggregate(unitOfMeasureAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(unitOfMeasureCountArgs: Prisma.UnitOfMeasureCountArgs) {
    try {
      return await this.prisma.unitOfMeasure.count(unitOfMeasureCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
