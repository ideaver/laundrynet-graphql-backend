// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateMachineSettings,
  CreateManyMachineSettingsArgs,
  CreateOneMachineSettingsArgs,
  DeleteManyMachineSettingsArgs,
  DeleteOneMachineSettingsArgs,
  FindFirstMachineSettingsArgs,
  FindManyMachineSettingsArgs,
  FindUniqueMachineSettingsArgs,
  MachineSettings,
  MachineSettingsAggregateArgs,
  UpdateManyMachineSettingsArgs,
  UpdateOneMachineSettingsArgs,
} from 'src/@generated';
import { MachineSettingsController } from './machineSettings.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface MachineSettingsSelect {
  select: Prisma.MachineSettingsSelect;
}

@Resolver(() => MachineSettings)
export class MachineSettingsResolver {
  constructor(private readonly machineSettingsController: MachineSettingsController) {}

  @Mutation(() => MachineSettings, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async machineSettingsCreateOne(
    @Args()
    machineSettingsCreateArgs: CreateOneMachineSettingsArgs,
    @Relations() relations: MachineSettingsSelect,
  ): Promise<MachineSettings | void> {
    return await this.machineSettingsController.createOne({
      ...machineSettingsCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async machineSettingsCreateMany(
    @Args()
    createManyMachineSettingsArgs: CreateManyMachineSettingsArgs,
  ) {
    return await this.machineSettingsController.createMany(createManyMachineSettingsArgs);
  }

  @Query(() => MachineSettings, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  machineSettingsFindOne(
    @Args()
    machineSettingsFindUniqueArgs: FindUniqueMachineSettingsArgs,
    @Relations() relations: MachineSettingsSelect,
  ): Promise<MachineSettings | void> {
    return this.machineSettingsController.findOne({
      ...machineSettingsFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [MachineSettings], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  machineSettingsFindMany(
    @Args() machineSettingsFindManyArgs: FindManyMachineSettingsArgs,
    @Relations() relations: MachineSettingsSelect,
  ) {
    return this.machineSettingsController.findMany({
      ...machineSettingsFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => MachineSettings, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  machineSettingsFindFirst(
    @Args()
    findFirstMachineSettingsArgs: FindFirstMachineSettingsArgs,
    @Relations() relations: MachineSettingsSelect,
  ): Promise<MachineSettings | void> {
    return this.machineSettingsController.findFirst({
      ...findFirstMachineSettingsArgs,
      select: relations.select,
    });
  }

  @Mutation(() => MachineSettings, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async machineSettingsUpdateOne(
    @Args() machineSettingsUpdateOneArgs: UpdateOneMachineSettingsArgs,
    @Relations() relations: MachineSettingsSelect,
  ) {
    return this.machineSettingsController.updateOne({
      ...replaceNullWithUndefined(machineSettingsUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => MachineSettings, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async machineSettingsUpdateMany(@Args() updateManyMachineSettingsArgs: UpdateManyMachineSettingsArgs) {
    return this.machineSettingsController.updateMany(updateManyMachineSettingsArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async machineSettingsDelete(
    @Args() deleteOneMachineSettingsArgs: DeleteOneMachineSettingsArgs,
    @Relations() relations: MachineSettingsSelect,
  ) {
    return this.machineSettingsController.delete({
      ...deleteOneMachineSettingsArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async machineSettingsDeleteMany(@Args() deleteManyMachineSettingsArgs: DeleteManyMachineSettingsArgs) {
    return this.machineSettingsController.deleteMany(deleteManyMachineSettingsArgs);
  }

  @Query(() => AggregateMachineSettings, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  machineSettingsAggregate(@Args() machineSettingsAggregateArgs: MachineSettingsAggregateArgs) {
    return this.machineSettingsController.aggregate(machineSettingsAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  machineSettingsCount(@Args() machineSettingsCountAggregateInput: FindManyMachineSettingsArgs) {
    return this.machineSettingsController.count(machineSettingsCountAggregateInput);
  }
}
