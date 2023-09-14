import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async createOne(paymentCreateArgs: Prisma.PaymentCreateArgs) {
    try {
      return await this.prisma.payment.create(paymentCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(paymentCreateManyArgs: Prisma.PaymentCreateManyArgs) {
    try {
      return await this.prisma.payment.createMany(paymentCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(paymentFindUniqueArgs: Prisma.PaymentFindUniqueArgs) {
    try {
      return await this.prisma.payment.findUnique(paymentFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(paymentFindManyArgs: Prisma.PaymentFindManyArgs) {
    try {
      return await this.prisma.payment.findMany(paymentFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(paymentFindFirstArgs: Prisma.PaymentFindFirstArgs) {
    try {
      return await this.prisma.payment.findFirst(paymentFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(paymentUpdateOneArgs: Prisma.PaymentUpdateArgs) {
    try {
      return await this.prisma.payment.update(paymentUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(paymentUpdateManyArgs: Prisma.PaymentUpdateManyArgs) {
    try {
      return await this.prisma.payment.updateMany(paymentUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(paymentDeleteArgs: Prisma.PaymentDeleteArgs) {
    try {
      await this.prisma.payment.delete(paymentDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(paymentDeleteManyArgs: Prisma.PaymentDeleteManyArgs) {
    try {
      await this.prisma.payment.deleteMany(paymentDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(paymentAggregateArgs: Prisma.PaymentAggregateArgs) {
    try {
      return await this.prisma.payment.aggregate(paymentAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(paymentCountArgs: Prisma.PaymentCountArgs) {
    try {
      return await this.prisma.payment.count(paymentCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
