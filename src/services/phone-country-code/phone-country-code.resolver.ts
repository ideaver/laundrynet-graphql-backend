// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePhoneCountryCode,
  CreateManyPhoneCountryCodeArgs,
  CreateOnePhoneCountryCodeArgs,
  DeleteManyPhoneCountryCodeArgs,
  DeleteOnePhoneCountryCodeArgs,
  FindFirstPhoneCountryCodeArgs,
  FindManyPhoneCountryCodeArgs,
  FindUniquePhoneCountryCodeArgs,
  PhoneCountryCode,
  PhoneCountryCodeAggregateArgs,
  UpdateManyPhoneCountryCodeArgs,
  UpdateOnePhoneCountryCodeArgs,
} from 'src/@generated';
import { PhoneCountryCodeController } from './phoneCountryCode.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PhoneCountryCodeSelect {
  select: Prisma.PhoneCountryCodeSelect;
}

@Resolver(() => PhoneCountryCode)
export class PhoneCountryCodeResolver {
  constructor(private readonly phoneCountryCodeController: PhoneCountryCodeController) {}

  @Mutation(() => PhoneCountryCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async phoneCountryCodeCreateOne(
    @Args()
    phoneCountryCodeCreateArgs: CreateOnePhoneCountryCodeArgs,
    @Relations() relations: PhoneCountryCodeSelect,
  ): Promise<PhoneCountryCode | void> {
    return await this.phoneCountryCodeController.createOne({
      ...phoneCountryCodeCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async phoneCountryCodeCreateMany(
    @Args()
    createManyPhoneCountryCodeArgs: CreateManyPhoneCountryCodeArgs,
  ) {
    return await this.phoneCountryCodeController.createMany(createManyPhoneCountryCodeArgs);
  }

  @Query(() => PhoneCountryCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  phoneCountryCodeFindOne(
    @Args()
    phoneCountryCodeFindUniqueArgs: FindUniquePhoneCountryCodeArgs,
    @Relations() relations: PhoneCountryCodeSelect,
  ): Promise<PhoneCountryCode | void> {
    return this.phoneCountryCodeController.findOne({
      ...phoneCountryCodeFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [PhoneCountryCode], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  phoneCountryCodeFindMany(
    @Args() phoneCountryCodeFindManyArgs: FindManyPhoneCountryCodeArgs,
    @Relations() relations: PhoneCountryCodeSelect,
  ) {
    return this.phoneCountryCodeController.findMany({
      ...phoneCountryCodeFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => PhoneCountryCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  phoneCountryCodeFindFirst(
    @Args()
    findFirstPhoneCountryCodeArgs: FindFirstPhoneCountryCodeArgs,
    @Relations() relations: PhoneCountryCodeSelect,
  ): Promise<PhoneCountryCode | void> {
    return this.phoneCountryCodeController.findFirst({
      ...findFirstPhoneCountryCodeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => PhoneCountryCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async phoneCountryCodeUpdateOne(
    @Args() phoneCountryCodeUpdateOneArgs: UpdateOnePhoneCountryCodeArgs,
    @Relations() relations: PhoneCountryCodeSelect,
  ) {
    return this.phoneCountryCodeController.updateOne({
      ...replaceNullWithUndefined(phoneCountryCodeUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => PhoneCountryCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async phoneCountryCodeUpdateMany(@Args() updateManyPhoneCountryCodeArgs: UpdateManyPhoneCountryCodeArgs) {
    return this.phoneCountryCodeController.updateMany(updateManyPhoneCountryCodeArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async phoneCountryCodeDelete(
    @Args() deleteOnePhoneCountryCodeArgs: DeleteOnePhoneCountryCodeArgs,
    @Relations() relations: PhoneCountryCodeSelect,
  ) {
    return this.phoneCountryCodeController.delete({
      ...deleteOnePhoneCountryCodeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async phoneCountryCodeDeleteMany(@Args() deleteManyPhoneCountryCodeArgs: DeleteManyPhoneCountryCodeArgs) {
    return this.phoneCountryCodeController.deleteMany(deleteManyPhoneCountryCodeArgs);
  }

  @Query(() => AggregatePhoneCountryCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  phoneCountryCodeAggregate(@Args() phoneCountryCodeAggregateArgs: PhoneCountryCodeAggregateArgs) {
    return this.phoneCountryCodeController.aggregate(phoneCountryCodeAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  phoneCountryCodeCount(@Args() phoneCountryCodeCountAggregateInput: FindManyPhoneCountryCodeArgs) {
    return this.phoneCountryCodeController.count(phoneCountryCodeCountAggregateInput);
  }
}
