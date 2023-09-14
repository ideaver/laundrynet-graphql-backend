import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class IndonesianBankService {
  constructor(private prisma: PrismaService) {}

  async createOne(indonesianBankCreateArgs: Prisma.IndonesianBankCreateArgs) {
    try {
      return await this.prisma.indonesianBank.create(indonesianBankCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(indonesianBankCreateManyArgs: Prisma.IndonesianBankCreateManyArgs) {
    try {
      return await this.prisma.indonesianBank.createMany(indonesianBankCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(indonesianBankFindUniqueArgs: Prisma.IndonesianBankFindUniqueArgs) {
    try {
      return await this.prisma.indonesianBank.findUnique(indonesianBankFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(indonesianBankFindManyArgs: Prisma.IndonesianBankFindManyArgs) {
    try {
      return await this.prisma.indonesianBank.findMany(indonesianBankFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(indonesianBankFindFirstArgs: Prisma.IndonesianBankFindFirstArgs) {
    try {
      return await this.prisma.indonesianBank.findFirst(indonesianBankFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(indonesianBankUpdateOneArgs: Prisma.IndonesianBankUpdateArgs) {
    try {
      return await this.prisma.indonesianBank.update(indonesianBankUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(indonesianBankUpdateManyArgs: Prisma.IndonesianBankUpdateManyArgs) {
    try {
      return await this.prisma.indonesianBank.updateMany(indonesianBankUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(indonesianBankDeleteArgs: Prisma.IndonesianBankDeleteArgs) {
    try {
      await this.prisma.indonesianBank.delete(indonesianBankDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(indonesianBankDeleteManyArgs: Prisma.IndonesianBankDeleteManyArgs) {
    try {
      await this.prisma.indonesianBank.deleteMany(indonesianBankDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(indonesianBankAggregateArgs: Prisma.IndonesianBankAggregateArgs) {
    try {
      return await this.prisma.indonesianBank.aggregate(indonesianBankAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(indonesianBankCountArgs: Prisma.IndonesianBankCountArgs) {
    try {
      return await this.prisma.indonesianBank.count(indonesianBankCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
