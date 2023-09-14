import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhoneCountryCodeService {
  constructor(private prisma: PrismaService) {}

  async createOne(phoneCountryCodeCreateArgs: Prisma.PhoneCountryCodeCreateArgs) {
    try {
      return await this.prisma.phoneCountryCode.create(phoneCountryCodeCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(phoneCountryCodeCreateManyArgs: Prisma.PhoneCountryCodeCreateManyArgs) {
    try {
      return await this.prisma.phoneCountryCode.createMany(phoneCountryCodeCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(phoneCountryCodeFindUniqueArgs: Prisma.PhoneCountryCodeFindUniqueArgs) {
    try {
      return await this.prisma.phoneCountryCode.findUnique(phoneCountryCodeFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(phoneCountryCodeFindManyArgs: Prisma.PhoneCountryCodeFindManyArgs) {
    try {
      return await this.prisma.phoneCountryCode.findMany(phoneCountryCodeFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(phoneCountryCodeFindFirstArgs: Prisma.PhoneCountryCodeFindFirstArgs) {
    try {
      return await this.prisma.phoneCountryCode.findFirst(phoneCountryCodeFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(phoneCountryCodeUpdateOneArgs: Prisma.PhoneCountryCodeUpdateArgs) {
    try {
      return await this.prisma.phoneCountryCode.update(phoneCountryCodeUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(phoneCountryCodeUpdateManyArgs: Prisma.PhoneCountryCodeUpdateManyArgs) {
    try {
      return await this.prisma.phoneCountryCode.updateMany(phoneCountryCodeUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(phoneCountryCodeDeleteArgs: Prisma.PhoneCountryCodeDeleteArgs) {
    try {
      await this.prisma.phoneCountryCode.delete(phoneCountryCodeDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(phoneCountryCodeDeleteManyArgs: Prisma.PhoneCountryCodeDeleteManyArgs) {
    try {
      await this.prisma.phoneCountryCode.deleteMany(phoneCountryCodeDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(phoneCountryCodeAggregateArgs: Prisma.PhoneCountryCodeAggregateArgs) {
    try {
      return await this.prisma.phoneCountryCode.aggregate(phoneCountryCodeAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(phoneCountryCodeCountArgs: Prisma.PhoneCountryCodeCountArgs) {
    try {
      return await this.prisma.phoneCountryCode.count(phoneCountryCodeCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
