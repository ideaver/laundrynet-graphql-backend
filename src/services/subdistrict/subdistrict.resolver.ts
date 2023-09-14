// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateSubdistrict,
  CreateManySubdistrictArgs,
  CreateOneSubdistrictArgs,
  DeleteManySubdistrictArgs,
  DeleteOneSubdistrictArgs,
  FindFirstSubdistrictArgs,
  FindManySubdistrictArgs,
  FindUniqueSubdistrictArgs,
  Subdistrict,
  SubdistrictAggregateArgs,
  UpdateManySubdistrictArgs,
  UpdateOneSubdistrictArgs,
} from 'src/@generated';
import { SubdistrictController } from './subdistrict.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface SubdistrictSelect {
  select: Prisma.SubdistrictSelect;
}

@Resolver(() => Subdistrict)
export class SubdistrictResolver {
  constructor(private readonly subdistrictController: SubdistrictController) {}

  @Mutation(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async subdistrictCreateOne(
    @Args()
    subdistrictCreateArgs: CreateOneSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ): Promise<Subdistrict | void> {
    return await this.subdistrictController.createOne({
      ...subdistrictCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async subdistrictCreateMany(
    @Args()
    createManySubdistrictArgs: CreateManySubdistrictArgs,
  ) {
    return await this.subdistrictController.createMany(createManySubdistrictArgs);
  }

  @Query(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindOne(
    @Args()
    subdistrictFindUniqueArgs: FindUniqueSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ): Promise<Subdistrict | void> {
    return this.subdistrictController.findOne({
      ...subdistrictFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Subdistrict], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindMany(
    @Args() subdistrictFindManyArgs: FindManySubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ) {
    return this.subdistrictController.findMany({
      ...subdistrictFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindFirst(
    @Args()
    findFirstSubdistrictArgs: FindFirstSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ): Promise<Subdistrict | void> {
    return this.subdistrictController.findFirst({
      ...findFirstSubdistrictArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async subdistrictUpdateOne(
    @Args() subdistrictUpdateOneArgs: UpdateOneSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ) {
    return this.subdistrictController.updateOne({
      ...replaceNullWithUndefined(subdistrictUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async subdistrictUpdateMany(@Args() updateManySubdistrictArgs: UpdateManySubdistrictArgs) {
    return this.subdistrictController.updateMany(updateManySubdistrictArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async subdistrictDelete(
    @Args() deleteOneSubdistrictArgs: DeleteOneSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ) {
    return this.subdistrictController.delete({
      ...deleteOneSubdistrictArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async subdistrictDeleteMany(@Args() deleteManySubdistrictArgs: DeleteManySubdistrictArgs) {
    return this.subdistrictController.deleteMany(deleteManySubdistrictArgs);
  }

  @Query(() => AggregateSubdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictAggregate(@Args() subdistrictAggregateArgs: SubdistrictAggregateArgs) {
    return this.subdistrictController.aggregate(subdistrictAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictCount(@Args() subdistrictCountAggregateInput: FindManySubdistrictArgs) {
    return this.subdistrictController.count(subdistrictCountAggregateInput);
  }
}
