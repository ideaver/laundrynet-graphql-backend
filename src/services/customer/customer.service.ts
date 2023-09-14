import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async createOne(customerCreateArgs: Prisma.CustomerCreateArgs) {
    try {
      return await this.prisma.customer.create(customerCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(customerCreateManyArgs: Prisma.CustomerCreateManyArgs) {
    try {
      return await this.prisma.customer.createMany(customerCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(customerFindUniqueArgs: Prisma.CustomerFindUniqueArgs) {
    try {
      return await this.prisma.customer.findUnique(customerFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(customerFindManyArgs: Prisma.CustomerFindManyArgs) {
    try {
      return await this.prisma.customer.findMany(customerFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(customerFindFirstArgs: Prisma.CustomerFindFirstArgs) {
    try {
      return await this.prisma.customer.findFirst(customerFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(customerUpdateOneArgs: Prisma.CustomerUpdateArgs) {
    try {
      return await this.prisma.customer.update(customerUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(customerUpdateManyArgs: Prisma.CustomerUpdateManyArgs) {
    try {
      return await this.prisma.customer.updateMany(customerUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(customerDeleteArgs: Prisma.CustomerDeleteArgs) {
    try {
      await this.prisma.customer.delete(customerDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(customerDeleteManyArgs: Prisma.CustomerDeleteManyArgs) {
    try {
      await this.prisma.customer.deleteMany(customerDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(customerAggregateArgs: Prisma.CustomerAggregateArgs) {
    try {
      return await this.prisma.customer.aggregate(customerAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(customerCountArgs: Prisma.CustomerCountArgs) {
    try {
      return await this.prisma.customer.count(customerCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
