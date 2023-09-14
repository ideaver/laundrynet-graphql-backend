// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDeliveryLocationHistory,
  CreateManyDeliveryLocationHistoryArgs,
  CreateOneDeliveryLocationHistoryArgs,
  DeleteManyDeliveryLocationHistoryArgs,
  DeleteOneDeliveryLocationHistoryArgs,
  FindFirstDeliveryLocationHistoryArgs,
  FindManyDeliveryLocationHistoryArgs,
  FindUniqueDeliveryLocationHistoryArgs,
  DeliveryLocationHistory,
  DeliveryLocationHistoryAggregateArgs,
  UpdateManyDeliveryLocationHistoryArgs,
  UpdateOneDeliveryLocationHistoryArgs,
} from 'src/@generated';
import { DeliveryLocationHistoryController } from './deliveryLocationHistory.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DeliveryLocationHistorySelect {
  select: Prisma.DeliveryLocationHistorySelect;
}

@Resolver(() => DeliveryLocationHistory)
export class DeliveryLocationHistoryResolver {
  constructor(private readonly deliveryLocationHistoryController: DeliveryLocationHistoryController) {}

  @Mutation(() => DeliveryLocationHistory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryLocationHistoryCreateOne(
    @Args()
    deliveryLocationHistoryCreateArgs: CreateOneDeliveryLocationHistoryArgs,
    @Relations() relations: DeliveryLocationHistorySelect,
  ): Promise<DeliveryLocationHistory | void> {
    return await this.deliveryLocationHistoryController.createOne({
      ...deliveryLocationHistoryCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryLocationHistoryCreateMany(
    @Args()
    createManyDeliveryLocationHistoryArgs: CreateManyDeliveryLocationHistoryArgs,
  ) {
    return await this.deliveryLocationHistoryController.createMany(createManyDeliveryLocationHistoryArgs);
  }

  @Query(() => DeliveryLocationHistory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryLocationHistoryFindOne(
    @Args()
    deliveryLocationHistoryFindUniqueArgs: FindUniqueDeliveryLocationHistoryArgs,
    @Relations() relations: DeliveryLocationHistorySelect,
  ): Promise<DeliveryLocationHistory | void> {
    return this.deliveryLocationHistoryController.findOne({
      ...deliveryLocationHistoryFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [DeliveryLocationHistory], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryLocationHistoryFindMany(
    @Args() deliveryLocationHistoryFindManyArgs: FindManyDeliveryLocationHistoryArgs,
    @Relations() relations: DeliveryLocationHistorySelect,
  ) {
    return this.deliveryLocationHistoryController.findMany({
      ...deliveryLocationHistoryFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => DeliveryLocationHistory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryLocationHistoryFindFirst(
    @Args()
    findFirstDeliveryLocationHistoryArgs: FindFirstDeliveryLocationHistoryArgs,
    @Relations() relations: DeliveryLocationHistorySelect,
  ): Promise<DeliveryLocationHistory | void> {
    return this.deliveryLocationHistoryController.findFirst({
      ...findFirstDeliveryLocationHistoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => DeliveryLocationHistory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryLocationHistoryUpdateOne(
    @Args() deliveryLocationHistoryUpdateOneArgs: UpdateOneDeliveryLocationHistoryArgs,
    @Relations() relations: DeliveryLocationHistorySelect,
  ) {
    return this.deliveryLocationHistoryController.updateOne({
      ...replaceNullWithUndefined(deliveryLocationHistoryUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => DeliveryLocationHistory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryLocationHistoryUpdateMany(@Args() updateManyDeliveryLocationHistoryArgs: UpdateManyDeliveryLocationHistoryArgs) {
    return this.deliveryLocationHistoryController.updateMany(updateManyDeliveryLocationHistoryArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryLocationHistoryDelete(
    @Args() deleteOneDeliveryLocationHistoryArgs: DeleteOneDeliveryLocationHistoryArgs,
    @Relations() relations: DeliveryLocationHistorySelect,
  ) {
    return this.deliveryLocationHistoryController.delete({
      ...deleteOneDeliveryLocationHistoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryLocationHistoryDeleteMany(@Args() deleteManyDeliveryLocationHistoryArgs: DeleteManyDeliveryLocationHistoryArgs) {
    return this.deliveryLocationHistoryController.deleteMany(deleteManyDeliveryLocationHistoryArgs);
  }

  @Query(() => AggregateDeliveryLocationHistory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryLocationHistoryAggregate(@Args() deliveryLocationHistoryAggregateArgs: DeliveryLocationHistoryAggregateArgs) {
    return this.deliveryLocationHistoryController.aggregate(deliveryLocationHistoryAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryLocationHistoryCount(@Args() deliveryLocationHistoryCountAggregateInput: FindManyDeliveryLocationHistoryArgs) {
    return this.deliveryLocationHistoryController.count(deliveryLocationHistoryCountAggregateInput);
  }
}
