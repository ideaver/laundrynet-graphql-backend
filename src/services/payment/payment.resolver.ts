// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePayment,
  CreateManyPaymentArgs,
  CreateOnePaymentArgs,
  DeleteManyPaymentArgs,
  DeleteOnePaymentArgs,
  FindFirstPaymentArgs,
  FindManyPaymentArgs,
  FindUniquePaymentArgs,
  Payment,
  PaymentAggregateArgs,
  UpdateManyPaymentArgs,
  UpdateOnePaymentArgs,
} from 'src/@generated';
import { PaymentController } from './payment.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PaymentSelect {
  select: Prisma.PaymentSelect;
}

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentController: PaymentController) {}

  @Mutation(() => Payment, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async paymentCreateOne(
    @Args()
    paymentCreateArgs: CreateOnePaymentArgs,
    @Relations() relations: PaymentSelect,
  ): Promise<Payment | void> {
    return await this.paymentController.createOne({
      ...paymentCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async paymentCreateMany(
    @Args()
    createManyPaymentArgs: CreateManyPaymentArgs,
  ) {
    return await this.paymentController.createMany(createManyPaymentArgs);
  }

  @Query(() => Payment, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  paymentFindOne(
    @Args()
    paymentFindUniqueArgs: FindUniquePaymentArgs,
    @Relations() relations: PaymentSelect,
  ): Promise<Payment | void> {
    return this.paymentController.findOne({
      ...paymentFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Payment], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  paymentFindMany(
    @Args() paymentFindManyArgs: FindManyPaymentArgs,
    @Relations() relations: PaymentSelect,
  ) {
    return this.paymentController.findMany({
      ...paymentFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Payment, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  paymentFindFirst(
    @Args()
    findFirstPaymentArgs: FindFirstPaymentArgs,
    @Relations() relations: PaymentSelect,
  ): Promise<Payment | void> {
    return this.paymentController.findFirst({
      ...findFirstPaymentArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Payment, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async paymentUpdateOne(
    @Args() paymentUpdateOneArgs: UpdateOnePaymentArgs,
    @Relations() relations: PaymentSelect,
  ) {
    return this.paymentController.updateOne({
      ...replaceNullWithUndefined(paymentUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Payment, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async paymentUpdateMany(@Args() updateManyPaymentArgs: UpdateManyPaymentArgs) {
    return this.paymentController.updateMany(updateManyPaymentArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async paymentDelete(
    @Args() deleteOnePaymentArgs: DeleteOnePaymentArgs,
    @Relations() relations: PaymentSelect,
  ) {
    return this.paymentController.delete({
      ...deleteOnePaymentArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async paymentDeleteMany(@Args() deleteManyPaymentArgs: DeleteManyPaymentArgs) {
    return this.paymentController.deleteMany(deleteManyPaymentArgs);
  }

  @Query(() => AggregatePayment, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  paymentAggregate(@Args() paymentAggregateArgs: PaymentAggregateArgs) {
    return this.paymentController.aggregate(paymentAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  paymentCount(@Args() paymentCountAggregateInput: FindManyPaymentArgs) {
    return this.paymentController.count(paymentCountAggregateInput);
  }
}
