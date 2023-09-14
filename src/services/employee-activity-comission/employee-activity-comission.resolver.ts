// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateEmployeeActivityComission,
  CreateManyEmployeeActivityComissionArgs,
  CreateOneEmployeeActivityComissionArgs,
  DeleteManyEmployeeActivityComissionArgs,
  DeleteOneEmployeeActivityComissionArgs,
  FindFirstEmployeeActivityComissionArgs,
  FindManyEmployeeActivityComissionArgs,
  FindUniqueEmployeeActivityComissionArgs,
  EmployeeActivityComission,
  EmployeeActivityComissionAggregateArgs,
  UpdateManyEmployeeActivityComissionArgs,
  UpdateOneEmployeeActivityComissionArgs,
} from 'src/@generated';
import { EmployeeActivityComissionController } from './employeeActivityComission.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface EmployeeActivityComissionSelect {
  select: Prisma.EmployeeActivityComissionSelect;
}

@Resolver(() => EmployeeActivityComission)
export class EmployeeActivityComissionResolver {
  constructor(private readonly employeeActivityComissionController: EmployeeActivityComissionController) {}

  @Mutation(() => EmployeeActivityComission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeActivityComissionCreateOne(
    @Args()
    employeeActivityComissionCreateArgs: CreateOneEmployeeActivityComissionArgs,
    @Relations() relations: EmployeeActivityComissionSelect,
  ): Promise<EmployeeActivityComission | void> {
    return await this.employeeActivityComissionController.createOne({
      ...employeeActivityComissionCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeActivityComissionCreateMany(
    @Args()
    createManyEmployeeActivityComissionArgs: CreateManyEmployeeActivityComissionArgs,
  ) {
    return await this.employeeActivityComissionController.createMany(createManyEmployeeActivityComissionArgs);
  }

  @Query(() => EmployeeActivityComission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeActivityComissionFindOne(
    @Args()
    employeeActivityComissionFindUniqueArgs: FindUniqueEmployeeActivityComissionArgs,
    @Relations() relations: EmployeeActivityComissionSelect,
  ): Promise<EmployeeActivityComission | void> {
    return this.employeeActivityComissionController.findOne({
      ...employeeActivityComissionFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [EmployeeActivityComission], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeActivityComissionFindMany(
    @Args() employeeActivityComissionFindManyArgs: FindManyEmployeeActivityComissionArgs,
    @Relations() relations: EmployeeActivityComissionSelect,
  ) {
    return this.employeeActivityComissionController.findMany({
      ...employeeActivityComissionFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => EmployeeActivityComission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeActivityComissionFindFirst(
    @Args()
    findFirstEmployeeActivityComissionArgs: FindFirstEmployeeActivityComissionArgs,
    @Relations() relations: EmployeeActivityComissionSelect,
  ): Promise<EmployeeActivityComission | void> {
    return this.employeeActivityComissionController.findFirst({
      ...findFirstEmployeeActivityComissionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => EmployeeActivityComission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeActivityComissionUpdateOne(
    @Args() employeeActivityComissionUpdateOneArgs: UpdateOneEmployeeActivityComissionArgs,
    @Relations() relations: EmployeeActivityComissionSelect,
  ) {
    return this.employeeActivityComissionController.updateOne({
      ...replaceNullWithUndefined(employeeActivityComissionUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => EmployeeActivityComission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeActivityComissionUpdateMany(@Args() updateManyEmployeeActivityComissionArgs: UpdateManyEmployeeActivityComissionArgs) {
    return this.employeeActivityComissionController.updateMany(updateManyEmployeeActivityComissionArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeActivityComissionDelete(
    @Args() deleteOneEmployeeActivityComissionArgs: DeleteOneEmployeeActivityComissionArgs,
    @Relations() relations: EmployeeActivityComissionSelect,
  ) {
    return this.employeeActivityComissionController.delete({
      ...deleteOneEmployeeActivityComissionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeActivityComissionDeleteMany(@Args() deleteManyEmployeeActivityComissionArgs: DeleteManyEmployeeActivityComissionArgs) {
    return this.employeeActivityComissionController.deleteMany(deleteManyEmployeeActivityComissionArgs);
  }

  @Query(() => AggregateEmployeeActivityComission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeActivityComissionAggregate(@Args() employeeActivityComissionAggregateArgs: EmployeeActivityComissionAggregateArgs) {
    return this.employeeActivityComissionController.aggregate(employeeActivityComissionAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeActivityComissionCount(@Args() employeeActivityComissionCountAggregateInput: FindManyEmployeeActivityComissionArgs) {
    return this.employeeActivityComissionController.count(employeeActivityComissionCountAggregateInput);
  }
}
