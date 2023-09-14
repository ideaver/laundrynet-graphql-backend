// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOutlet,
  CreateManyOutletArgs,
  CreateOneOutletArgs,
  DeleteManyOutletArgs,
  DeleteOneOutletArgs,
  FindFirstOutletArgs,
  FindManyOutletArgs,
  FindUniqueOutletArgs,
  Outlet,
  OutletAggregateArgs,
  UpdateManyOutletArgs,
  UpdateOneOutletArgs,
} from 'src/@generated';
import { OutletController } from './outlet.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OutletSelect {
  select: Prisma.OutletSelect;
}

@Resolver(() => Outlet)
export class OutletResolver {
  constructor(private readonly outletController: OutletController) {}

  @Mutation(() => Outlet, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async outletCreateOne(
    @Args()
    outletCreateArgs: CreateOneOutletArgs,
    @Relations() relations: OutletSelect,
  ): Promise<Outlet | void> {
    return await this.outletController.createOne({
      ...outletCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async outletCreateMany(
    @Args()
    createManyOutletArgs: CreateManyOutletArgs,
  ) {
    return await this.outletController.createMany(createManyOutletArgs);
  }

  @Query(() => Outlet, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  outletFindOne(
    @Args()
    outletFindUniqueArgs: FindUniqueOutletArgs,
    @Relations() relations: OutletSelect,
  ): Promise<Outlet | void> {
    return this.outletController.findOne({
      ...outletFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Outlet], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  outletFindMany(
    @Args() outletFindManyArgs: FindManyOutletArgs,
    @Relations() relations: OutletSelect,
  ) {
    return this.outletController.findMany({
      ...outletFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Outlet, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  outletFindFirst(
    @Args()
    findFirstOutletArgs: FindFirstOutletArgs,
    @Relations() relations: OutletSelect,
  ): Promise<Outlet | void> {
    return this.outletController.findFirst({
      ...findFirstOutletArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Outlet, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async outletUpdateOne(
    @Args() outletUpdateOneArgs: UpdateOneOutletArgs,
    @Relations() relations: OutletSelect,
  ) {
    return this.outletController.updateOne({
      ...replaceNullWithUndefined(outletUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Outlet, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async outletUpdateMany(@Args() updateManyOutletArgs: UpdateManyOutletArgs) {
    return this.outletController.updateMany(updateManyOutletArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async outletDelete(
    @Args() deleteOneOutletArgs: DeleteOneOutletArgs,
    @Relations() relations: OutletSelect,
  ) {
    return this.outletController.delete({
      ...deleteOneOutletArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async outletDeleteMany(@Args() deleteManyOutletArgs: DeleteManyOutletArgs) {
    return this.outletController.deleteMany(deleteManyOutletArgs);
  }

  @Query(() => AggregateOutlet, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  outletAggregate(@Args() outletAggregateArgs: OutletAggregateArgs) {
    return this.outletController.aggregate(outletAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  outletCount(@Args() outletCountAggregateInput: FindManyOutletArgs) {
    return this.outletController.count(outletCountAggregateInput);
  }
}
