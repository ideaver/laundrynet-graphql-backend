import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ComplainService {
  constructor(private prisma: PrismaService) {}

  async createOne(complainCreateArgs: Prisma.ComplainCreateArgs) {
    try {
      return await this.prisma.complain.create(complainCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(complainCreateManyArgs: Prisma.ComplainCreateManyArgs) {
    try {
      return await this.prisma.complain.createMany(complainCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(complainFindUniqueArgs: Prisma.ComplainFindUniqueArgs) {
    try {
      return await this.prisma.complain.findUnique(complainFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(complainFindManyArgs: Prisma.ComplainFindManyArgs) {
    try {
      return await this.prisma.complain.findMany(complainFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(complainFindFirstArgs: Prisma.ComplainFindFirstArgs) {
    try {
      return await this.prisma.complain.findFirst(complainFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(complainUpdateOneArgs: Prisma.ComplainUpdateArgs) {
    try {
      return await this.prisma.complain.update(complainUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(complainUpdateManyArgs: Prisma.ComplainUpdateManyArgs) {
    try {
      return await this.prisma.complain.updateMany(complainUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(complainDeleteArgs: Prisma.ComplainDeleteArgs) {
    try {
      await this.prisma.complain.delete(complainDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(complainDeleteManyArgs: Prisma.ComplainDeleteManyArgs) {
    try {
      await this.prisma.complain.deleteMany(complainDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(complainAggregateArgs: Prisma.ComplainAggregateArgs) {
    try {
      return await this.prisma.complain.aggregate(complainAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(complainCountArgs: Prisma.ComplainCountArgs) {
    try {
      return await this.prisma.complain.count(complainCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
