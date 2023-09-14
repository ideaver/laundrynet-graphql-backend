// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateBusinessHour,
  CreateManyBusinessHourArgs,
  CreateOneBusinessHourArgs,
  DeleteManyBusinessHourArgs,
  DeleteOneBusinessHourArgs,
  FindFirstBusinessHourArgs,
  FindManyBusinessHourArgs,
  FindUniqueBusinessHourArgs,
  BusinessHour,
  BusinessHourAggregateArgs,
  UpdateManyBusinessHourArgs,
  UpdateOneBusinessHourArgs,
} from 'src/@generated';
import { BusinessHourController } from './businessHour.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface BusinessHourSelect {
  select: Prisma.BusinessHourSelect;
}

@Resolver(() => BusinessHour)
export class BusinessHourResolver {
  constructor(private readonly businessHourController: BusinessHourController) {}

  @Mutation(() => BusinessHour, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async businessHourCreateOne(
    @Args()
    businessHourCreateArgs: CreateOneBusinessHourArgs,
    @Relations() relations: BusinessHourSelect,
  ): Promise<BusinessHour | void> {
    return await this.businessHourController.createOne({
      ...businessHourCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async businessHourCreateMany(
    @Args()
    createManyBusinessHourArgs: CreateManyBusinessHourArgs,
  ) {
    return await this.businessHourController.createMany(createManyBusinessHourArgs);
  }

  @Query(() => BusinessHour, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  businessHourFindOne(
    @Args()
    businessHourFindUniqueArgs: FindUniqueBusinessHourArgs,
    @Relations() relations: BusinessHourSelect,
  ): Promise<BusinessHour | void> {
    return this.businessHourController.findOne({
      ...businessHourFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [BusinessHour], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  businessHourFindMany(
    @Args() businessHourFindManyArgs: FindManyBusinessHourArgs,
    @Relations() relations: BusinessHourSelect,
  ) {
    return this.businessHourController.findMany({
      ...businessHourFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => BusinessHour, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  businessHourFindFirst(
    @Args()
    findFirstBusinessHourArgs: FindFirstBusinessHourArgs,
    @Relations() relations: BusinessHourSelect,
  ): Promise<BusinessHour | void> {
    return this.businessHourController.findFirst({
      ...findFirstBusinessHourArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BusinessHour, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async businessHourUpdateOne(
    @Args() businessHourUpdateOneArgs: UpdateOneBusinessHourArgs,
    @Relations() relations: BusinessHourSelect,
  ) {
    return this.businessHourController.updateOne({
      ...replaceNullWithUndefined(businessHourUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BusinessHour, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async businessHourUpdateMany(@Args() updateManyBusinessHourArgs: UpdateManyBusinessHourArgs) {
    return this.businessHourController.updateMany(updateManyBusinessHourArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async businessHourDelete(
    @Args() deleteOneBusinessHourArgs: DeleteOneBusinessHourArgs,
    @Relations() relations: BusinessHourSelect,
  ) {
    return this.businessHourController.delete({
      ...deleteOneBusinessHourArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async businessHourDeleteMany(@Args() deleteManyBusinessHourArgs: DeleteManyBusinessHourArgs) {
    return this.businessHourController.deleteMany(deleteManyBusinessHourArgs);
  }

  @Query(() => AggregateBusinessHour, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  businessHourAggregate(@Args() businessHourAggregateArgs: BusinessHourAggregateArgs) {
    return this.businessHourController.aggregate(businessHourAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  businessHourCount(@Args() businessHourCountAggregateInput: FindManyBusinessHourArgs) {
    return this.businessHourController.count(businessHourCountAggregateInput);
  }
}
