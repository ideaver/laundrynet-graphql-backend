import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PaymentService } from './payment.service';

@Injectable()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  async createOne(paymentCreateArgs: Prisma.PaymentCreateArgs) {
    return await this.paymentService.createOne(paymentCreateArgs);
  }

  async createMany(paymentCreateManyArgs: Prisma.PaymentCreateManyArgs) {
    return await this.paymentService.createMany(paymentCreateManyArgs);
  }

  async findOne(paymentFindUniqueArgs: Prisma.PaymentFindUniqueArgs) {
    return await this.paymentService.findOne(paymentFindUniqueArgs);
  }

  async findMany(paymentFindManyArgs: Prisma.PaymentFindManyArgs) {
    return await this.paymentService.findMany(paymentFindManyArgs);
  }

  async findFirst(paymentFindFirstArgs: Prisma.PaymentFindFirstArgs) {
    return await this.paymentService.findFirst(paymentFindFirstArgs);
  }

  async updateOne(paymentUpdateOneArgs: Prisma.PaymentUpdateArgs) {
    return await this.paymentService.updateOne(paymentUpdateOneArgs);
  }

  async updateMany(paymentUpdateManyArgs: Prisma.PaymentUpdateManyArgs) {
    return await this.paymentService.updateMany(paymentUpdateManyArgs);
  }

  async delete(paymentDeleteArgs: Prisma.PaymentDeleteArgs) {
    return await this.paymentService.delete(paymentDeleteArgs);
  }

  async deleteMany(paymentDeleteManyArgs: Prisma.PaymentDeleteManyArgs) {
    return await this.paymentService.deleteMany(paymentDeleteManyArgs);
  }

  async aggregate(paymentAggregateArgs: Prisma.PaymentAggregateArgs) {
    return await this.paymentService.aggregate(paymentAggregateArgs);
  }

  async count(paymentCountArgs: Prisma.PaymentCountArgs) {
    return await this.paymentService.count(paymentCountArgs);
  }
}
