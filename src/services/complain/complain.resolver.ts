// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateComplain,
  CreateManyComplainArgs,
  CreateOneComplainArgs,
  DeleteManyComplainArgs,
  DeleteOneComplainArgs,
  FindFirstComplainArgs,
  FindManyComplainArgs,
  FindUniqueComplainArgs,
  Complain,
  ComplainAggregateArgs,
  UpdateManyComplainArgs,
  UpdateOneComplainArgs,
} from 'src/@generated';
import { ComplainController } from './complain.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ComplainSelect {
  select: Prisma.ComplainSelect;
}

@Resolver(() => Complain)
export class ComplainResolver {
  constructor(private readonly complainController: ComplainController) {}

  @Mutation(() => Complain, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async complainCreateOne(
    @Args()
    complainCreateArgs: CreateOneComplainArgs,
    @Relations() relations: ComplainSelect,
  ): Promise<Complain | void> {
    return await this.complainController.createOne({
      ...complainCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async complainCreateMany(
    @Args()
    createManyComplainArgs: CreateManyComplainArgs,
  ) {
    return await this.complainController.createMany(createManyComplainArgs);
  }

  @Query(() => Complain, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  complainFindOne(
    @Args()
    complainFindUniqueArgs: FindUniqueComplainArgs,
    @Relations() relations: ComplainSelect,
  ): Promise<Complain | void> {
    return this.complainController.findOne({
      ...complainFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Complain], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  complainFindMany(
    @Args() complainFindManyArgs: FindManyComplainArgs,
    @Relations() relations: ComplainSelect,
  ) {
    return this.complainController.findMany({
      ...complainFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Complain, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  complainFindFirst(
    @Args()
    findFirstComplainArgs: FindFirstComplainArgs,
    @Relations() relations: ComplainSelect,
  ): Promise<Complain | void> {
    return this.complainController.findFirst({
      ...findFirstComplainArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Complain, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async complainUpdateOne(
    @Args() complainUpdateOneArgs: UpdateOneComplainArgs,
    @Relations() relations: ComplainSelect,
  ) {
    return this.complainController.updateOne({
      ...replaceNullWithUndefined(complainUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Complain, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async complainUpdateMany(@Args() updateManyComplainArgs: UpdateManyComplainArgs) {
    return this.complainController.updateMany(updateManyComplainArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async complainDelete(
    @Args() deleteOneComplainArgs: DeleteOneComplainArgs,
    @Relations() relations: ComplainSelect,
  ) {
    return this.complainController.delete({
      ...deleteOneComplainArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async complainDeleteMany(@Args() deleteManyComplainArgs: DeleteManyComplainArgs) {
    return this.complainController.deleteMany(deleteManyComplainArgs);
  }

  @Query(() => AggregateComplain, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  complainAggregate(@Args() complainAggregateArgs: ComplainAggregateArgs) {
    return this.complainController.aggregate(complainAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  complainCount(@Args() complainCountAggregateInput: FindManyComplainArgs) {
    return this.complainController.count(complainCountAggregateInput);
  }
}
