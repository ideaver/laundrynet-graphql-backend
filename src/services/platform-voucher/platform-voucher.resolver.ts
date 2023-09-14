// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePlatformVoucher,
  CreateManyPlatformVoucherArgs,
  CreateOnePlatformVoucherArgs,
  DeleteManyPlatformVoucherArgs,
  DeleteOnePlatformVoucherArgs,
  FindFirstPlatformVoucherArgs,
  FindManyPlatformVoucherArgs,
  FindUniquePlatformVoucherArgs,
  PlatformVoucher,
  PlatformVoucherAggregateArgs,
  UpdateManyPlatformVoucherArgs,
  UpdateOnePlatformVoucherArgs,
} from 'src/@generated';
import { PlatformVoucherController } from './platformVoucher.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PlatformVoucherSelect {
  select: Prisma.PlatformVoucherSelect;
}

@Resolver(() => PlatformVoucher)
export class PlatformVoucherResolver {
  constructor(private readonly platformVoucherController: PlatformVoucherController) {}

  @Mutation(() => PlatformVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformVoucherCreateOne(
    @Args()
    platformVoucherCreateArgs: CreateOnePlatformVoucherArgs,
    @Relations() relations: PlatformVoucherSelect,
  ): Promise<PlatformVoucher | void> {
    return await this.platformVoucherController.createOne({
      ...platformVoucherCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformVoucherCreateMany(
    @Args()
    createManyPlatformVoucherArgs: CreateManyPlatformVoucherArgs,
  ) {
    return await this.platformVoucherController.createMany(createManyPlatformVoucherArgs);
  }

  @Query(() => PlatformVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformVoucherFindOne(
    @Args()
    platformVoucherFindUniqueArgs: FindUniquePlatformVoucherArgs,
    @Relations() relations: PlatformVoucherSelect,
  ): Promise<PlatformVoucher | void> {
    return this.platformVoucherController.findOne({
      ...platformVoucherFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [PlatformVoucher], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformVoucherFindMany(
    @Args() platformVoucherFindManyArgs: FindManyPlatformVoucherArgs,
    @Relations() relations: PlatformVoucherSelect,
  ) {
    return this.platformVoucherController.findMany({
      ...platformVoucherFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => PlatformVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformVoucherFindFirst(
    @Args()
    findFirstPlatformVoucherArgs: FindFirstPlatformVoucherArgs,
    @Relations() relations: PlatformVoucherSelect,
  ): Promise<PlatformVoucher | void> {
    return this.platformVoucherController.findFirst({
      ...findFirstPlatformVoucherArgs,
      select: relations.select,
    });
  }

  @Mutation(() => PlatformVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformVoucherUpdateOne(
    @Args() platformVoucherUpdateOneArgs: UpdateOnePlatformVoucherArgs,
    @Relations() relations: PlatformVoucherSelect,
  ) {
    return this.platformVoucherController.updateOne({
      ...replaceNullWithUndefined(platformVoucherUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => PlatformVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async platformVoucherUpdateMany(@Args() updateManyPlatformVoucherArgs: UpdateManyPlatformVoucherArgs) {
    return this.platformVoucherController.updateMany(updateManyPlatformVoucherArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async platformVoucherDelete(
    @Args() deleteOnePlatformVoucherArgs: DeleteOnePlatformVoucherArgs,
    @Relations() relations: PlatformVoucherSelect,
  ) {
    return this.platformVoucherController.delete({
      ...deleteOnePlatformVoucherArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async platformVoucherDeleteMany(@Args() deleteManyPlatformVoucherArgs: DeleteManyPlatformVoucherArgs) {
    return this.platformVoucherController.deleteMany(deleteManyPlatformVoucherArgs);
  }

  @Query(() => AggregatePlatformVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformVoucherAggregate(@Args() platformVoucherAggregateArgs: PlatformVoucherAggregateArgs) {
    return this.platformVoucherController.aggregate(platformVoucherAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  platformVoucherCount(@Args() platformVoucherCountAggregateInput: FindManyPlatformVoucherArgs) {
    return this.platformVoucherController.count(platformVoucherCountAggregateInput);
  }
}
