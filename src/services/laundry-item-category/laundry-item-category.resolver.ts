// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateLaundryItemCategory,
  CreateManyLaundryItemCategoryArgs,
  CreateOneLaundryItemCategoryArgs,
  DeleteManyLaundryItemCategoryArgs,
  DeleteOneLaundryItemCategoryArgs,
  FindFirstLaundryItemCategoryArgs,
  FindManyLaundryItemCategoryArgs,
  FindUniqueLaundryItemCategoryArgs,
  LaundryItemCategory,
  LaundryItemCategoryAggregateArgs,
  UpdateManyLaundryItemCategoryArgs,
  UpdateOneLaundryItemCategoryArgs,
} from 'src/@generated';
import { LaundryItemCategoryController } from './laundry-item-category.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface LaundryItemCategorySelect {
  select: Prisma.LaundryItemCategorySelect;
}

@Resolver(() => LaundryItemCategory)
export class LaundryItemCategoryResolver {
  constructor(private readonly laundryItemCategoryController: LaundryItemCategoryController) {}

  @Mutation(() => LaundryItemCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async laundryItemCategoryCreateOne(
    @Args()
    laundryItemCategoryCreateArgs: CreateOneLaundryItemCategoryArgs,
    @Relations() relations: LaundryItemCategorySelect,
  ): Promise<LaundryItemCategory | void> {
    return await this.laundryItemCategoryController.createOne({
      ...laundryItemCategoryCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async laundryItemCategoryCreateMany(
    @Args()
    createManyLaundryItemCategoryArgs: CreateManyLaundryItemCategoryArgs,
  ) {
    return await this.laundryItemCategoryController.createMany(createManyLaundryItemCategoryArgs);
  }

  @Query(() => LaundryItemCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  laundryItemCategoryFindOne(
    @Args()
    laundryItemCategoryFindUniqueArgs: FindUniqueLaundryItemCategoryArgs,
    @Relations() relations: LaundryItemCategorySelect,
  ): Promise<LaundryItemCategory | void> {
    return this.laundryItemCategoryController.findOne({
      ...laundryItemCategoryFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [LaundryItemCategory], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  laundryItemCategoryFindMany(
    @Args() laundryItemCategoryFindManyArgs: FindManyLaundryItemCategoryArgs,
    @Relations() relations: LaundryItemCategorySelect,
  ) {
    return this.laundryItemCategoryController.findMany({
      ...laundryItemCategoryFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => LaundryItemCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  laundryItemCategoryFindFirst(
    @Args()
    findFirstLaundryItemCategoryArgs: FindFirstLaundryItemCategoryArgs,
    @Relations() relations: LaundryItemCategorySelect,
  ): Promise<LaundryItemCategory | void> {
    return this.laundryItemCategoryController.findFirst({
      ...findFirstLaundryItemCategoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => LaundryItemCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async laundryItemCategoryUpdateOne(
    @Args() laundryItemCategoryUpdateOneArgs: UpdateOneLaundryItemCategoryArgs,
    @Relations() relations: LaundryItemCategorySelect,
  ) {
    return this.laundryItemCategoryController.updateOne({
      ...replaceNullWithUndefined(laundryItemCategoryUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => LaundryItemCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async laundryItemCategoryUpdateMany(@Args() updateManyLaundryItemCategoryArgs: UpdateManyLaundryItemCategoryArgs) {
    return this.laundryItemCategoryController.updateMany(updateManyLaundryItemCategoryArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async laundryItemCategoryDelete(
    @Args() deleteOneLaundryItemCategoryArgs: DeleteOneLaundryItemCategoryArgs,
    @Relations() relations: LaundryItemCategorySelect,
  ) {
    return this.laundryItemCategoryController.delete({
      ...deleteOneLaundryItemCategoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async laundryItemCategoryDeleteMany(@Args() deleteManyLaundryItemCategoryArgs: DeleteManyLaundryItemCategoryArgs) {
    return this.laundryItemCategoryController.deleteMany(deleteManyLaundryItemCategoryArgs);
  }

  @Query(() => AggregateLaundryItemCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  laundryItemCategoryAggregate(@Args() laundryItemCategoryAggregateArgs: LaundryItemCategoryAggregateArgs) {
    return this.laundryItemCategoryController.aggregate(laundryItemCategoryAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  laundryItemCategoryCount(@Args() laundryItemCategoryCountAggregateInput: FindManyLaundryItemCategoryArgs) {
    return this.laundryItemCategoryController.count(laundryItemCategoryCountAggregateInput);
  }
}
