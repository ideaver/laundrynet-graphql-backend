// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProvince,
  CreateManyProvinceArgs,
  CreateOneProvinceArgs,
  DeleteManyProvinceArgs,
  DeleteOneProvinceArgs,
  FindFirstProvinceArgs,
  FindManyProvinceArgs,
  FindUniqueProvinceArgs,
  Province,
  ProvinceAggregateArgs,
  UpdateManyProvinceArgs,
  UpdateOneProvinceArgs,
} from 'src/@generated';
import { ProvinceController } from './province.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ProvinceSelect {
  select: Prisma.ProvinceSelect;
}

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private readonly provinceController: ProvinceController) {}

  @Mutation(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async provinceCreateOne(
    @Args()
    provinceCreateArgs: CreateOneProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ): Promise<Province | void> {
    return await this.provinceController.createOne({
      ...provinceCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async provinceCreateMany(
    @Args()
    createManyProvinceArgs: CreateManyProvinceArgs,
  ) {
    return await this.provinceController.createMany(createManyProvinceArgs);
  }

  @Query(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindOne(
    @Args()
    provinceFindUniqueArgs: FindUniqueProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ): Promise<Province | void> {
    return this.provinceController.findOne({
      ...provinceFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Province], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindMany(
    @Args() provinceFindManyArgs: FindManyProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ) {
    return this.provinceController.findMany({
      ...provinceFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindFirst(
    @Args()
    findFirstProvinceArgs: FindFirstProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ): Promise<Province | void> {
    return this.provinceController.findFirst({
      ...findFirstProvinceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async provinceUpdateOne(
    @Args() provinceUpdateOneArgs: UpdateOneProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ) {
    return this.provinceController.updateOne({
      ...replaceNullWithUndefined(provinceUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async provinceUpdateMany(@Args() updateManyProvinceArgs: UpdateManyProvinceArgs) {
    return this.provinceController.updateMany(updateManyProvinceArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async provinceDelete(
    @Args() deleteOneProvinceArgs: DeleteOneProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ) {
    return this.provinceController.delete({
      ...deleteOneProvinceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async provinceDeleteMany(@Args() deleteManyProvinceArgs: DeleteManyProvinceArgs) {
    return this.provinceController.deleteMany(deleteManyProvinceArgs);
  }

  @Query(() => AggregateProvince, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceAggregate(@Args() provinceAggregateArgs: ProvinceAggregateArgs) {
    return this.provinceController.aggregate(provinceAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceCount(@Args() provinceCountAggregateInput: FindManyProvinceArgs) {
    return this.provinceController.count(provinceCountAggregateInput);
  }
}
