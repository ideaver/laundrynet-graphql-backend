// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePlatformOrder,
  CreateManyPlatformOrderArgs,
  CreateOnePlatformOrderArgs,
  DeleteManyPlatformOrderArgs,
  DeleteOnePlatformOrderArgs,
  FindFirstPlatformOrderArgs,
  FindManyPlatformOrderArgs,
  FindUniquePlatformOrderArgs,
  PlatformOrder,
  PlatformOrderAggregateArgs,
  UpdateManyPlatformOrderArgs,
  UpdateOnePlatformOrderArgs,
} from 'src/@generated';
import { PlatformOrderController } from './platformOrder.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PlatformOrderSelect {
  select: Prisma.PlatformOrderSelect;
}

@Resolver(() => PlatformOrder)
export class PlatformOrderResolver {
  constructor(private readonly platformOrderController: PlatformOrderController) {}

  @Mutation(() => PlatformOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformOrderCreateOne(
    @Args()
    platformOrderCreateArgs: CreateOnePlatformOrderArgs,
    @Relations() relations: PlatformOrderSelect,
  ): Promise<PlatformOrder | void> {
    return await this.platformOrderController.createOne({
      ...platformOrderCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformOrderCreateMany(
    @Args()
    createManyPlatformOrderArgs: CreateManyPlatformOrderArgs,
  ) {
    return await this.platformOrderController.createMany(createManyPlatformOrderArgs);
  }

  @Query(() => PlatformOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformOrderFindOne(
    @Args()
    platformOrderFindUniqueArgs: FindUniquePlatformOrderArgs,
    @Relations() relations: PlatformOrderSelect,
  ): Promise<PlatformOrder | void> {
    return this.platformOrderController.findOne({
      ...platformOrderFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [PlatformOrder], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformOrderFindMany(
    @Args() platformOrderFindManyArgs: FindManyPlatformOrderArgs,
    @Relations() relations: PlatformOrderSelect,
  ) {
    return this.platformOrderController.findMany({
      ...platformOrderFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => PlatformOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformOrderFindFirst(
    @Args()
    findFirstPlatformOrderArgs: FindFirstPlatformOrderArgs,
    @Relations() relations: PlatformOrderSelect,
  ): Promise<PlatformOrder | void> {
    return this.platformOrderController.findFirst({
      ...findFirstPlatformOrderArgs,
      select: relations.select,
    });
  }

  @Mutation(() => PlatformOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformOrderUpdateOne(
    @Args() platformOrderUpdateOneArgs: UpdateOnePlatformOrderArgs,
    @Relations() relations: PlatformOrderSelect,
  ) {
    return this.platformOrderController.updateOne({
      ...replaceNullWithUndefined(platformOrderUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => PlatformOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformOrderUpdateMany(@Args() updateManyPlatformOrderArgs: UpdateManyPlatformOrderArgs) {
    return this.platformOrderController.updateMany(updateManyPlatformOrderArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async platformOrderDelete(
    @Args() deleteOnePlatformOrderArgs: DeleteOnePlatformOrderArgs,
    @Relations() relations: PlatformOrderSelect,
  ) {
    return this.platformOrderController.delete({
      ...deleteOnePlatformOrderArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async platformOrderDeleteMany(@Args() deleteManyPlatformOrderArgs: DeleteManyPlatformOrderArgs) {
    return this.platformOrderController.deleteMany(deleteManyPlatformOrderArgs);
  }

  @Query(() => AggregatePlatformOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformOrderAggregate(@Args() platformOrderAggregateArgs: PlatformOrderAggregateArgs) {
    return this.platformOrderController.aggregate(platformOrderAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformOrderCount(@Args() platformOrderCountAggregateInput: FindManyPlatformOrderArgs) {
    return this.platformOrderController.count(platformOrderCountAggregateInput);
  }
}
