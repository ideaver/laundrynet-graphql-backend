// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateMessage,
  CreateManyMessageArgs,
  CreateOneMessageArgs,
  DeleteManyMessageArgs,
  DeleteOneMessageArgs,
  FindFirstMessageArgs,
  FindManyMessageArgs,
  FindUniqueMessageArgs,
  Message,
  MessageAggregateArgs,
  UpdateManyMessageArgs,
  UpdateOneMessageArgs,
} from 'src/@generated';
import { MessageController } from './message.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface MessageSelect {
  select: Prisma.MessageSelect;
}

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageController: MessageController) {}

  @Mutation(() => Message, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async messageCreateOne(
    @Args()
    messageCreateArgs: CreateOneMessageArgs,
    @Relations() relations: MessageSelect,
  ): Promise<Message | void> {
    return await this.messageController.createOne({
      ...messageCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async messageCreateMany(
    @Args()
    createManyMessageArgs: CreateManyMessageArgs,
  ) {
    return await this.messageController.createMany(createManyMessageArgs);
  }

  @Query(() => Message, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  messageFindOne(
    @Args()
    messageFindUniqueArgs: FindUniqueMessageArgs,
    @Relations() relations: MessageSelect,
  ): Promise<Message | void> {
    return this.messageController.findOne({
      ...messageFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Message], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  messageFindMany(
    @Args() messageFindManyArgs: FindManyMessageArgs,
    @Relations() relations: MessageSelect,
  ) {
    return this.messageController.findMany({
      ...messageFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Message, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  messageFindFirst(
    @Args()
    findFirstMessageArgs: FindFirstMessageArgs,
    @Relations() relations: MessageSelect,
  ): Promise<Message | void> {
    return this.messageController.findFirst({
      ...findFirstMessageArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Message, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async messageUpdateOne(
    @Args() messageUpdateOneArgs: UpdateOneMessageArgs,
    @Relations() relations: MessageSelect,
  ) {
    return this.messageController.updateOne({
      ...replaceNullWithUndefined(messageUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Message, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async messageUpdateMany(@Args() updateManyMessageArgs: UpdateManyMessageArgs) {
    return this.messageController.updateMany(updateManyMessageArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async messageDelete(
    @Args() deleteOneMessageArgs: DeleteOneMessageArgs,
    @Relations() relations: MessageSelect,
  ) {
    return this.messageController.delete({
      ...deleteOneMessageArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async messageDeleteMany(@Args() deleteManyMessageArgs: DeleteManyMessageArgs) {
    return this.messageController.deleteMany(deleteManyMessageArgs);
  }

  @Query(() => AggregateMessage, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  messageAggregate(@Args() messageAggregateArgs: MessageAggregateArgs) {
    return this.messageController.aggregate(messageAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  messageCount(@Args() messageCountAggregateInput: FindManyMessageArgs) {
    return this.messageController.count(messageCountAggregateInput);
  }
}
