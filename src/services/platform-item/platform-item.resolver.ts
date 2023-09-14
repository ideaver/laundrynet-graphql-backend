// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePlatformItem,
  CreateManyPlatformItemArgs,
  CreateOnePlatformItemArgs,
  DeleteManyPlatformItemArgs,
  DeleteOnePlatformItemArgs,
  FindFirstPlatformItemArgs,
  FindManyPlatformItemArgs,
  FindUniquePlatformItemArgs,
  PlatformItem,
  PlatformItemAggregateArgs,
  UpdateManyPlatformItemArgs,
  UpdateOnePlatformItemArgs,
} from 'src/@generated';
import { PlatformItemController } from './platform-item.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PlatformItemSelect {
  select: Prisma.PlatformItemSelect;
}

@Resolver(() => PlatformItem)
export class PlatformItemResolver {
  constructor(private readonly platformItemController: PlatformItemController) {}

  @Mutation(() => PlatformItem, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async platformItemCreateOne(
    @Args()
    platformItemCreateArgs: CreateOnePlatformItemArgs,
    @Relations() relations: PlatformItemSelect,
  ): Promise<PlatformItem | void> {
    return await this.platformItemController.createOne({
      ...platformItemCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async platformItemCreateMany(
    @Args()
    createManyPlatformItemArgs: CreateManyPlatformItemArgs,
  ) {
    return await this.platformItemController.createMany(createManyPlatformItemArgs);
  }

  @Query(() => PlatformItem, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  platformItemFindOne(
    @Args()
    platformItemFindUniqueArgs: FindUniquePlatformItemArgs,
    @Relations() relations: PlatformItemSelect,
  ): Promise<PlatformItem | void> {
    return this.platformItemController.findOne({
      ...platformItemFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [PlatformItem], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  platformItemFindMany(
    @Args() platformItemFindManyArgs: FindManyPlatformItemArgs,
    @Relations() relations: PlatformItemSelect,
  ) {
    return this.platformItemController.findMany({
      ...platformItemFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => PlatformItem, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  platformItemFindFirst(
    @Args()
    findFirstPlatformItemArgs: FindFirstPlatformItemArgs,
    @Relations() relations: PlatformItemSelect,
  ): Promise<PlatformItem | void> {
    return this.platformItemController.findFirst({
      ...findFirstPlatformItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => PlatformItem, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async platformItemUpdateOne(
    @Args() platformItemUpdateOneArgs: UpdateOnePlatformItemArgs,
    @Relations() relations: PlatformItemSelect,
  ) {
    return this.platformItemController.updateOne({
      ...replaceNullWithUndefined(platformItemUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => PlatformItem, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async platformItemUpdateMany(@Args() updateManyPlatformItemArgs: UpdateManyPlatformItemArgs) {
    return this.platformItemController.updateMany(updateManyPlatformItemArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async platformItemDelete(
    @Args() deleteOnePlatformItemArgs: DeleteOnePlatformItemArgs,
    @Relations() relations: PlatformItemSelect,
  ) {
    return this.platformItemController.delete({
      ...deleteOnePlatformItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async platformItemDeleteMany(@Args() deleteManyPlatformItemArgs: DeleteManyPlatformItemArgs) {
    return this.platformItemController.deleteMany(deleteManyPlatformItemArgs);
  }

  @Query(() => AggregatePlatformItem, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  platformItemAggregate(@Args() platformItemAggregateArgs: PlatformItemAggregateArgs) {
    return this.platformItemController.aggregate(platformItemAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  platformItemCount(@Args() platformItemCountAggregateInput: FindManyPlatformItemArgs) {
    return this.platformItemController.count(platformItemCountAggregateInput);
  }
}
