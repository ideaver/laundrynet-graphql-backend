import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class BusinessHourService {
  constructor(private prisma: PrismaService) {}

  async createOne(businessHourCreateArgs: Prisma.BusinessHourCreateArgs) {
    try {
      return await this.prisma.businessHour.create(businessHourCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(businessHourCreateManyArgs: Prisma.BusinessHourCreateManyArgs) {
    try {
      return await this.prisma.businessHour.createMany(businessHourCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(businessHourFindUniqueArgs: Prisma.BusinessHourFindUniqueArgs) {
    try {
      return await this.prisma.businessHour.findUnique(businessHourFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(businessHourFindManyArgs: Prisma.BusinessHourFindManyArgs) {
    try {
      return await this.prisma.businessHour.findMany(businessHourFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(businessHourFindFirstArgs: Prisma.BusinessHourFindFirstArgs) {
    try {
      return await this.prisma.businessHour.findFirst(businessHourFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(businessHourUpdateOneArgs: Prisma.BusinessHourUpdateArgs) {
    try {
      return await this.prisma.businessHour.update(businessHourUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(businessHourUpdateManyArgs: Prisma.BusinessHourUpdateManyArgs) {
    try {
      return await this.prisma.businessHour.updateMany(businessHourUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(businessHourDeleteArgs: Prisma.BusinessHourDeleteArgs) {
    try {
      await this.prisma.businessHour.delete(businessHourDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(businessHourDeleteManyArgs: Prisma.BusinessHourDeleteManyArgs) {
    try {
      await this.prisma.businessHour.deleteMany(businessHourDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(businessHourAggregateArgs: Prisma.BusinessHourAggregateArgs) {
    try {
      return await this.prisma.businessHour.aggregate(businessHourAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(businessHourCountArgs: Prisma.BusinessHourCountArgs) {
    try {
      return await this.prisma.businessHour.count(businessHourCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
