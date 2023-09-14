// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOutletLaundryItemService,
  CreateManyOutletLaundryItemServiceArgs,
  CreateOneOutletLaundryItemServiceArgs,
  DeleteManyOutletLaundryItemServiceArgs,
  DeleteOneOutletLaundryItemServiceArgs,
  FindFirstOutletLaundryItemServiceArgs,
  FindManyOutletLaundryItemServiceArgs,
  FindUniqueOutletLaundryItemServiceArgs,
  OutletLaundryItemService,
  OutletLaundryItemServiceAggregateArgs,
  UpdateManyOutletLaundryItemServiceArgs,
  UpdateOneOutletLaundryItemServiceArgs,
} from 'src/@generated';
import { OutletLaundryItemServiceController } from './outletLaundryItemService.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OutletLaundryItemServiceSelect {
  select: Prisma.OutletLaundryItemServiceSelect;
}

@Resolver(() => OutletLaundryItemService)
export class OutletLaundryItemServiceResolver {
  constructor(private readonly outletLaundryItemServiceController: OutletLaundryItemServiceController) {}

  @Mutation(() => OutletLaundryItemService, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletLaundryItemServiceCreateOne(
    @Args()
    outletLaundryItemServiceCreateArgs: CreateOneOutletLaundryItemServiceArgs,
    @Relations() relations: OutletLaundryItemServiceSelect,
  ): Promise<OutletLaundryItemService | void> {
    return await this.outletLaundryItemServiceController.createOne({
      ...outletLaundryItemServiceCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletLaundryItemServiceCreateMany(
    @Args()
    createManyOutletLaundryItemServiceArgs: CreateManyOutletLaundryItemServiceArgs,
  ) {
    return await this.outletLaundryItemServiceController.createMany(createManyOutletLaundryItemServiceArgs);
  }

  @Query(() => OutletLaundryItemService, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletLaundryItemServiceFindOne(
    @Args()
    outletLaundryItemServiceFindUniqueArgs: FindUniqueOutletLaundryItemServiceArgs,
    @Relations() relations: OutletLaundryItemServiceSelect,
  ): Promise<OutletLaundryItemService | void> {
    return this.outletLaundryItemServiceController.findOne({
      ...outletLaundryItemServiceFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [OutletLaundryItemService], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletLaundryItemServiceFindMany(
    @Args() outletLaundryItemServiceFindManyArgs: FindManyOutletLaundryItemServiceArgs,
    @Relations() relations: OutletLaundryItemServiceSelect,
  ) {
    return this.outletLaundryItemServiceController.findMany({
      ...outletLaundryItemServiceFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => OutletLaundryItemService, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletLaundryItemServiceFindFirst(
    @Args()
    findFirstOutletLaundryItemServiceArgs: FindFirstOutletLaundryItemServiceArgs,
    @Relations() relations: OutletLaundryItemServiceSelect,
  ): Promise<OutletLaundryItemService | void> {
    return this.outletLaundryItemServiceController.findFirst({
      ...findFirstOutletLaundryItemServiceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => OutletLaundryItemService, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletLaundryItemServiceUpdateOne(
    @Args() outletLaundryItemServiceUpdateOneArgs: UpdateOneOutletLaundryItemServiceArgs,
    @Relations() relations: OutletLaundryItemServiceSelect,
  ) {
    return this.outletLaundryItemServiceController.updateOne({
      ...replaceNullWithUndefined(outletLaundryItemServiceUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => OutletLaundryItemService, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletLaundryItemServiceUpdateMany(@Args() updateManyOutletLaundryItemServiceArgs: UpdateManyOutletLaundryItemServiceArgs) {
    return this.outletLaundryItemServiceController.updateMany(updateManyOutletLaundryItemServiceArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async outletLaundryItemServiceDelete(
    @Args() deleteOneOutletLaundryItemServiceArgs: DeleteOneOutletLaundryItemServiceArgs,
    @Relations() relations: OutletLaundryItemServiceSelect,
  ) {
    return this.outletLaundryItemServiceController.delete({
      ...deleteOneOutletLaundryItemServiceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async outletLaundryItemServiceDeleteMany(@Args() deleteManyOutletLaundryItemServiceArgs: DeleteManyOutletLaundryItemServiceArgs) {
    return this.outletLaundryItemServiceController.deleteMany(deleteManyOutletLaundryItemServiceArgs);
  }

  @Query(() => AggregateOutletLaundryItemService, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletLaundryItemServiceAggregate(@Args() outletLaundryItemServiceAggregateArgs: OutletLaundryItemServiceAggregateArgs) {
    return this.outletLaundryItemServiceController.aggregate(outletLaundryItemServiceAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletLaundryItemServiceCount(@Args() outletLaundryItemServiceCountAggregateInput: FindManyOutletLaundryItemServiceArgs) {
    return this.outletLaundryItemServiceController.count(outletLaundryItemServiceCountAggregateInput);
  }
}
