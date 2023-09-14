// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateLaundryItem,
  CreateManyLaundryItemArgs,
  CreateOneLaundryItemArgs,
  DeleteManyLaundryItemArgs,
  DeleteOneLaundryItemArgs,
  FindFirstLaundryItemArgs,
  FindManyLaundryItemArgs,
  FindUniqueLaundryItemArgs,
  LaundryItem,
  LaundryItemAggregateArgs,
  UpdateManyLaundryItemArgs,
  UpdateOneLaundryItemArgs,
} from 'src/@generated';
import { LaundryItemController } from './laundryItem.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface LaundryItemSelect {
  select: Prisma.LaundryItemSelect;
}

@Resolver(() => LaundryItem)
export class LaundryItemResolver {
  constructor(private readonly laundryItemController: LaundryItemController) {}

  @Mutation(() => LaundryItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemCreateOne(
    @Args()
    laundryItemCreateArgs: CreateOneLaundryItemArgs,
    @Relations() relations: LaundryItemSelect,
  ): Promise<LaundryItem | void> {
    return await this.laundryItemController.createOne({
      ...laundryItemCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemCreateMany(
    @Args()
    createManyLaundryItemArgs: CreateManyLaundryItemArgs,
  ) {
    return await this.laundryItemController.createMany(createManyLaundryItemArgs);
  }

  @Query(() => LaundryItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemFindOne(
    @Args()
    laundryItemFindUniqueArgs: FindUniqueLaundryItemArgs,
    @Relations() relations: LaundryItemSelect,
  ): Promise<LaundryItem | void> {
    return this.laundryItemController.findOne({
      ...laundryItemFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [LaundryItem], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemFindMany(
    @Args() laundryItemFindManyArgs: FindManyLaundryItemArgs,
    @Relations() relations: LaundryItemSelect,
  ) {
    return this.laundryItemController.findMany({
      ...laundryItemFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => LaundryItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemFindFirst(
    @Args()
    findFirstLaundryItemArgs: FindFirstLaundryItemArgs,
    @Relations() relations: LaundryItemSelect,
  ): Promise<LaundryItem | void> {
    return this.laundryItemController.findFirst({
      ...findFirstLaundryItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => LaundryItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemUpdateOne(
    @Args() laundryItemUpdateOneArgs: UpdateOneLaundryItemArgs,
    @Relations() relations: LaundryItemSelect,
  ) {
    return this.laundryItemController.updateOne({
      ...replaceNullWithUndefined(laundryItemUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => LaundryItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemUpdateMany(@Args() updateManyLaundryItemArgs: UpdateManyLaundryItemArgs) {
    return this.laundryItemController.updateMany(updateManyLaundryItemArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemDelete(
    @Args() deleteOneLaundryItemArgs: DeleteOneLaundryItemArgs,
    @Relations() relations: LaundryItemSelect,
  ) {
    return this.laundryItemController.delete({
      ...deleteOneLaundryItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async laundryItemDeleteMany(@Args() deleteManyLaundryItemArgs: DeleteManyLaundryItemArgs) {
    return this.laundryItemController.deleteMany(deleteManyLaundryItemArgs);
  }

  @Query(() => AggregateLaundryItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemAggregate(@Args() laundryItemAggregateArgs: LaundryItemAggregateArgs) {
    return this.laundryItemController.aggregate(laundryItemAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  laundryItemCount(@Args() laundryItemCountAggregateInput: FindManyLaundryItemArgs) {
    return this.laundryItemController.count(laundryItemCountAggregateInput);
  }
}
