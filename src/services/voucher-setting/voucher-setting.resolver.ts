// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateVoucherSetting,
  CreateManyVoucherSettingArgs,
  CreateOneVoucherSettingArgs,
  DeleteManyVoucherSettingArgs,
  DeleteOneVoucherSettingArgs,
  FindFirstVoucherSettingArgs,
  FindManyVoucherSettingArgs,
  FindUniqueVoucherSettingArgs,
  VoucherSetting,
  VoucherSettingAggregateArgs,
  UpdateManyVoucherSettingArgs,
  UpdateOneVoucherSettingArgs,
} from 'src/@generated';
import { VoucherSettingController } from './voucherSetting.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface VoucherSettingSelect {
  select: Prisma.VoucherSettingSelect;
}

@Resolver(() => VoucherSetting)
export class VoucherSettingResolver {
  constructor(private readonly voucherSettingController: VoucherSettingController) {}

  @Mutation(() => VoucherSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async voucherSettingCreateOne(
    @Args()
    voucherSettingCreateArgs: CreateOneVoucherSettingArgs,
    @Relations() relations: VoucherSettingSelect,
  ): Promise<VoucherSetting | void> {
    return await this.voucherSettingController.createOne({
      ...voucherSettingCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async voucherSettingCreateMany(
    @Args()
    createManyVoucherSettingArgs: CreateManyVoucherSettingArgs,
  ) {
    return await this.voucherSettingController.createMany(createManyVoucherSettingArgs);
  }

  @Query(() => VoucherSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  voucherSettingFindOne(
    @Args()
    voucherSettingFindUniqueArgs: FindUniqueVoucherSettingArgs,
    @Relations() relations: VoucherSettingSelect,
  ): Promise<VoucherSetting | void> {
    return this.voucherSettingController.findOne({
      ...voucherSettingFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [VoucherSetting], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  voucherSettingFindMany(
    @Args() voucherSettingFindManyArgs: FindManyVoucherSettingArgs,
    @Relations() relations: VoucherSettingSelect,
  ) {
    return this.voucherSettingController.findMany({
      ...voucherSettingFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => VoucherSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  voucherSettingFindFirst(
    @Args()
    findFirstVoucherSettingArgs: FindFirstVoucherSettingArgs,
    @Relations() relations: VoucherSettingSelect,
  ): Promise<VoucherSetting | void> {
    return this.voucherSettingController.findFirst({
      ...findFirstVoucherSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => VoucherSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async voucherSettingUpdateOne(
    @Args() voucherSettingUpdateOneArgs: UpdateOneVoucherSettingArgs,
    @Relations() relations: VoucherSettingSelect,
  ) {
    return this.voucherSettingController.updateOne({
      ...replaceNullWithUndefined(voucherSettingUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => VoucherSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async voucherSettingUpdateMany(@Args() updateManyVoucherSettingArgs: UpdateManyVoucherSettingArgs) {
    return this.voucherSettingController.updateMany(updateManyVoucherSettingArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async voucherSettingDelete(
    @Args() deleteOneVoucherSettingArgs: DeleteOneVoucherSettingArgs,
    @Relations() relations: VoucherSettingSelect,
  ) {
    return this.voucherSettingController.delete({
      ...deleteOneVoucherSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async voucherSettingDeleteMany(@Args() deleteManyVoucherSettingArgs: DeleteManyVoucherSettingArgs) {
    return this.voucherSettingController.deleteMany(deleteManyVoucherSettingArgs);
  }

  @Query(() => AggregateVoucherSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  voucherSettingAggregate(@Args() voucherSettingAggregateArgs: VoucherSettingAggregateArgs) {
    return this.voucherSettingController.aggregate(voucherSettingAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  voucherSettingCount(@Args() voucherSettingCountAggregateInput: FindManyVoucherSettingArgs) {
    return this.voucherSettingController.count(voucherSettingCountAggregateInput);
  }
}
