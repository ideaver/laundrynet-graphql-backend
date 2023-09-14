// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDeliveryStatus,
  CreateManyDeliveryStatusArgs,
  CreateOneDeliveryStatusArgs,
  DeleteManyDeliveryStatusArgs,
  DeleteOneDeliveryStatusArgs,
  FindFirstDeliveryStatusArgs,
  FindManyDeliveryStatusArgs,
  FindUniqueDeliveryStatusArgs,
  DeliveryStatus,
  DeliveryStatusAggregateArgs,
  UpdateManyDeliveryStatusArgs,
  UpdateOneDeliveryStatusArgs,
} from 'src/@generated';
import { DeliveryStatusController } from './deliveryStatus.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DeliveryStatusSelect {
  select: Prisma.DeliveryStatusSelect;
}

@Resolver(() => DeliveryStatus)
export class DeliveryStatusResolver {
  constructor(private readonly deliveryStatusController: DeliveryStatusController) {}

  @Mutation(() => DeliveryStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryStatusCreateOne(
    @Args()
    deliveryStatusCreateArgs: CreateOneDeliveryStatusArgs,
    @Relations() relations: DeliveryStatusSelect,
  ): Promise<DeliveryStatus | void> {
    return await this.deliveryStatusController.createOne({
      ...deliveryStatusCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryStatusCreateMany(
    @Args()
    createManyDeliveryStatusArgs: CreateManyDeliveryStatusArgs,
  ) {
    return await this.deliveryStatusController.createMany(createManyDeliveryStatusArgs);
  }

  @Query(() => DeliveryStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryStatusFindOne(
    @Args()
    deliveryStatusFindUniqueArgs: FindUniqueDeliveryStatusArgs,
    @Relations() relations: DeliveryStatusSelect,
  ): Promise<DeliveryStatus | void> {
    return this.deliveryStatusController.findOne({
      ...deliveryStatusFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [DeliveryStatus], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryStatusFindMany(
    @Args() deliveryStatusFindManyArgs: FindManyDeliveryStatusArgs,
    @Relations() relations: DeliveryStatusSelect,
  ) {
    return this.deliveryStatusController.findMany({
      ...deliveryStatusFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => DeliveryStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryStatusFindFirst(
    @Args()
    findFirstDeliveryStatusArgs: FindFirstDeliveryStatusArgs,
    @Relations() relations: DeliveryStatusSelect,
  ): Promise<DeliveryStatus | void> {
    return this.deliveryStatusController.findFirst({
      ...findFirstDeliveryStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => DeliveryStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryStatusUpdateOne(
    @Args() deliveryStatusUpdateOneArgs: UpdateOneDeliveryStatusArgs,
    @Relations() relations: DeliveryStatusSelect,
  ) {
    return this.deliveryStatusController.updateOne({
      ...replaceNullWithUndefined(deliveryStatusUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => DeliveryStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryStatusUpdateMany(@Args() updateManyDeliveryStatusArgs: UpdateManyDeliveryStatusArgs) {
    return this.deliveryStatusController.updateMany(updateManyDeliveryStatusArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryStatusDelete(
    @Args() deleteOneDeliveryStatusArgs: DeleteOneDeliveryStatusArgs,
    @Relations() relations: DeliveryStatusSelect,
  ) {
    return this.deliveryStatusController.delete({
      ...deleteOneDeliveryStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryStatusDeleteMany(@Args() deleteManyDeliveryStatusArgs: DeleteManyDeliveryStatusArgs) {
    return this.deliveryStatusController.deleteMany(deleteManyDeliveryStatusArgs);
  }

  @Query(() => AggregateDeliveryStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryStatusAggregate(@Args() deliveryStatusAggregateArgs: DeliveryStatusAggregateArgs) {
    return this.deliveryStatusController.aggregate(deliveryStatusAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryStatusCount(@Args() deliveryStatusCountAggregateInput: FindManyDeliveryStatusArgs) {
    return this.deliveryStatusController.count(deliveryStatusCountAggregateInput);
  }
}
