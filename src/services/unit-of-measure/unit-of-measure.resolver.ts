// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateUnitOfMeasure,
  CreateManyUnitOfMeasureArgs,
  CreateOneUnitOfMeasureArgs,
  DeleteManyUnitOfMeasureArgs,
  DeleteOneUnitOfMeasureArgs,
  FindFirstUnitOfMeasureArgs,
  FindManyUnitOfMeasureArgs,
  FindUniqueUnitOfMeasureArgs,
  UnitOfMeasure,
  UnitOfMeasureAggregateArgs,
  UpdateManyUnitOfMeasureArgs,
  UpdateOneUnitOfMeasureArgs,
} from 'src/@generated';
import { UnitOfMeasureController } from './unit-of-measure.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface UnitOfMeasureSelect {
  select: Prisma.UnitOfMeasureSelect;
}

@Resolver(() => UnitOfMeasure)
export class UnitOfMeasureResolver {
  constructor(private readonly unitOfMeasureController: UnitOfMeasureController) {}

  @Mutation(() => UnitOfMeasure, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async unitOfMeasureCreateOne(
    @Args()
    unitOfMeasureCreateArgs: CreateOneUnitOfMeasureArgs,
    @Relations() relations: UnitOfMeasureSelect,
  ): Promise<UnitOfMeasure | void> {
    return await this.unitOfMeasureController.createOne({
      ...unitOfMeasureCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async unitOfMeasureCreateMany(
    @Args()
    createManyUnitOfMeasureArgs: CreateManyUnitOfMeasureArgs,
  ) {
    return await this.unitOfMeasureController.createMany(createManyUnitOfMeasureArgs);
  }

  @Query(() => UnitOfMeasure, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  unitOfMeasureFindOne(
    @Args()
    unitOfMeasureFindUniqueArgs: FindUniqueUnitOfMeasureArgs,
    @Relations() relations: UnitOfMeasureSelect,
  ): Promise<UnitOfMeasure | void> {
    return this.unitOfMeasureController.findOne({
      ...unitOfMeasureFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [UnitOfMeasure], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  unitOfMeasureFindMany(
    @Args() unitOfMeasureFindManyArgs: FindManyUnitOfMeasureArgs,
    @Relations() relations: UnitOfMeasureSelect,
  ) {
    return this.unitOfMeasureController.findMany({
      ...unitOfMeasureFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => UnitOfMeasure, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  unitOfMeasureFindFirst(
    @Args()
    findFirstUnitOfMeasureArgs: FindFirstUnitOfMeasureArgs,
    @Relations() relations: UnitOfMeasureSelect,
  ): Promise<UnitOfMeasure | void> {
    return this.unitOfMeasureController.findFirst({
      ...findFirstUnitOfMeasureArgs,
      select: relations.select,
    });
  }

  @Mutation(() => UnitOfMeasure, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async unitOfMeasureUpdateOne(
    @Args() unitOfMeasureUpdateOneArgs: UpdateOneUnitOfMeasureArgs,
    @Relations() relations: UnitOfMeasureSelect,
  ) {
    return this.unitOfMeasureController.updateOne({
      ...replaceNullWithUndefined(unitOfMeasureUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => UnitOfMeasure, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async unitOfMeasureUpdateMany(@Args() updateManyUnitOfMeasureArgs: UpdateManyUnitOfMeasureArgs) {
    return this.unitOfMeasureController.updateMany(updateManyUnitOfMeasureArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async unitOfMeasureDelete(
    @Args() deleteOneUnitOfMeasureArgs: DeleteOneUnitOfMeasureArgs,
    @Relations() relations: UnitOfMeasureSelect,
  ) {
    return this.unitOfMeasureController.delete({
      ...deleteOneUnitOfMeasureArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async unitOfMeasureDeleteMany(@Args() deleteManyUnitOfMeasureArgs: DeleteManyUnitOfMeasureArgs) {
    return this.unitOfMeasureController.deleteMany(deleteManyUnitOfMeasureArgs);
  }

  @Query(() => AggregateUnitOfMeasure, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  unitOfMeasureAggregate(@Args() unitOfMeasureAggregateArgs: UnitOfMeasureAggregateArgs) {
    return this.unitOfMeasureController.aggregate(unitOfMeasureAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  unitOfMeasureCount(@Args() unitOfMeasureCountAggregateInput: FindManyUnitOfMeasureArgs) {
    return this.unitOfMeasureController.count(unitOfMeasureCountAggregateInput);
  }
}
