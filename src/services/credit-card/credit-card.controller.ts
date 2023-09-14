import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreditCardService } from './creditCard.service';

@Injectable()
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  async createOne(creditCardCreateArgs: Prisma.CreditCardCreateArgs) {
    return await this.creditCardService.createOne(creditCardCreateArgs);
  }

  async createMany(creditCardCreateManyArgs: Prisma.CreditCardCreateManyArgs) {
    return await this.creditCardService.createMany(creditCardCreateManyArgs);
  }

  async findOne(creditCardFindUniqueArgs: Prisma.CreditCardFindUniqueArgs) {
    return await this.creditCardService.findOne(creditCardFindUniqueArgs);
  }

  async findMany(creditCardFindManyArgs: Prisma.CreditCardFindManyArgs) {
    return await this.creditCardService.findMany(creditCardFindManyArgs);
  }

  async findFirst(creditCardFindFirstArgs: Prisma.CreditCardFindFirstArgs) {
    return await this.creditCardService.findFirst(creditCardFindFirstArgs);
  }

  async updateOne(creditCardUpdateOneArgs: Prisma.CreditCardUpdateArgs) {
    return await this.creditCardService.updateOne(creditCardUpdateOneArgs);
  }

  async updateMany(creditCardUpdateManyArgs: Prisma.CreditCardUpdateManyArgs) {
    return await this.creditCardService.updateMany(creditCardUpdateManyArgs);
  }

  async delete(creditCardDeleteArgs: Prisma.CreditCardDeleteArgs) {
    return await this.creditCardService.delete(creditCardDeleteArgs);
  }

  async deleteMany(creditCardDeleteManyArgs: Prisma.CreditCardDeleteManyArgs) {
    return await this.creditCardService.deleteMany(creditCardDeleteManyArgs);
  }

  async aggregate(creditCardAggregateArgs: Prisma.CreditCardAggregateArgs) {
    return await this.creditCardService.aggregate(creditCardAggregateArgs);
  }

  async count(creditCardCountArgs: Prisma.CreditCardCountArgs) {
    return await this.creditCardService.count(creditCardCountArgs);
  }
}
