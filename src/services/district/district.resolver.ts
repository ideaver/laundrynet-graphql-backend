// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDistrict,
  CreateManyDistrictArgs,
  CreateOneDistrictArgs,
  DeleteManyDistrictArgs,
  DeleteOneDistrictArgs,
  FindFirstDistrictArgs,
  FindManyDistrictArgs,
  FindUniqueDistrictArgs,
  District,
  DistrictAggregateArgs,
  UpdateManyDistrictArgs,
  UpdateOneDistrictArgs,
} from 'src/@generated';
import { DistrictController } from './district.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DistrictSelect {
  select: Prisma.DistrictSelect;
}

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtController: DistrictController) {}

  @Mutation(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async districtCreateOne(
    @Args()
    districtCreateArgs: CreateOneDistrictArgs,
    @Relations() relations: DistrictSelect,
  ): Promise<District | void> {
    return await this.districtController.createOne({
      ...districtCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async districtCreateMany(
    @Args()
    createManyDistrictArgs: CreateManyDistrictArgs,
  ) {
    return await this.districtController.createMany(createManyDistrictArgs);
  }

  @Query(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindOne(
    @Args()
    districtFindUniqueArgs: FindUniqueDistrictArgs,
    @Relations() relations: DistrictSelect,
  ): Promise<District | void> {
    return this.districtController.findOne({
      ...districtFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [District], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindMany(
    @Args() districtFindManyArgs: FindManyDistrictArgs,
    @Relations() relations: DistrictSelect,
  ) {
    return this.districtController.findMany({
      ...districtFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindFirst(
    @Args()
    findFirstDistrictArgs: FindFirstDistrictArgs,
    @Relations() relations: DistrictSelect,
  ): Promise<District | void> {
    return this.districtController.findFirst({
      ...findFirstDistrictArgs,
      select: relations.select,
    });
  }

  @Mutation(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async districtUpdateOne(
    @Args() districtUpdateOneArgs: UpdateOneDistrictArgs,
    @Relations() relations: DistrictSelect,
  ) {
    return this.districtController.updateOne({
      ...replaceNullWithUndefined(districtUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async districtUpdateMany(@Args() updateManyDistrictArgs: UpdateManyDistrictArgs) {
    return this.districtController.updateMany(updateManyDistrictArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async districtDelete(
    @Args() deleteOneDistrictArgs: DeleteOneDistrictArgs,
    @Relations() relations: DistrictSelect,
  ) {
    return this.districtController.delete({
      ...deleteOneDistrictArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async districtDeleteMany(@Args() deleteManyDistrictArgs: DeleteManyDistrictArgs) {
    return this.districtController.deleteMany(deleteManyDistrictArgs);
  }

  @Query(() => AggregateDistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtAggregate(@Args() districtAggregateArgs: DistrictAggregateArgs) {
    return this.districtController.aggregate(districtAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtCount(@Args() districtCountAggregateInput: FindManyDistrictArgs) {
    return this.districtController.count(districtCountAggregateInput);
  }
}
