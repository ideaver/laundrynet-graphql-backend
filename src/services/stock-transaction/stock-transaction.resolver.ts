// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateStockTransaction,
  CreateManyStockTransactionArgs,
  CreateOneStockTransactionArgs,
  DeleteManyStockTransactionArgs,
  DeleteOneStockTransactionArgs,
  FindFirstStockTransactionArgs,
  FindManyStockTransactionArgs,
  FindUniqueStockTransactionArgs,
  StockTransaction,
  StockTransactionAggregateArgs,
  UpdateManyStockTransactionArgs,
  UpdateOneStockTransactionArgs,
} from 'src/@generated';
import { StockTransactionController } from './stockTransaction.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface StockTransactionSelect {
  select: Prisma.StockTransactionSelect;
}

@Resolver(() => StockTransaction)
export class StockTransactionResolver {
  constructor(private readonly stockTransactionController: StockTransactionController) {}

  @Mutation(() => StockTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockTransactionCreateOne(
    @Args()
    stockTransactionCreateArgs: CreateOneStockTransactionArgs,
    @Relations() relations: StockTransactionSelect,
  ): Promise<StockTransaction | void> {
    return await this.stockTransactionController.createOne({
      ...stockTransactionCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockTransactionCreateMany(
    @Args()
    createManyStockTransactionArgs: CreateManyStockTransactionArgs,
  ) {
    return await this.stockTransactionController.createMany(createManyStockTransactionArgs);
  }

  @Query(() => StockTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockTransactionFindOne(
    @Args()
    stockTransactionFindUniqueArgs: FindUniqueStockTransactionArgs,
    @Relations() relations: StockTransactionSelect,
  ): Promise<StockTransaction | void> {
    return this.stockTransactionController.findOne({
      ...stockTransactionFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [StockTransaction], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockTransactionFindMany(
    @Args() stockTransactionFindManyArgs: FindManyStockTransactionArgs,
    @Relations() relations: StockTransactionSelect,
  ) {
    return this.stockTransactionController.findMany({
      ...stockTransactionFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => StockTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockTransactionFindFirst(
    @Args()
    findFirstStockTransactionArgs: FindFirstStockTransactionArgs,
    @Relations() relations: StockTransactionSelect,
  ): Promise<StockTransaction | void> {
    return this.stockTransactionController.findFirst({
      ...findFirstStockTransactionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => StockTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockTransactionUpdateOne(
    @Args() stockTransactionUpdateOneArgs: UpdateOneStockTransactionArgs,
    @Relations() relations: StockTransactionSelect,
  ) {
    return this.stockTransactionController.updateOne({
      ...replaceNullWithUndefined(stockTransactionUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => StockTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async stockTransactionUpdateMany(@Args() updateManyStockTransactionArgs: UpdateManyStockTransactionArgs) {
    return this.stockTransactionController.updateMany(updateManyStockTransactionArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async stockTransactionDelete(
    @Args() deleteOneStockTransactionArgs: DeleteOneStockTransactionArgs,
    @Relations() relations: StockTransactionSelect,
  ) {
    return this.stockTransactionController.delete({
      ...deleteOneStockTransactionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async stockTransactionDeleteMany(@Args() deleteManyStockTransactionArgs: DeleteManyStockTransactionArgs) {
    return this.stockTransactionController.deleteMany(deleteManyStockTransactionArgs);
  }

  @Query(() => AggregateStockTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockTransactionAggregate(@Args() stockTransactionAggregateArgs: StockTransactionAggregateArgs) {
    return this.stockTransactionController.aggregate(stockTransactionAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  stockTransactionCount(@Args() stockTransactionCountAggregateInput: FindManyStockTransactionArgs) {
    return this.stockTransactionController.count(stockTransactionCountAggregateInput);
  }
}
