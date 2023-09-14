// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateStockItem,
  CreateManyStockItemArgs,
  CreateOneStockItemArgs,
  DeleteManyStockItemArgs,
  DeleteOneStockItemArgs,
  FindFirstStockItemArgs,
  FindManyStockItemArgs,
  FindUniqueStockItemArgs,
  StockItem,
  StockItemAggregateArgs,
  UpdateManyStockItemArgs,
  UpdateOneStockItemArgs,
} from 'src/@generated';
import { StockItemController } from './stockItem.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface StockItemSelect {
  select: Prisma.StockItemSelect;
}

@Resolver(() => StockItem)
export class StockItemResolver {
  constructor(private readonly stockItemController: StockItemController) {}

  @Mutation(() => StockItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockItemCreateOne(
    @Args()
    stockItemCreateArgs: CreateOneStockItemArgs,
    @Relations() relations: StockItemSelect,
  ): Promise<StockItem | void> {
    return await this.stockItemController.createOne({
      ...stockItemCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockItemCreateMany(
    @Args()
    createManyStockItemArgs: CreateManyStockItemArgs,
  ) {
    return await this.stockItemController.createMany(createManyStockItemArgs);
  }

  @Query(() => StockItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockItemFindOne(
    @Args()
    stockItemFindUniqueArgs: FindUniqueStockItemArgs,
    @Relations() relations: StockItemSelect,
  ): Promise<StockItem | void> {
    return this.stockItemController.findOne({
      ...stockItemFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [StockItem], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockItemFindMany(
    @Args() stockItemFindManyArgs: FindManyStockItemArgs,
    @Relations() relations: StockItemSelect,
  ) {
    return this.stockItemController.findMany({
      ...stockItemFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => StockItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockItemFindFirst(
    @Args()
    findFirstStockItemArgs: FindFirstStockItemArgs,
    @Relations() relations: StockItemSelect,
  ): Promise<StockItem | void> {
    return this.stockItemController.findFirst({
      ...findFirstStockItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => StockItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockItemUpdateOne(
    @Args() stockItemUpdateOneArgs: UpdateOneStockItemArgs,
    @Relations() relations: StockItemSelect,
  ) {
    return this.stockItemController.updateOne({
      ...replaceNullWithUndefined(stockItemUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => StockItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockItemUpdateMany(@Args() updateManyStockItemArgs: UpdateManyStockItemArgs) {
    return this.stockItemController.updateMany(updateManyStockItemArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async stockItemDelete(
    @Args() deleteOneStockItemArgs: DeleteOneStockItemArgs,
    @Relations() relations: StockItemSelect,
  ) {
    return this.stockItemController.delete({
      ...deleteOneStockItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async stockItemDeleteMany(@Args() deleteManyStockItemArgs: DeleteManyStockItemArgs) {
    return this.stockItemController.deleteMany(deleteManyStockItemArgs);
  }

  @Query(() => AggregateStockItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockItemAggregate(@Args() stockItemAggregateArgs: StockItemAggregateArgs) {
    return this.stockItemController.aggregate(stockItemAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockItemCount(@Args() stockItemCountAggregateInput: FindManyStockItemArgs) {
    return this.stockItemController.count(stockItemCountAggregateInput);
  }
}
