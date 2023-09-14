// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateSchedule,
  CreateManyScheduleArgs,
  CreateOneScheduleArgs,
  DeleteManyScheduleArgs,
  DeleteOneScheduleArgs,
  FindFirstScheduleArgs,
  FindManyScheduleArgs,
  FindUniqueScheduleArgs,
  Schedule,
  ScheduleAggregateArgs,
  UpdateManyScheduleArgs,
  UpdateOneScheduleArgs,
} from 'src/@generated';
import { ScheduleController } from './schedule.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ScheduleSelect {
  select: Prisma.ScheduleSelect;
}

@Resolver(() => Schedule)
export class ScheduleResolver {
  constructor(private readonly scheduleController: ScheduleController) {}

  @Mutation(() => Schedule, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async scheduleCreateOne(
    @Args()
    scheduleCreateArgs: CreateOneScheduleArgs,
    @Relations() relations: ScheduleSelect,
  ): Promise<Schedule | void> {
    return await this.scheduleController.createOne({
      ...scheduleCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async scheduleCreateMany(
    @Args()
    createManyScheduleArgs: CreateManyScheduleArgs,
  ) {
    return await this.scheduleController.createMany(createManyScheduleArgs);
  }

  @Query(() => Schedule, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  scheduleFindOne(
    @Args()
    scheduleFindUniqueArgs: FindUniqueScheduleArgs,
    @Relations() relations: ScheduleSelect,
  ): Promise<Schedule | void> {
    return this.scheduleController.findOne({
      ...scheduleFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Schedule], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  scheduleFindMany(
    @Args() scheduleFindManyArgs: FindManyScheduleArgs,
    @Relations() relations: ScheduleSelect,
  ) {
    return this.scheduleController.findMany({
      ...scheduleFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Schedule, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  scheduleFindFirst(
    @Args()
    findFirstScheduleArgs: FindFirstScheduleArgs,
    @Relations() relations: ScheduleSelect,
  ): Promise<Schedule | void> {
    return this.scheduleController.findFirst({
      ...findFirstScheduleArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Schedule, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async scheduleUpdateOne(
    @Args() scheduleUpdateOneArgs: UpdateOneScheduleArgs,
    @Relations() relations: ScheduleSelect,
  ) {
    return this.scheduleController.updateOne({
      ...replaceNullWithUndefined(scheduleUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Schedule, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async scheduleUpdateMany(@Args() updateManyScheduleArgs: UpdateManyScheduleArgs) {
    return this.scheduleController.updateMany(updateManyScheduleArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async scheduleDelete(
    @Args() deleteOneScheduleArgs: DeleteOneScheduleArgs,
    @Relations() relations: ScheduleSelect,
  ) {
    return this.scheduleController.delete({
      ...deleteOneScheduleArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async scheduleDeleteMany(@Args() deleteManyScheduleArgs: DeleteManyScheduleArgs) {
    return this.scheduleController.deleteMany(deleteManyScheduleArgs);
  }

  @Query(() => AggregateSchedule, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  scheduleAggregate(@Args() scheduleAggregateArgs: ScheduleAggregateArgs) {
    return this.scheduleController.aggregate(scheduleAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  scheduleCount(@Args() scheduleCountAggregateInput: FindManyScheduleArgs) {
    return this.scheduleController.count(scheduleCountAggregateInput);
  }
}
