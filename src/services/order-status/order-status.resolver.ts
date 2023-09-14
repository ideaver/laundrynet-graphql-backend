// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOrderStatus,
  CreateManyOrderStatusArgs,
  CreateOneOrderStatusArgs,
  DeleteManyOrderStatusArgs,
  DeleteOneOrderStatusArgs,
  FindFirstOrderStatusArgs,
  FindManyOrderStatusArgs,
  FindUniqueOrderStatusArgs,
  OrderStatus,
  OrderStatusAggregateArgs,
  UpdateManyOrderStatusArgs,
  UpdateOneOrderStatusArgs,
} from 'src/@generated';
import { OrderStatusController } from './orderStatus.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OrderStatusSelect {
  select: Prisma.OrderStatusSelect;
}

@Resolver(() => OrderStatus)
export class OrderStatusResolver {
  constructor(private readonly orderStatusController: OrderStatusController) {}

  @Mutation(() => OrderStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderStatusCreateOne(
    @Args()
    orderStatusCreateArgs: CreateOneOrderStatusArgs,
    @Relations() relations: OrderStatusSelect,
  ): Promise<OrderStatus | void> {
    return await this.orderStatusController.createOne({
      ...orderStatusCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderStatusCreateMany(
    @Args()
    createManyOrderStatusArgs: CreateManyOrderStatusArgs,
  ) {
    return await this.orderStatusController.createMany(createManyOrderStatusArgs);
  }

  @Query(() => OrderStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderStatusFindOne(
    @Args()
    orderStatusFindUniqueArgs: FindUniqueOrderStatusArgs,
    @Relations() relations: OrderStatusSelect,
  ): Promise<OrderStatus | void> {
    return this.orderStatusController.findOne({
      ...orderStatusFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [OrderStatus], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderStatusFindMany(
    @Args() orderStatusFindManyArgs: FindManyOrderStatusArgs,
    @Relations() relations: OrderStatusSelect,
  ) {
    return this.orderStatusController.findMany({
      ...orderStatusFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => OrderStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderStatusFindFirst(
    @Args()
    findFirstOrderStatusArgs: FindFirstOrderStatusArgs,
    @Relations() relations: OrderStatusSelect,
  ): Promise<OrderStatus | void> {
    return this.orderStatusController.findFirst({
      ...findFirstOrderStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => OrderStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderStatusUpdateOne(
    @Args() orderStatusUpdateOneArgs: UpdateOneOrderStatusArgs,
    @Relations() relations: OrderStatusSelect,
  ) {
    return this.orderStatusController.updateOne({
      ...replaceNullWithUndefined(orderStatusUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => OrderStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderStatusUpdateMany(@Args() updateManyOrderStatusArgs: UpdateManyOrderStatusArgs) {
    return this.orderStatusController.updateMany(updateManyOrderStatusArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async orderStatusDelete(
    @Args() deleteOneOrderStatusArgs: DeleteOneOrderStatusArgs,
    @Relations() relations: OrderStatusSelect,
  ) {
    return this.orderStatusController.delete({
      ...deleteOneOrderStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async orderStatusDeleteMany(@Args() deleteManyOrderStatusArgs: DeleteManyOrderStatusArgs) {
    return this.orderStatusController.deleteMany(deleteManyOrderStatusArgs);
  }

  @Query(() => AggregateOrderStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderStatusAggregate(@Args() orderStatusAggregateArgs: OrderStatusAggregateArgs) {
    return this.orderStatusController.aggregate(orderStatusAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderStatusCount(@Args() orderStatusCountAggregateInput: FindManyOrderStatusArgs) {
    return this.orderStatusController.count(orderStatusCountAggregateInput);
  }
}
