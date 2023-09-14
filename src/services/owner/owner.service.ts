import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  async createOne(ownerCreateArgs: Prisma.OwnerCreateArgs) {
    try {
      return await this.prisma.owner.create(ownerCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(ownerCreateManyArgs: Prisma.OwnerCreateManyArgs) {
    try {
      return await this.prisma.owner.createMany(ownerCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(ownerFindUniqueArgs: Prisma.OwnerFindUniqueArgs) {
    try {
      return await this.prisma.owner.findUnique(ownerFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(ownerFindManyArgs: Prisma.OwnerFindManyArgs) {
    try {
      return await this.prisma.owner.findMany(ownerFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(ownerFindFirstArgs: Prisma.OwnerFindFirstArgs) {
    try {
      return await this.prisma.owner.findFirst(ownerFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(ownerUpdateOneArgs: Prisma.OwnerUpdateArgs) {
    try {
      return await this.prisma.owner.update(ownerUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(ownerUpdateManyArgs: Prisma.OwnerUpdateManyArgs) {
    try {
      return await this.prisma.owner.updateMany(ownerUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(ownerDeleteArgs: Prisma.OwnerDeleteArgs) {
    try {
      await this.prisma.owner.delete(ownerDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(ownerDeleteManyArgs: Prisma.OwnerDeleteManyArgs) {
    try {
      await this.prisma.owner.deleteMany(ownerDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(ownerAggregateArgs: Prisma.OwnerAggregateArgs) {
    try {
      return await this.prisma.owner.aggregate(ownerAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(ownerCountArgs: Prisma.OwnerCountArgs) {
    try {
      return await this.prisma.owner.count(ownerCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
