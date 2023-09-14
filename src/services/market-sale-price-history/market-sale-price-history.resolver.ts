// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateMarketSalePriceHistory,
  CreateManyMarketSalePriceHistoryArgs,
  CreateOneMarketSalePriceHistoryArgs,
  DeleteManyMarketSalePriceHistoryArgs,
  DeleteOneMarketSalePriceHistoryArgs,
  FindFirstMarketSalePriceHistoryArgs,
  FindManyMarketSalePriceHistoryArgs,
  FindUniqueMarketSalePriceHistoryArgs,
  MarketSalePriceHistory,
  MarketSalePriceHistoryAggregateArgs,
  UpdateManyMarketSalePriceHistoryArgs,
  UpdateOneMarketSalePriceHistoryArgs,
} from 'src/@generated';
import { MarketSalePriceHistoryController } from './market-sale-price-history.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface MarketSalePriceHistorySelect {
  select: Prisma.MarketSalePriceHistorySelect;
}

@Resolver(() => MarketSalePriceHistory)
export class MarketSalePriceHistoryResolver {
  constructor(private readonly marketSalePriceHistoryController: MarketSalePriceHistoryController) {}

  @Mutation(() => MarketSalePriceHistory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async marketSalePriceHistoryCreateOne(
    @Args()
    marketSalePriceHistoryCreateArgs: CreateOneMarketSalePriceHistoryArgs,
    @Relations() relations: MarketSalePriceHistorySelect,
  ): Promise<MarketSalePriceHistory | void> {
    return await this.marketSalePriceHistoryController.createOne({
      ...marketSalePriceHistoryCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async marketSalePriceHistoryCreateMany(
    @Args()
    createManyMarketSalePriceHistoryArgs: CreateManyMarketSalePriceHistoryArgs,
  ) {
    return await this.marketSalePriceHistoryController.createMany(createManyMarketSalePriceHistoryArgs);
  }

  @Query(() => MarketSalePriceHistory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  marketSalePriceHistoryFindOne(
    @Args()
    marketSalePriceHistoryFindUniqueArgs: FindUniqueMarketSalePriceHistoryArgs,
    @Relations() relations: MarketSalePriceHistorySelect,
  ): Promise<MarketSalePriceHistory | void> {
    return this.marketSalePriceHistoryController.findOne({
      ...marketSalePriceHistoryFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [MarketSalePriceHistory], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  marketSalePriceHistoryFindMany(
    @Args() marketSalePriceHistoryFindManyArgs: FindManyMarketSalePriceHistoryArgs,
    @Relations() relations: MarketSalePriceHistorySelect,
  ) {
    return this.marketSalePriceHistoryController.findMany({
      ...marketSalePriceHistoryFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => MarketSalePriceHistory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  marketSalePriceHistoryFindFirst(
    @Args()
    findFirstMarketSalePriceHistoryArgs: FindFirstMarketSalePriceHistoryArgs,
    @Relations() relations: MarketSalePriceHistorySelect,
  ): Promise<MarketSalePriceHistory | void> {
    return this.marketSalePriceHistoryController.findFirst({
      ...findFirstMarketSalePriceHistoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => MarketSalePriceHistory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async marketSalePriceHistoryUpdateOne(
    @Args() marketSalePriceHistoryUpdateOneArgs: UpdateOneMarketSalePriceHistoryArgs,
    @Relations() relations: MarketSalePriceHistorySelect,
  ) {
    return this.marketSalePriceHistoryController.updateOne({
      ...replaceNullWithUndefined(marketSalePriceHistoryUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => MarketSalePriceHistory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async marketSalePriceHistoryUpdateMany(@Args() updateManyMarketSalePriceHistoryArgs: UpdateManyMarketSalePriceHistoryArgs) {
    return this.marketSalePriceHistoryController.updateMany(updateManyMarketSalePriceHistoryArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async marketSalePriceHistoryDelete(
    @Args() deleteOneMarketSalePriceHistoryArgs: DeleteOneMarketSalePriceHistoryArgs,
    @Relations() relations: MarketSalePriceHistorySelect,
  ) {
    return this.marketSalePriceHistoryController.delete({
      ...deleteOneMarketSalePriceHistoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async marketSalePriceHistoryDeleteMany(@Args() deleteManyMarketSalePriceHistoryArgs: DeleteManyMarketSalePriceHistoryArgs) {
    return this.marketSalePriceHistoryController.deleteMany(deleteManyMarketSalePriceHistoryArgs);
  }

  @Query(() => AggregateMarketSalePriceHistory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  marketSalePriceHistoryAggregate(@Args() marketSalePriceHistoryAggregateArgs: MarketSalePriceHistoryAggregateArgs) {
    return this.marketSalePriceHistoryController.aggregate(marketSalePriceHistoryAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  marketSalePriceHistoryCount(@Args() marketSalePriceHistoryCountAggregateInput: FindManyMarketSalePriceHistoryArgs) {
    return this.marketSalePriceHistoryController.count(marketSalePriceHistoryCountAggregateInput);
  }
}
