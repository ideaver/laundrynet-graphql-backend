// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateNotification,
  CreateManyNotificationArgs,
  CreateOneNotificationArgs,
  DeleteManyNotificationArgs,
  DeleteOneNotificationArgs,
  FindFirstNotificationArgs,
  FindManyNotificationArgs,
  FindUniqueNotificationArgs,
  Notification,
  NotificationAggregateArgs,
  UpdateManyNotificationArgs,
  UpdateOneNotificationArgs,
} from 'src/@generated';
import { NotificationController } from './notification.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface NotificationSelect {
  select: Prisma.NotificationSelect;
}

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationController: NotificationController) {}

  @Mutation(() => Notification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async notificationCreateOne(
    @Args()
    notificationCreateArgs: CreateOneNotificationArgs,
    @Relations() relations: NotificationSelect,
  ): Promise<Notification | void> {
    return await this.notificationController.createOne({
      ...notificationCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async notificationCreateMany(
    @Args()
    createManyNotificationArgs: CreateManyNotificationArgs,
  ) {
    return await this.notificationController.createMany(createManyNotificationArgs);
  }

  @Query(() => Notification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  notificationFindOne(
    @Args()
    notificationFindUniqueArgs: FindUniqueNotificationArgs,
    @Relations() relations: NotificationSelect,
  ): Promise<Notification | void> {
    return this.notificationController.findOne({
      ...notificationFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Notification], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  notificationFindMany(
    @Args() notificationFindManyArgs: FindManyNotificationArgs,
    @Relations() relations: NotificationSelect,
  ) {
    return this.notificationController.findMany({
      ...notificationFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Notification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  notificationFindFirst(
    @Args()
    findFirstNotificationArgs: FindFirstNotificationArgs,
    @Relations() relations: NotificationSelect,
  ): Promise<Notification | void> {
    return this.notificationController.findFirst({
      ...findFirstNotificationArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Notification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async notificationUpdateOne(
    @Args() notificationUpdateOneArgs: UpdateOneNotificationArgs,
    @Relations() relations: NotificationSelect,
  ) {
    return this.notificationController.updateOne({
      ...replaceNullWithUndefined(notificationUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Notification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async notificationUpdateMany(@Args() updateManyNotificationArgs: UpdateManyNotificationArgs) {
    return this.notificationController.updateMany(updateManyNotificationArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async notificationDelete(
    @Args() deleteOneNotificationArgs: DeleteOneNotificationArgs,
    @Relations() relations: NotificationSelect,
  ) {
    return this.notificationController.delete({
      ...deleteOneNotificationArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async notificationDeleteMany(@Args() deleteManyNotificationArgs: DeleteManyNotificationArgs) {
    return this.notificationController.deleteMany(deleteManyNotificationArgs);
  }

  @Query(() => AggregateNotification, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  notificationAggregate(@Args() notificationAggregateArgs: NotificationAggregateArgs) {
    return this.notificationController.aggregate(notificationAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  notificationCount(@Args() notificationCountAggregateInput: FindManyNotificationArgs) {
    return this.notificationController.count(notificationCountAggregateInput);
  }
}
