// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateMachineCategory,
  CreateManyMachineCategoryArgs,
  CreateOneMachineCategoryArgs,
  DeleteManyMachineCategoryArgs,
  DeleteOneMachineCategoryArgs,
  FindFirstMachineCategoryArgs,
  FindManyMachineCategoryArgs,
  FindUniqueMachineCategoryArgs,
  MachineCategory,
  MachineCategoryAggregateArgs,
  UpdateManyMachineCategoryArgs,
  UpdateOneMachineCategoryArgs,
} from 'src/@generated';
import { MachineCategoryController } from './machine-category.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface MachineCategorySelect {
  select: Prisma.MachineCategorySelect;
}

@Resolver(() => MachineCategory)
export class MachineCategoryResolver {
  constructor(private readonly machineCategoryController: MachineCategoryController) {}

  @Mutation(() => MachineCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCategoryCreateOne(
    @Args()
    machineCategoryCreateArgs: CreateOneMachineCategoryArgs,
    @Relations() relations: MachineCategorySelect,
  ): Promise<MachineCategory | void> {
    return await this.machineCategoryController.createOne({
      ...machineCategoryCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCategoryCreateMany(
    @Args()
    createManyMachineCategoryArgs: CreateManyMachineCategoryArgs,
  ) {
    return await this.machineCategoryController.createMany(createManyMachineCategoryArgs);
  }

  @Query(() => MachineCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineCategoryFindOne(
    @Args()
    machineCategoryFindUniqueArgs: FindUniqueMachineCategoryArgs,
    @Relations() relations: MachineCategorySelect,
  ): Promise<MachineCategory | void> {
    return this.machineCategoryController.findOne({
      ...machineCategoryFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [MachineCategory], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineCategoryFindMany(
    @Args() machineCategoryFindManyArgs: FindManyMachineCategoryArgs,
    @Relations() relations: MachineCategorySelect,
  ) {
    return this.machineCategoryController.findMany({
      ...machineCategoryFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => MachineCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineCategoryFindFirst(
    @Args()
    findFirstMachineCategoryArgs: FindFirstMachineCategoryArgs,
    @Relations() relations: MachineCategorySelect,
  ): Promise<MachineCategory | void> {
    return this.machineCategoryController.findFirst({
      ...findFirstMachineCategoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => MachineCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCategoryUpdateOne(
    @Args() machineCategoryUpdateOneArgs: UpdateOneMachineCategoryArgs,
    @Relations() relations: MachineCategorySelect,
  ) {
    return this.machineCategoryController.updateOne({
      ...replaceNullWithUndefined(machineCategoryUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => MachineCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCategoryUpdateMany(@Args() updateManyMachineCategoryArgs: UpdateManyMachineCategoryArgs) {
    return this.machineCategoryController.updateMany(updateManyMachineCategoryArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCategoryDelete(
    @Args() deleteOneMachineCategoryArgs: DeleteOneMachineCategoryArgs,
    @Relations() relations: MachineCategorySelect,
  ) {
    return this.machineCategoryController.delete({
      ...deleteOneMachineCategoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCategoryDeleteMany(@Args() deleteManyMachineCategoryArgs: DeleteManyMachineCategoryArgs) {
    return this.machineCategoryController.deleteMany(deleteManyMachineCategoryArgs);
  }

  @Query(() => AggregateMachineCategory, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineCategoryAggregate(@Args() machineCategoryAggregateArgs: MachineCategoryAggregateArgs) {
    return this.machineCategoryController.aggregate(machineCategoryAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineCategoryCount(@Args() machineCategoryCountAggregateInput: FindManyMachineCategoryArgs) {
    return this.machineCategoryController.count(machineCategoryCountAggregateInput);
  }
}
