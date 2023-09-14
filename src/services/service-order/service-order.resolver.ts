// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateServiceOrder,
  CreateManyServiceOrderArgs,
  CreateOneServiceOrderArgs,
  DeleteManyServiceOrderArgs,
  DeleteOneServiceOrderArgs,
  FindFirstServiceOrderArgs,
  FindManyServiceOrderArgs,
  FindUniqueServiceOrderArgs,
  ServiceOrder,
  ServiceOrderAggregateArgs,
  UpdateManyServiceOrderArgs,
  UpdateOneServiceOrderArgs,
} from 'src/@generated';
import { ServiceOrderController } from './service-order.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ServiceOrderSelect {
  select: Prisma.ServiceOrderSelect;
}

@Resolver(() => ServiceOrder)
export class ServiceOrderResolver {
  constructor(private readonly serviceOrderController: ServiceOrderController) {}

  @Mutation(() => ServiceOrder, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async serviceOrderCreateOne(
    @Args()
    serviceOrderCreateArgs: CreateOneServiceOrderArgs,
    @Relations() relations: ServiceOrderSelect,
  ): Promise<ServiceOrder | void> {
    return await this.serviceOrderController.createOne({
      ...serviceOrderCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async serviceOrderCreateMany(
    @Args()
    createManyServiceOrderArgs: CreateManyServiceOrderArgs,
  ) {
    return await this.serviceOrderController.createMany(createManyServiceOrderArgs);
  }

  @Query(() => ServiceOrder, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  serviceOrderFindOne(
    @Args()
    serviceOrderFindUniqueArgs: FindUniqueServiceOrderArgs,
    @Relations() relations: ServiceOrderSelect,
  ): Promise<ServiceOrder | void> {
    return this.serviceOrderController.findOne({
      ...serviceOrderFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [ServiceOrder], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  serviceOrderFindMany(
    @Args() serviceOrderFindManyArgs: FindManyServiceOrderArgs,
    @Relations() relations: ServiceOrderSelect,
  ) {
    return this.serviceOrderController.findMany({
      ...serviceOrderFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => ServiceOrder, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  serviceOrderFindFirst(
    @Args()
    findFirstServiceOrderArgs: FindFirstServiceOrderArgs,
    @Relations() relations: ServiceOrderSelect,
  ): Promise<ServiceOrder | void> {
    return this.serviceOrderController.findFirst({
      ...findFirstServiceOrderArgs,
      select: relations.select,
    });
  }

  @Mutation(() => ServiceOrder, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async serviceOrderUpdateOne(
    @Args() serviceOrderUpdateOneArgs: UpdateOneServiceOrderArgs,
    @Relations() relations: ServiceOrderSelect,
  ) {
    return this.serviceOrderController.updateOne({
      ...replaceNullWithUndefined(serviceOrderUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => ServiceOrder, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async serviceOrderUpdateMany(@Args() updateManyServiceOrderArgs: UpdateManyServiceOrderArgs) {
    return this.serviceOrderController.updateMany(updateManyServiceOrderArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async serviceOrderDelete(
    @Args() deleteOneServiceOrderArgs: DeleteOneServiceOrderArgs,
    @Relations() relations: ServiceOrderSelect,
  ) {
    return this.serviceOrderController.delete({
      ...deleteOneServiceOrderArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async serviceOrderDeleteMany(@Args() deleteManyServiceOrderArgs: DeleteManyServiceOrderArgs) {
    return this.serviceOrderController.deleteMany(deleteManyServiceOrderArgs);
  }

  @Query(() => AggregateServiceOrder, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  serviceOrderAggregate(@Args() serviceOrderAggregateArgs: ServiceOrderAggregateArgs) {
    return this.serviceOrderController.aggregate(serviceOrderAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  serviceOrderCount(@Args() serviceOrderCountAggregateInput: FindManyServiceOrderArgs) {
    return this.serviceOrderController.count(serviceOrderCountAggregateInput);
  }
}
