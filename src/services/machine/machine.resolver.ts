// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateMachine,
  CreateManyMachineArgs,
  CreateOneMachineArgs,
  DeleteManyMachineArgs,
  DeleteOneMachineArgs,
  FindFirstMachineArgs,
  FindManyMachineArgs,
  FindUniqueMachineArgs,
  Machine,
  MachineAggregateArgs,
  UpdateManyMachineArgs,
  UpdateOneMachineArgs,
} from 'src/@generated';
import { MachineController } from './machine.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface MachineSelect {
  select: Prisma.MachineSelect;
}

@Resolver(() => Machine)
export class MachineResolver {
  constructor(private readonly machineController: MachineController) {}

  @Mutation(() => Machine, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCreateOne(
    @Args()
    machineCreateArgs: CreateOneMachineArgs,
    @Relations() relations: MachineSelect,
  ): Promise<Machine | void> {
    return await this.machineController.createOne({
      ...machineCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineCreateMany(
    @Args()
    createManyMachineArgs: CreateManyMachineArgs,
  ) {
    return await this.machineController.createMany(createManyMachineArgs);
  }

  @Query(() => Machine, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineFindOne(
    @Args()
    machineFindUniqueArgs: FindUniqueMachineArgs,
    @Relations() relations: MachineSelect,
  ): Promise<Machine | void> {
    return this.machineController.findOne({
      ...machineFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Machine], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineFindMany(
    @Args() machineFindManyArgs: FindManyMachineArgs,
    @Relations() relations: MachineSelect,
  ) {
    return this.machineController.findMany({
      ...machineFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Machine, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineFindFirst(
    @Args()
    findFirstMachineArgs: FindFirstMachineArgs,
    @Relations() relations: MachineSelect,
  ): Promise<Machine | void> {
    return this.machineController.findFirst({
      ...findFirstMachineArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Machine, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineUpdateOne(
    @Args() machineUpdateOneArgs: UpdateOneMachineArgs,
    @Relations() relations: MachineSelect,
  ) {
    return this.machineController.updateOne({
      ...replaceNullWithUndefined(machineUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Machine, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineUpdateMany(@Args() updateManyMachineArgs: UpdateManyMachineArgs) {
    return this.machineController.updateMany(updateManyMachineArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineDelete(
    @Args() deleteOneMachineArgs: DeleteOneMachineArgs,
    @Relations() relations: MachineSelect,
  ) {
    return this.machineController.delete({
      ...deleteOneMachineArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async machineDeleteMany(@Args() deleteManyMachineArgs: DeleteManyMachineArgs) {
    return this.machineController.deleteMany(deleteManyMachineArgs);
  }

  @Query(() => AggregateMachine, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineAggregate(@Args() machineAggregateArgs: MachineAggregateArgs) {
    return this.machineController.aggregate(machineAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  machineCount(@Args() machineCountAggregateInput: FindManyMachineArgs) {
    return this.machineController.count(machineCountAggregateInput);
  }
}
