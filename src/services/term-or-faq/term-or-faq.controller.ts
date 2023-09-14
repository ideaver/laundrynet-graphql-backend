import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TermOrFaqService } from './term-or-faq.service';

@Injectable()
export class TermOrFaqController {
  constructor(private readonly termOrFaqService: TermOrFaqService) {}

  async createOne(termOrFaqCreateArgs: Prisma.TermOrFaqCreateArgs) {
    return await this.termOrFaqService.createOne(termOrFaqCreateArgs);
  }

  async createMany(termOrFaqCreateManyArgs: Prisma.TermOrFaqCreateManyArgs) {
    return await this.termOrFaqService.createMany(termOrFaqCreateManyArgs);
  }

  async findOne(termOrFaqFindUniqueArgs: Prisma.TermOrFaqFindUniqueArgs) {
    return await this.termOrFaqService.findOne(termOrFaqFindUniqueArgs);
  }

  async findMany(termOrFaqFindManyArgs: Prisma.TermOrFaqFindManyArgs) {
    return await this.termOrFaqService.findMany(termOrFaqFindManyArgs);
  }

  async findFirst(termOrFaqFindFirstArgs: Prisma.TermOrFaqFindFirstArgs) {
    return await this.termOrFaqService.findFirst(termOrFaqFindFirstArgs);
  }

  async updateOne(termOrFaqUpdateOneArgs: Prisma.TermOrFaqUpdateArgs) {
    return await this.termOrFaqService.updateOne(termOrFaqUpdateOneArgs);
  }

  async updateMany(termOrFaqUpdateManyArgs: Prisma.TermOrFaqUpdateManyArgs) {
    return await this.termOrFaqService.updateMany(termOrFaqUpdateManyArgs);
  }

  async delete(termOrFaqDeleteArgs: Prisma.TermOrFaqDeleteArgs) {
    return await this.termOrFaqService.delete(termOrFaqDeleteArgs);
  }

  async deleteMany(termOrFaqDeleteManyArgs: Prisma.TermOrFaqDeleteManyArgs) {
    return await this.termOrFaqService.deleteMany(termOrFaqDeleteManyArgs);
  }

  async aggregate(termOrFaqAggregateArgs: Prisma.TermOrFaqAggregateArgs) {
    return await this.termOrFaqService.aggregate(termOrFaqAggregateArgs);
  }

  async count(termOrFaqCountArgs: Prisma.TermOrFaqCountArgs) {
    return await this.termOrFaqService.count(termOrFaqCountArgs);
  }
}
