import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class TermOrFaqService {
  constructor(private prisma: PrismaService) {}

  async createOne(termOrFaqCreateArgs: Prisma.TermOrFaqCreateArgs) {
    try {
      return await this.prisma.termOrFaq.create(termOrFaqCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(termOrFaqCreateManyArgs: Prisma.TermOrFaqCreateManyArgs) {
    try {
      return await this.prisma.termOrFaq.createMany(termOrFaqCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(termOrFaqFindUniqueArgs: Prisma.TermOrFaqFindUniqueArgs) {
    try {
      return await this.prisma.termOrFaq.findUnique(termOrFaqFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(termOrFaqFindManyArgs: Prisma.TermOrFaqFindManyArgs) {
    try {
      return await this.prisma.termOrFaq.findMany(termOrFaqFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(termOrFaqFindFirstArgs: Prisma.TermOrFaqFindFirstArgs) {
    try {
      return await this.prisma.termOrFaq.findFirst(termOrFaqFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(termOrFaqUpdateOneArgs: Prisma.TermOrFaqUpdateArgs) {
    try {
      return await this.prisma.termOrFaq.update(termOrFaqUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(termOrFaqUpdateManyArgs: Prisma.TermOrFaqUpdateManyArgs) {
    try {
      return await this.prisma.termOrFaq.updateMany(termOrFaqUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(termOrFaqDeleteArgs: Prisma.TermOrFaqDeleteArgs) {
    try {
      await this.prisma.termOrFaq.delete(termOrFaqDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(termOrFaqDeleteManyArgs: Prisma.TermOrFaqDeleteManyArgs) {
    try {
      await this.prisma.termOrFaq.deleteMany(termOrFaqDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(termOrFaqAggregateArgs: Prisma.TermOrFaqAggregateArgs) {
    try {
      return await this.prisma.termOrFaq.aggregate(termOrFaqAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(termOrFaqCountArgs: Prisma.TermOrFaqCountArgs) {
    try {
      return await this.prisma.termOrFaq.count(termOrFaqCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
