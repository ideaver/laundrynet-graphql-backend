// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateLaundryItemRequest,
  CreateManyLaundryItemRequestArgs,
  CreateOneLaundryItemRequestArgs,
  DeleteManyLaundryItemRequestArgs,
  DeleteOneLaundryItemRequestArgs,
  FindFirstLaundryItemRequestArgs,
  FindManyLaundryItemRequestArgs,
  FindUniqueLaundryItemRequestArgs,
  LaundryItemRequest,
  LaundryItemRequestAggregateArgs,
  UpdateManyLaundryItemRequestArgs,
  UpdateOneLaundryItemRequestArgs,
} from 'src/@generated';
import { LaundryItemRequestController } from './laundryItemRequest.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface LaundryItemRequestSelect {
  select: Prisma.LaundryItemRequestSelect;
}

@Resolver(() => LaundryItemRequest)
export class LaundryItemRequestResolver {
  constructor(private readonly laundryItemRequestController: LaundryItemRequestController) {}

  @Mutation(() => LaundryItemRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemRequestCreateOne(
    @Args()
    laundryItemRequestCreateArgs: CreateOneLaundryItemRequestArgs,
    @Relations() relations: LaundryItemRequestSelect,
  ): Promise<LaundryItemRequest | void> {
    return await this.laundryItemRequestController.createOne({
      ...laundryItemRequestCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemRequestCreateMany(
    @Args()
    createManyLaundryItemRequestArgs: CreateManyLaundryItemRequestArgs,
  ) {
    return await this.laundryItemRequestController.createMany(createManyLaundryItemRequestArgs);
  }

  @Query(() => LaundryItemRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemRequestFindOne(
    @Args()
    laundryItemRequestFindUniqueArgs: FindUniqueLaundryItemRequestArgs,
    @Relations() relations: LaundryItemRequestSelect,
  ): Promise<LaundryItemRequest | void> {
    return this.laundryItemRequestController.findOne({
      ...laundryItemRequestFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [LaundryItemRequest], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemRequestFindMany(
    @Args() laundryItemRequestFindManyArgs: FindManyLaundryItemRequestArgs,
    @Relations() relations: LaundryItemRequestSelect,
  ) {
    return this.laundryItemRequestController.findMany({
      ...laundryItemRequestFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => LaundryItemRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemRequestFindFirst(
    @Args()
    findFirstLaundryItemRequestArgs: FindFirstLaundryItemRequestArgs,
    @Relations() relations: LaundryItemRequestSelect,
  ): Promise<LaundryItemRequest | void> {
    return this.laundryItemRequestController.findFirst({
      ...findFirstLaundryItemRequestArgs,
      select: relations.select,
    });
  }

  @Mutation(() => LaundryItemRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemRequestUpdateOne(
    @Args() laundryItemRequestUpdateOneArgs: UpdateOneLaundryItemRequestArgs,
    @Relations() relations: LaundryItemRequestSelect,
  ) {
    return this.laundryItemRequestController.updateOne({
      ...replaceNullWithUndefined(laundryItemRequestUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => LaundryItemRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemRequestUpdateMany(@Args() updateManyLaundryItemRequestArgs: UpdateManyLaundryItemRequestArgs) {
    return this.laundryItemRequestController.updateMany(updateManyLaundryItemRequestArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemRequestDelete(
    @Args() deleteOneLaundryItemRequestArgs: DeleteOneLaundryItemRequestArgs,
    @Relations() relations: LaundryItemRequestSelect,
  ) {
    return this.laundryItemRequestController.delete({
      ...deleteOneLaundryItemRequestArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemRequestDeleteMany(@Args() deleteManyLaundryItemRequestArgs: DeleteManyLaundryItemRequestArgs) {
    return this.laundryItemRequestController.deleteMany(deleteManyLaundryItemRequestArgs);
  }

  @Query(() => AggregateLaundryItemRequest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemRequestAggregate(@Args() laundryItemRequestAggregateArgs: LaundryItemRequestAggregateArgs) {
    return this.laundryItemRequestController.aggregate(laundryItemRequestAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemRequestCount(@Args() laundryItemRequestCountAggregateInput: FindManyLaundryItemRequestArgs) {
    return this.laundryItemRequestController.count(laundryItemRequestCountAggregateInput);
  }
}
