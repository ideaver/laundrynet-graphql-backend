// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDelivery,
  CreateManyDeliveryArgs,
  CreateOneDeliveryArgs,
  DeleteManyDeliveryArgs,
  DeleteOneDeliveryArgs,
  FindFirstDeliveryArgs,
  FindManyDeliveryArgs,
  FindUniqueDeliveryArgs,
  Delivery,
  DeliveryAggregateArgs,
  UpdateManyDeliveryArgs,
  UpdateOneDeliveryArgs,
} from 'src/@generated';
import { DeliveryController } from './delivery.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DeliverySelect {
  select: Prisma.DeliverySelect;
}

@Resolver(() => Delivery)
export class DeliveryResolver {
  constructor(private readonly deliveryController: DeliveryController) {}

  @Mutation(() => Delivery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryCreateOne(
    @Args()
    deliveryCreateArgs: CreateOneDeliveryArgs,
    @Relations() relations: DeliverySelect,
  ): Promise<Delivery | void> {
    return await this.deliveryController.createOne({
      ...deliveryCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryCreateMany(
    @Args()
    createManyDeliveryArgs: CreateManyDeliveryArgs,
  ) {
    return await this.deliveryController.createMany(createManyDeliveryArgs);
  }

  @Query(() => Delivery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryFindOne(
    @Args()
    deliveryFindUniqueArgs: FindUniqueDeliveryArgs,
    @Relations() relations: DeliverySelect,
  ): Promise<Delivery | void> {
    return this.deliveryController.findOne({
      ...deliveryFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Delivery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryFindMany(
    @Args() deliveryFindManyArgs: FindManyDeliveryArgs,
    @Relations() relations: DeliverySelect,
  ) {
    return this.deliveryController.findMany({
      ...deliveryFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Delivery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryFindFirst(
    @Args()
    findFirstDeliveryArgs: FindFirstDeliveryArgs,
    @Relations() relations: DeliverySelect,
  ): Promise<Delivery | void> {
    return this.deliveryController.findFirst({
      ...findFirstDeliveryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Delivery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryUpdateOne(
    @Args() deliveryUpdateOneArgs: UpdateOneDeliveryArgs,
    @Relations() relations: DeliverySelect,
  ) {
    return this.deliveryController.updateOne({
      ...replaceNullWithUndefined(deliveryUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Delivery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryUpdateMany(@Args() updateManyDeliveryArgs: UpdateManyDeliveryArgs) {
    return this.deliveryController.updateMany(updateManyDeliveryArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryDelete(
    @Args() deleteOneDeliveryArgs: DeleteOneDeliveryArgs,
    @Relations() relations: DeliverySelect,
  ) {
    return this.deliveryController.delete({
      ...deleteOneDeliveryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async deliveryDeleteMany(@Args() deleteManyDeliveryArgs: DeleteManyDeliveryArgs) {
    return this.deliveryController.deleteMany(deleteManyDeliveryArgs);
  }

  @Query(() => AggregateDelivery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryAggregate(@Args() deliveryAggregateArgs: DeliveryAggregateArgs) {
    return this.deliveryController.aggregate(deliveryAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  deliveryCount(@Args() deliveryCountAggregateInput: FindManyDeliveryArgs) {
    return this.deliveryController.count(deliveryCountAggregateInput);
  }
}
