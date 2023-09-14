// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOwner,
  CreateManyOwnerArgs,
  CreateOneOwnerArgs,
  DeleteManyOwnerArgs,
  DeleteOneOwnerArgs,
  FindFirstOwnerArgs,
  FindManyOwnerArgs,
  FindUniqueOwnerArgs,
  Owner,
  OwnerAggregateArgs,
  UpdateManyOwnerArgs,
  UpdateOneOwnerArgs,
} from 'src/@generated';
import { OwnerController } from './owner.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OwnerSelect {
  select: Prisma.OwnerSelect;
}

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerController: OwnerController) {}

  @Mutation(() => Owner, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async ownerCreateOne(
    @Args()
    ownerCreateArgs: CreateOneOwnerArgs,
    @Relations() relations: OwnerSelect,
  ): Promise<Owner | void> {
    return await this.ownerController.createOne({
      ...ownerCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async ownerCreateMany(
    @Args()
    createManyOwnerArgs: CreateManyOwnerArgs,
  ) {
    return await this.ownerController.createMany(createManyOwnerArgs);
  }

  @Query(() => Owner, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  ownerFindOne(
    @Args()
    ownerFindUniqueArgs: FindUniqueOwnerArgs,
    @Relations() relations: OwnerSelect,
  ): Promise<Owner | void> {
    return this.ownerController.findOne({
      ...ownerFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Owner], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  ownerFindMany(
    @Args() ownerFindManyArgs: FindManyOwnerArgs,
    @Relations() relations: OwnerSelect,
  ) {
    return this.ownerController.findMany({
      ...ownerFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Owner, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  ownerFindFirst(
    @Args()
    findFirstOwnerArgs: FindFirstOwnerArgs,
    @Relations() relations: OwnerSelect,
  ): Promise<Owner | void> {
    return this.ownerController.findFirst({
      ...findFirstOwnerArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Owner, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async ownerUpdateOne(
    @Args() ownerUpdateOneArgs: UpdateOneOwnerArgs,
    @Relations() relations: OwnerSelect,
  ) {
    return this.ownerController.updateOne({
      ...replaceNullWithUndefined(ownerUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Owner, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async ownerUpdateMany(@Args() updateManyOwnerArgs: UpdateManyOwnerArgs) {
    return this.ownerController.updateMany(updateManyOwnerArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async ownerDelete(
    @Args() deleteOneOwnerArgs: DeleteOneOwnerArgs,
    @Relations() relations: OwnerSelect,
  ) {
    return this.ownerController.delete({
      ...deleteOneOwnerArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async ownerDeleteMany(@Args() deleteManyOwnerArgs: DeleteManyOwnerArgs) {
    return this.ownerController.deleteMany(deleteManyOwnerArgs);
  }

  @Query(() => AggregateOwner, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  ownerAggregate(@Args() ownerAggregateArgs: OwnerAggregateArgs) {
    return this.ownerController.aggregate(ownerAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  ownerCount(@Args() ownerCountAggregateInput: FindManyOwnerArgs) {
    return this.ownerController.count(ownerCountAggregateInput);
  }
}
