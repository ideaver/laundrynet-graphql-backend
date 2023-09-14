// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOutletVoucher,
  CreateManyOutletVoucherArgs,
  CreateOneOutletVoucherArgs,
  DeleteManyOutletVoucherArgs,
  DeleteOneOutletVoucherArgs,
  FindFirstOutletVoucherArgs,
  FindManyOutletVoucherArgs,
  FindUniqueOutletVoucherArgs,
  OutletVoucher,
  OutletVoucherAggregateArgs,
  UpdateManyOutletVoucherArgs,
  UpdateOneOutletVoucherArgs,
} from 'src/@generated';
import { OutletVoucherController } from './outletVoucher.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OutletVoucherSelect {
  select: Prisma.OutletVoucherSelect;
}

@Resolver(() => OutletVoucher)
export class OutletVoucherResolver {
  constructor(private readonly outletVoucherController: OutletVoucherController) {}

  @Mutation(() => OutletVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletVoucherCreateOne(
    @Args()
    outletVoucherCreateArgs: CreateOneOutletVoucherArgs,
    @Relations() relations: OutletVoucherSelect,
  ): Promise<OutletVoucher | void> {
    return await this.outletVoucherController.createOne({
      ...outletVoucherCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletVoucherCreateMany(
    @Args()
    createManyOutletVoucherArgs: CreateManyOutletVoucherArgs,
  ) {
    return await this.outletVoucherController.createMany(createManyOutletVoucherArgs);
  }

  @Query(() => OutletVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletVoucherFindOne(
    @Args()
    outletVoucherFindUniqueArgs: FindUniqueOutletVoucherArgs,
    @Relations() relations: OutletVoucherSelect,
  ): Promise<OutletVoucher | void> {
    return this.outletVoucherController.findOne({
      ...outletVoucherFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [OutletVoucher], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletVoucherFindMany(
    @Args() outletVoucherFindManyArgs: FindManyOutletVoucherArgs,
    @Relations() relations: OutletVoucherSelect,
  ) {
    return this.outletVoucherController.findMany({
      ...outletVoucherFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => OutletVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletVoucherFindFirst(
    @Args()
    findFirstOutletVoucherArgs: FindFirstOutletVoucherArgs,
    @Relations() relations: OutletVoucherSelect,
  ): Promise<OutletVoucher | void> {
    return this.outletVoucherController.findFirst({
      ...findFirstOutletVoucherArgs,
      select: relations.select,
    });
  }

  @Mutation(() => OutletVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletVoucherUpdateOne(
    @Args() outletVoucherUpdateOneArgs: UpdateOneOutletVoucherArgs,
    @Relations() relations: OutletVoucherSelect,
  ) {
    return this.outletVoucherController.updateOne({
      ...replaceNullWithUndefined(outletVoucherUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => OutletVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async outletVoucherUpdateMany(@Args() updateManyOutletVoucherArgs: UpdateManyOutletVoucherArgs) {
    return this.outletVoucherController.updateMany(updateManyOutletVoucherArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async outletVoucherDelete(
    @Args() deleteOneOutletVoucherArgs: DeleteOneOutletVoucherArgs,
    @Relations() relations: OutletVoucherSelect,
  ) {
    return this.outletVoucherController.delete({
      ...deleteOneOutletVoucherArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async outletVoucherDeleteMany(@Args() deleteManyOutletVoucherArgs: DeleteManyOutletVoucherArgs) {
    return this.outletVoucherController.deleteMany(deleteManyOutletVoucherArgs);
  }

  @Query(() => AggregateOutletVoucher, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletVoucherAggregate(@Args() outletVoucherAggregateArgs: OutletVoucherAggregateArgs) {
    return this.outletVoucherController.aggregate(outletVoucherAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  outletVoucherCount(@Args() outletVoucherCountAggregateInput: FindManyOutletVoucherArgs) {
    return this.outletVoucherController.count(outletVoucherCountAggregateInput);
  }
}
