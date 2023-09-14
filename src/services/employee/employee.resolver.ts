// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateEmployee,
  CreateManyEmployeeArgs,
  CreateOneEmployeeArgs,
  DeleteManyEmployeeArgs,
  DeleteOneEmployeeArgs,
  FindFirstEmployeeArgs,
  FindManyEmployeeArgs,
  FindUniqueEmployeeArgs,
  Employee,
  EmployeeAggregateArgs,
  UpdateManyEmployeeArgs,
  UpdateOneEmployeeArgs,
} from 'src/@generated';
import { EmployeeController } from './employee.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface EmployeeSelect {
  select: Prisma.EmployeeSelect;
}

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeController: EmployeeController) {}

  @Mutation(() => Employee, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeCreateOne(
    @Args()
    employeeCreateArgs: CreateOneEmployeeArgs,
    @Relations() relations: EmployeeSelect,
  ): Promise<Employee | void> {
    return await this.employeeController.createOne({
      ...employeeCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeCreateMany(
    @Args()
    createManyEmployeeArgs: CreateManyEmployeeArgs,
  ) {
    return await this.employeeController.createMany(createManyEmployeeArgs);
  }

  @Query(() => Employee, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeFindOne(
    @Args()
    employeeFindUniqueArgs: FindUniqueEmployeeArgs,
    @Relations() relations: EmployeeSelect,
  ): Promise<Employee | void> {
    return this.employeeController.findOne({
      ...employeeFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Employee], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeFindMany(
    @Args() employeeFindManyArgs: FindManyEmployeeArgs,
    @Relations() relations: EmployeeSelect,
  ) {
    return this.employeeController.findMany({
      ...employeeFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Employee, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeFindFirst(
    @Args()
    findFirstEmployeeArgs: FindFirstEmployeeArgs,
    @Relations() relations: EmployeeSelect,
  ): Promise<Employee | void> {
    return this.employeeController.findFirst({
      ...findFirstEmployeeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Employee, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeUpdateOne(
    @Args() employeeUpdateOneArgs: UpdateOneEmployeeArgs,
    @Relations() relations: EmployeeSelect,
  ) {
    return this.employeeController.updateOne({
      ...replaceNullWithUndefined(employeeUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Employee, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeUpdateMany(@Args() updateManyEmployeeArgs: UpdateManyEmployeeArgs) {
    return this.employeeController.updateMany(updateManyEmployeeArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeDelete(
    @Args() deleteOneEmployeeArgs: DeleteOneEmployeeArgs,
    @Relations() relations: EmployeeSelect,
  ) {
    return this.employeeController.delete({
      ...deleteOneEmployeeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async employeeDeleteMany(@Args() deleteManyEmployeeArgs: DeleteManyEmployeeArgs) {
    return this.employeeController.deleteMany(deleteManyEmployeeArgs);
  }

  @Query(() => AggregateEmployee, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeAggregate(@Args() employeeAggregateArgs: EmployeeAggregateArgs) {
    return this.employeeController.aggregate(employeeAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  employeeCount(@Args() employeeCountAggregateInput: FindManyEmployeeArgs) {
    return this.employeeController.count(employeeCountAggregateInput);
  }
}
