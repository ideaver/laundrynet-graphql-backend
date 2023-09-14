// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateTermOrFaq,
  CreateManyTermOrFaqArgs,
  CreateOneTermOrFaqArgs,
  DeleteManyTermOrFaqArgs,
  DeleteOneTermOrFaqArgs,
  FindFirstTermOrFaqArgs,
  FindManyTermOrFaqArgs,
  FindUniqueTermOrFaqArgs,
  TermOrFaq,
  TermOrFaqAggregateArgs,
  UpdateManyTermOrFaqArgs,
  UpdateOneTermOrFaqArgs,
} from 'src/@generated';
import { TermOrFaqController } from './termOrFaq.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface TermOrFaqSelect {
  select: Prisma.TermOrFaqSelect;
}

@Resolver(() => TermOrFaq)
export class TermOrFaqResolver {
  constructor(private readonly termOrFaqController: TermOrFaqController) {}

  @Mutation(() => TermOrFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async termOrFaqCreateOne(
    @Args()
    termOrFaqCreateArgs: CreateOneTermOrFaqArgs,
    @Relations() relations: TermOrFaqSelect,
  ): Promise<TermOrFaq | void> {
    return await this.termOrFaqController.createOne({
      ...termOrFaqCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async termOrFaqCreateMany(
    @Args()
    createManyTermOrFaqArgs: CreateManyTermOrFaqArgs,
  ) {
    return await this.termOrFaqController.createMany(createManyTermOrFaqArgs);
  }

  @Query(() => TermOrFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  termOrFaqFindOne(
    @Args()
    termOrFaqFindUniqueArgs: FindUniqueTermOrFaqArgs,
    @Relations() relations: TermOrFaqSelect,
  ): Promise<TermOrFaq | void> {
    return this.termOrFaqController.findOne({
      ...termOrFaqFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [TermOrFaq], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  termOrFaqFindMany(
    @Args() termOrFaqFindManyArgs: FindManyTermOrFaqArgs,
    @Relations() relations: TermOrFaqSelect,
  ) {
    return this.termOrFaqController.findMany({
      ...termOrFaqFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => TermOrFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  termOrFaqFindFirst(
    @Args()
    findFirstTermOrFaqArgs: FindFirstTermOrFaqArgs,
    @Relations() relations: TermOrFaqSelect,
  ): Promise<TermOrFaq | void> {
    return this.termOrFaqController.findFirst({
      ...findFirstTermOrFaqArgs,
      select: relations.select,
    });
  }

  @Mutation(() => TermOrFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async termOrFaqUpdateOne(
    @Args() termOrFaqUpdateOneArgs: UpdateOneTermOrFaqArgs,
    @Relations() relations: TermOrFaqSelect,
  ) {
    return this.termOrFaqController.updateOne({
      ...replaceNullWithUndefined(termOrFaqUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => TermOrFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async termOrFaqUpdateMany(@Args() updateManyTermOrFaqArgs: UpdateManyTermOrFaqArgs) {
    return this.termOrFaqController.updateMany(updateManyTermOrFaqArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async termOrFaqDelete(
    @Args() deleteOneTermOrFaqArgs: DeleteOneTermOrFaqArgs,
    @Relations() relations: TermOrFaqSelect,
  ) {
    return this.termOrFaqController.delete({
      ...deleteOneTermOrFaqArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async termOrFaqDeleteMany(@Args() deleteManyTermOrFaqArgs: DeleteManyTermOrFaqArgs) {
    return this.termOrFaqController.deleteMany(deleteManyTermOrFaqArgs);
  }

  @Query(() => AggregateTermOrFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  termOrFaqAggregate(@Args() termOrFaqAggregateArgs: TermOrFaqAggregateArgs) {
    return this.termOrFaqController.aggregate(termOrFaqAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  termOrFaqCount(@Args() termOrFaqCountAggregateInput: FindManyTermOrFaqArgs) {
    return this.termOrFaqController.count(termOrFaqCountAggregateInput);
  }
}
