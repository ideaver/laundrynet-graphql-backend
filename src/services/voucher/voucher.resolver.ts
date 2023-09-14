// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateVoucher,
  CreateManyVoucherArgs,
  CreateOneVoucherArgs,
  DeleteManyVoucherArgs,
  DeleteOneVoucherArgs,
  FindFirstVoucherArgs,
  FindManyVoucherArgs,
  FindUniqueVoucherArgs,
  Voucher,
  VoucherAggregateArgs,
  UpdateManyVoucherArgs,
  UpdateOneVoucherArgs,
} from 'src/@generated';
import { VoucherController } from './voucher.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface VoucherSelect {
  select: Prisma.VoucherSelect;
}

@Resolver(() => Voucher)
export class VoucherResolver {
  constructor(private readonly voucherController: VoucherController) {}

  @Mutation(() => Voucher, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async voucherCreateOne(
    @Args()
    voucherCreateArgs: CreateOneVoucherArgs,
    @Relations() relations: VoucherSelect,
  ): Promise<Voucher | void> {
    return await this.voucherController.createOne({
      ...voucherCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async voucherCreateMany(
    @Args()
    createManyVoucherArgs: CreateManyVoucherArgs,
  ) {
    return await this.voucherController.createMany(createManyVoucherArgs);
  }

  @Query(() => Voucher, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  voucherFindOne(
    @Args()
    voucherFindUniqueArgs: FindUniqueVoucherArgs,
    @Relations() relations: VoucherSelect,
  ): Promise<Voucher | void> {
    return this.voucherController.findOne({
      ...voucherFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Voucher], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  voucherFindMany(
    @Args() voucherFindManyArgs: FindManyVoucherArgs,
    @Relations() relations: VoucherSelect,
  ) {
    return this.voucherController.findMany({
      ...voucherFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Voucher, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  voucherFindFirst(
    @Args()
    findFirstVoucherArgs: FindFirstVoucherArgs,
    @Relations() relations: VoucherSelect,
  ): Promise<Voucher | void> {
    return this.voucherController.findFirst({
      ...findFirstVoucherArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Voucher, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async voucherUpdateOne(
    @Args() voucherUpdateOneArgs: UpdateOneVoucherArgs,
    @Relations() relations: VoucherSelect,
  ) {
    return this.voucherController.updateOne({
      ...replaceNullWithUndefined(voucherUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Voucher, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async voucherUpdateMany(@Args() updateManyVoucherArgs: UpdateManyVoucherArgs) {
    return this.voucherController.updateMany(updateManyVoucherArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async voucherDelete(
    @Args() deleteOneVoucherArgs: DeleteOneVoucherArgs,
    @Relations() relations: VoucherSelect,
  ) {
    return this.voucherController.delete({
      ...deleteOneVoucherArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async voucherDeleteMany(@Args() deleteManyVoucherArgs: DeleteManyVoucherArgs) {
    return this.voucherController.deleteMany(deleteManyVoucherArgs);
  }

  @Query(() => AggregateVoucher, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  voucherAggregate(@Args() voucherAggregateArgs: VoucherAggregateArgs) {
    return this.voucherController.aggregate(voucherAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  voucherCount(@Args() voucherCountAggregateInput: FindManyVoucherArgs) {
    return this.voucherController.count(voucherCountAggregateInput);
  }
}
