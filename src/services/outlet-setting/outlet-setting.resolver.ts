// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOutletSetting,
  CreateManyOutletSettingArgs,
  CreateOneOutletSettingArgs,
  DeleteManyOutletSettingArgs,
  DeleteOneOutletSettingArgs,
  FindFirstOutletSettingArgs,
  FindManyOutletSettingArgs,
  FindUniqueOutletSettingArgs,
  OutletSetting,
  OutletSettingAggregateArgs,
  UpdateManyOutletSettingArgs,
  UpdateOneOutletSettingArgs,
} from 'src/@generated';
import { OutletSettingController } from './outletSetting.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OutletSettingSelect {
  select: Prisma.OutletSettingSelect;
}

@Resolver(() => OutletSetting)
export class OutletSettingResolver {
  constructor(private readonly outletSettingController: OutletSettingController) {}

  @Mutation(() => OutletSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletSettingCreateOne(
    @Args()
    outletSettingCreateArgs: CreateOneOutletSettingArgs,
    @Relations() relations: OutletSettingSelect,
  ): Promise<OutletSetting | void> {
    return await this.outletSettingController.createOne({
      ...outletSettingCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletSettingCreateMany(
    @Args()
    createManyOutletSettingArgs: CreateManyOutletSettingArgs,
  ) {
    return await this.outletSettingController.createMany(createManyOutletSettingArgs);
  }

  @Query(() => OutletSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletSettingFindOne(
    @Args()
    outletSettingFindUniqueArgs: FindUniqueOutletSettingArgs,
    @Relations() relations: OutletSettingSelect,
  ): Promise<OutletSetting | void> {
    return this.outletSettingController.findOne({
      ...outletSettingFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [OutletSetting], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletSettingFindMany(
    @Args() outletSettingFindManyArgs: FindManyOutletSettingArgs,
    @Relations() relations: OutletSettingSelect,
  ) {
    return this.outletSettingController.findMany({
      ...outletSettingFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => OutletSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletSettingFindFirst(
    @Args()
    findFirstOutletSettingArgs: FindFirstOutletSettingArgs,
    @Relations() relations: OutletSettingSelect,
  ): Promise<OutletSetting | void> {
    return this.outletSettingController.findFirst({
      ...findFirstOutletSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => OutletSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletSettingUpdateOne(
    @Args() outletSettingUpdateOneArgs: UpdateOneOutletSettingArgs,
    @Relations() relations: OutletSettingSelect,
  ) {
    return this.outletSettingController.updateOne({
      ...replaceNullWithUndefined(outletSettingUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => OutletSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletSettingUpdateMany(@Args() updateManyOutletSettingArgs: UpdateManyOutletSettingArgs) {
    return this.outletSettingController.updateMany(updateManyOutletSettingArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async outletSettingDelete(
    @Args() deleteOneOutletSettingArgs: DeleteOneOutletSettingArgs,
    @Relations() relations: OutletSettingSelect,
  ) {
    return this.outletSettingController.delete({
      ...deleteOneOutletSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async outletSettingDeleteMany(@Args() deleteManyOutletSettingArgs: DeleteManyOutletSettingArgs) {
    return this.outletSettingController.deleteMany(deleteManyOutletSettingArgs);
  }

  @Query(() => AggregateOutletSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletSettingAggregate(@Args() outletSettingAggregateArgs: OutletSettingAggregateArgs) {
    return this.outletSettingController.aggregate(outletSettingAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletSettingCount(@Args() outletSettingCountAggregateInput: FindManyOutletSettingArgs) {
    return this.outletSettingController.count(outletSettingCountAggregateInput);
  }
}
