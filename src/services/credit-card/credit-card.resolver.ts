// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateCreditCard,
  CreateManyCreditCardArgs,
  CreateOneCreditCardArgs,
  DeleteManyCreditCardArgs,
  DeleteOneCreditCardArgs,
  FindFirstCreditCardArgs,
  FindManyCreditCardArgs,
  FindUniqueCreditCardArgs,
  CreditCard,
  CreditCardAggregateArgs,
  UpdateManyCreditCardArgs,
  UpdateOneCreditCardArgs,
} from 'src/@generated';
import { CreditCardController } from './credit-card.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface CreditCardSelect {
  select: Prisma.CreditCardSelect;
}

@Resolver(() => CreditCard)
export class CreditCardResolver {
  constructor(private readonly creditCardController: CreditCardController) {}

  @Mutation(() => CreditCard, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async creditCardCreateOne(
    @Args()
    creditCardCreateArgs: CreateOneCreditCardArgs,
    @Relations() relations: CreditCardSelect,
  ): Promise<CreditCard | void> {
    return await this.creditCardController.createOne({
      ...creditCardCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async creditCardCreateMany(
    @Args()
    createManyCreditCardArgs: CreateManyCreditCardArgs,
  ) {
    return await this.creditCardController.createMany(createManyCreditCardArgs);
  }

  @Query(() => CreditCard, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  creditCardFindOne(
    @Args()
    creditCardFindUniqueArgs: FindUniqueCreditCardArgs,
    @Relations() relations: CreditCardSelect,
  ): Promise<CreditCard | void> {
    return this.creditCardController.findOne({
      ...creditCardFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [CreditCard], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  creditCardFindMany(
    @Args() creditCardFindManyArgs: FindManyCreditCardArgs,
    @Relations() relations: CreditCardSelect,
  ) {
    return this.creditCardController.findMany({
      ...creditCardFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => CreditCard, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  creditCardFindFirst(
    @Args()
    findFirstCreditCardArgs: FindFirstCreditCardArgs,
    @Relations() relations: CreditCardSelect,
  ): Promise<CreditCard | void> {
    return this.creditCardController.findFirst({
      ...findFirstCreditCardArgs,
      select: relations.select,
    });
  }

  @Mutation(() => CreditCard, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async creditCardUpdateOne(
    @Args() creditCardUpdateOneArgs: UpdateOneCreditCardArgs,
    @Relations() relations: CreditCardSelect,
  ) {
    return this.creditCardController.updateOne({
      ...replaceNullWithUndefined(creditCardUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => CreditCard, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async creditCardUpdateMany(@Args() updateManyCreditCardArgs: UpdateManyCreditCardArgs) {
    return this.creditCardController.updateMany(updateManyCreditCardArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async creditCardDelete(
    @Args() deleteOneCreditCardArgs: DeleteOneCreditCardArgs,
    @Relations() relations: CreditCardSelect,
  ) {
    return this.creditCardController.delete({
      ...deleteOneCreditCardArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async creditCardDeleteMany(@Args() deleteManyCreditCardArgs: DeleteManyCreditCardArgs) {
    return this.creditCardController.deleteMany(deleteManyCreditCardArgs);
  }

  @Query(() => AggregateCreditCard, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  creditCardAggregate(@Args() creditCardAggregateArgs: CreditCardAggregateArgs) {
    return this.creditCardController.aggregate(creditCardAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  creditCardCount(@Args() creditCardCountAggregateInput: FindManyCreditCardArgs) {
    return this.creditCardController.count(creditCardCountAggregateInput);
  }
}
