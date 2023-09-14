import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class LaundryItemCategoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(laundryItemCategoryCreateArgs: Prisma.LaundryItemCategoryCreateArgs) {
    try {
      return await this.prisma.laundryItemCategory.create(laundryItemCategoryCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(laundryItemCategoryCreateManyArgs: Prisma.LaundryItemCategoryCreateManyArgs) {
    try {
      return await this.prisma.laundryItemCategory.createMany(laundryItemCategoryCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(laundryItemCategoryFindUniqueArgs: Prisma.LaundryItemCategoryFindUniqueArgs) {
    try {
      return await this.prisma.laundryItemCategory.findUnique(laundryItemCategoryFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(laundryItemCategoryFindManyArgs: Prisma.LaundryItemCategoryFindManyArgs) {
    try {
      return await this.prisma.laundryItemCategory.findMany(laundryItemCategoryFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(laundryItemCategoryFindFirstArgs: Prisma.LaundryItemCategoryFindFirstArgs) {
    try {
      return await this.prisma.laundryItemCategory.findFirst(laundryItemCategoryFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(laundryItemCategoryUpdateOneArgs: Prisma.LaundryItemCategoryUpdateArgs) {
    try {
      return await this.prisma.laundryItemCategory.update(laundryItemCategoryUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(laundryItemCategoryUpdateManyArgs: Prisma.LaundryItemCategoryUpdateManyArgs) {
    try {
      return await this.prisma.laundryItemCategory.updateMany(laundryItemCategoryUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(laundryItemCategoryDeleteArgs: Prisma.LaundryItemCategoryDeleteArgs) {
    try {
      await this.prisma.laundryItemCategory.delete(laundryItemCategoryDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(laundryItemCategoryDeleteManyArgs: Prisma.LaundryItemCategoryDeleteManyArgs) {
    try {
      await this.prisma.laundryItemCategory.deleteMany(laundryItemCategoryDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(laundryItemCategoryAggregateArgs: Prisma.LaundryItemCategoryAggregateArgs) {
    try {
      return await this.prisma.laundryItemCategory.aggregate(laundryItemCategoryAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(laundryItemCategoryCountArgs: Prisma.LaundryItemCategoryCountArgs) {
    try {
      return await this.prisma.laundryItemCategory.count(laundryItemCategoryCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
