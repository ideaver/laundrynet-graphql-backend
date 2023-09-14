// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateEdcMachine,
  CreateManyEdcMachineArgs,
  CreateOneEdcMachineArgs,
  DeleteManyEdcMachineArgs,
  DeleteOneEdcMachineArgs,
  FindFirstEdcMachineArgs,
  FindManyEdcMachineArgs,
  FindUniqueEdcMachineArgs,
  EdcMachine,
  EdcMachineAggregateArgs,
  UpdateManyEdcMachineArgs,
  UpdateOneEdcMachineArgs,
} from 'src/@generated';
import { EdcMachineController } from './edcMachine.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface EdcMachineSelect {
  select: Prisma.EdcMachineSelect;
}

@Resolver(() => EdcMachine)
export class EdcMachineResolver {
  constructor(private readonly edcMachineController: EdcMachineController) {}

  @Mutation(() => EdcMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async edcMachineCreateOne(
    @Args()
    edcMachineCreateArgs: CreateOneEdcMachineArgs,
    @Relations() relations: EdcMachineSelect,
  ): Promise<EdcMachine | void> {
    return await this.edcMachineController.createOne({
      ...edcMachineCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async edcMachineCreateMany(
    @Args()
    createManyEdcMachineArgs: CreateManyEdcMachineArgs,
  ) {
    return await this.edcMachineController.createMany(createManyEdcMachineArgs);
  }

  @Query(() => EdcMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  edcMachineFindOne(
    @Args()
    edcMachineFindUniqueArgs: FindUniqueEdcMachineArgs,
    @Relations() relations: EdcMachineSelect,
  ): Promise<EdcMachine | void> {
    return this.edcMachineController.findOne({
      ...edcMachineFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [EdcMachine], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  edcMachineFindMany(
    @Args() edcMachineFindManyArgs: FindManyEdcMachineArgs,
    @Relations() relations: EdcMachineSelect,
  ) {
    return this.edcMachineController.findMany({
      ...edcMachineFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => EdcMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  edcMachineFindFirst(
    @Args()
    findFirstEdcMachineArgs: FindFirstEdcMachineArgs,
    @Relations() relations: EdcMachineSelect,
  ): Promise<EdcMachine | void> {
    return this.edcMachineController.findFirst({
      ...findFirstEdcMachineArgs,
      select: relations.select,
    });
  }

  @Mutation(() => EdcMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async edcMachineUpdateOne(
    @Args() edcMachineUpdateOneArgs: UpdateOneEdcMachineArgs,
    @Relations() relations: EdcMachineSelect,
  ) {
    return this.edcMachineController.updateOne({
      ...replaceNullWithUndefined(edcMachineUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => EdcMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async edcMachineUpdateMany(@Args() updateManyEdcMachineArgs: UpdateManyEdcMachineArgs) {
    return this.edcMachineController.updateMany(updateManyEdcMachineArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async edcMachineDelete(
    @Args() deleteOneEdcMachineArgs: DeleteOneEdcMachineArgs,
    @Relations() relations: EdcMachineSelect,
  ) {
    return this.edcMachineController.delete({
      ...deleteOneEdcMachineArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async edcMachineDeleteMany(@Args() deleteManyEdcMachineArgs: DeleteManyEdcMachineArgs) {
    return this.edcMachineController.deleteMany(deleteManyEdcMachineArgs);
  }

  @Query(() => AggregateEdcMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  edcMachineAggregate(@Args() edcMachineAggregateArgs: EdcMachineAggregateArgs) {
    return this.edcMachineController.aggregate(edcMachineAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  edcMachineCount(@Args() edcMachineCountAggregateInput: FindManyEdcMachineArgs) {
    return this.edcMachineController.count(edcMachineCountAggregateInput);
  }
}
