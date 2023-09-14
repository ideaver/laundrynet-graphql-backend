// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateAccountSetting,
  CreateManyAccountSettingArgs,
  CreateOneAccountSettingArgs,
  DeleteManyAccountSettingArgs,
  DeleteOneAccountSettingArgs,
  FindFirstAccountSettingArgs,
  FindManyAccountSettingArgs,
  FindUniqueAccountSettingArgs,
  AccountSetting,
  AccountSettingAggregateArgs,
  UpdateManyAccountSettingArgs,
  UpdateOneAccountSettingArgs,
} from 'src/@generated';
import { AccountSettingController } from './accountSetting.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface AccountSettingSelect {
  select: Prisma.AccountSettingSelect;
}

@Resolver(() => AccountSetting)
export class AccountSettingResolver {
  constructor(private readonly accountSettingController: AccountSettingController) {}

  @Mutation(() => AccountSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accountSettingCreateOne(
    @Args()
    accountSettingCreateArgs: CreateOneAccountSettingArgs,
    @Relations() relations: AccountSettingSelect,
  ): Promise<AccountSetting | void> {
    return await this.accountSettingController.createOne({
      ...accountSettingCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accountSettingCreateMany(
    @Args()
    createManyAccountSettingArgs: CreateManyAccountSettingArgs,
  ) {
    return await this.accountSettingController.createMany(createManyAccountSettingArgs);
  }

  @Query(() => AccountSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountSettingFindOne(
    @Args()
    accountSettingFindUniqueArgs: FindUniqueAccountSettingArgs,
    @Relations() relations: AccountSettingSelect,
  ): Promise<AccountSetting | void> {
    return this.accountSettingController.findOne({
      ...accountSettingFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [AccountSetting], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountSettingFindMany(
    @Args() accountSettingFindManyArgs: FindManyAccountSettingArgs,
    @Relations() relations: AccountSettingSelect,
  ) {
    return this.accountSettingController.findMany({
      ...accountSettingFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => AccountSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountSettingFindFirst(
    @Args()
    findFirstAccountSettingArgs: FindFirstAccountSettingArgs,
    @Relations() relations: AccountSettingSelect,
  ): Promise<AccountSetting | void> {
    return this.accountSettingController.findFirst({
      ...findFirstAccountSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => AccountSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accountSettingUpdateOne(
    @Args() accountSettingUpdateOneArgs: UpdateOneAccountSettingArgs,
    @Relations() relations: AccountSettingSelect,
  ) {
    return this.accountSettingController.updateOne({
      ...replaceNullWithUndefined(accountSettingUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => AccountSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accountSettingUpdateMany(@Args() updateManyAccountSettingArgs: UpdateManyAccountSettingArgs) {
    return this.accountSettingController.updateMany(updateManyAccountSettingArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async accountSettingDelete(
    @Args() deleteOneAccountSettingArgs: DeleteOneAccountSettingArgs,
    @Relations() relations: AccountSettingSelect,
  ) {
    return this.accountSettingController.delete({
      ...deleteOneAccountSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async accountSettingDeleteMany(@Args() deleteManyAccountSettingArgs: DeleteManyAccountSettingArgs) {
    return this.accountSettingController.deleteMany(deleteManyAccountSettingArgs);
  }

  @Query(() => AggregateAccountSetting, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountSettingAggregate(@Args() accountSettingAggregateArgs: AccountSettingAggregateArgs) {
    return this.accountSettingController.aggregate(accountSettingAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountSettingCount(@Args() accountSettingCountAggregateInput: FindManyAccountSettingArgs) {
    return this.accountSettingController.count(accountSettingCountAggregateInput);
  }
}
