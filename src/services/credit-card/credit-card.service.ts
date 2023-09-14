import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreditCardService {
  constructor(private prisma: PrismaService) {}

  async createOne(creditCardCreateArgs: Prisma.CreditCardCreateArgs) {
    try {
      return await this.prisma.creditCard.create(creditCardCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(creditCardCreateManyArgs: Prisma.CreditCardCreateManyArgs) {
    try {
      return await this.prisma.creditCard.createMany(creditCardCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(creditCardFindUniqueArgs: Prisma.CreditCardFindUniqueArgs) {
    try {
      return await this.prisma.creditCard.findUnique(creditCardFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(creditCardFindManyArgs: Prisma.CreditCardFindManyArgs) {
    try {
      return await this.prisma.creditCard.findMany(creditCardFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(creditCardFindFirstArgs: Prisma.CreditCardFindFirstArgs) {
    try {
      return await this.prisma.creditCard.findFirst(creditCardFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(creditCardUpdateOneArgs: Prisma.CreditCardUpdateArgs) {
    try {
      return await this.prisma.creditCard.update(creditCardUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(creditCardUpdateManyArgs: Prisma.CreditCardUpdateManyArgs) {
    try {
      return await this.prisma.creditCard.updateMany(creditCardUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(creditCardDeleteArgs: Prisma.CreditCardDeleteArgs) {
    try {
      await this.prisma.creditCard.delete(creditCardDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(creditCardDeleteManyArgs: Prisma.CreditCardDeleteManyArgs) {
    try {
      await this.prisma.creditCard.deleteMany(creditCardDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(creditCardAggregateArgs: Prisma.CreditCardAggregateArgs) {
    try {
      return await this.prisma.creditCard.aggregate(creditCardAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(creditCardCountArgs: Prisma.CreditCardCountArgs) {
    try {
      return await this.prisma.creditCard.count(creditCardCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
