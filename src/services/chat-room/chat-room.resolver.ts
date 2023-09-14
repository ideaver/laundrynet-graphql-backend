// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateChatRoom,
  CreateManyChatRoomArgs,
  CreateOneChatRoomArgs,
  DeleteManyChatRoomArgs,
  DeleteOneChatRoomArgs,
  FindFirstChatRoomArgs,
  FindManyChatRoomArgs,
  FindUniqueChatRoomArgs,
  ChatRoom,
  ChatRoomAggregateArgs,
  UpdateManyChatRoomArgs,
  UpdateOneChatRoomArgs,
} from 'src/@generated';
import { ChatRoomController } from './chatRoom.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ChatRoomSelect {
  select: Prisma.ChatRoomSelect;
}

@Resolver(() => ChatRoom)
export class ChatRoomResolver {
  constructor(private readonly chatRoomController: ChatRoomController) {}

  @Mutation(() => ChatRoom, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async chatRoomCreateOne(
    @Args()
    chatRoomCreateArgs: CreateOneChatRoomArgs,
    @Relations() relations: ChatRoomSelect,
  ): Promise<ChatRoom | void> {
    return await this.chatRoomController.createOne({
      ...chatRoomCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async chatRoomCreateMany(
    @Args()
    createManyChatRoomArgs: CreateManyChatRoomArgs,
  ) {
    return await this.chatRoomController.createMany(createManyChatRoomArgs);
  }

  @Query(() => ChatRoom, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  chatRoomFindOne(
    @Args()
    chatRoomFindUniqueArgs: FindUniqueChatRoomArgs,
    @Relations() relations: ChatRoomSelect,
  ): Promise<ChatRoom | void> {
    return this.chatRoomController.findOne({
      ...chatRoomFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [ChatRoom], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  chatRoomFindMany(
    @Args() chatRoomFindManyArgs: FindManyChatRoomArgs,
    @Relations() relations: ChatRoomSelect,
  ) {
    return this.chatRoomController.findMany({
      ...chatRoomFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => ChatRoom, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  chatRoomFindFirst(
    @Args()
    findFirstChatRoomArgs: FindFirstChatRoomArgs,
    @Relations() relations: ChatRoomSelect,
  ): Promise<ChatRoom | void> {
    return this.chatRoomController.findFirst({
      ...findFirstChatRoomArgs,
      select: relations.select,
    });
  }

  @Mutation(() => ChatRoom, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async chatRoomUpdateOne(
    @Args() chatRoomUpdateOneArgs: UpdateOneChatRoomArgs,
    @Relations() relations: ChatRoomSelect,
  ) {
    return this.chatRoomController.updateOne({
      ...replaceNullWithUndefined(chatRoomUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => ChatRoom, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async chatRoomUpdateMany(@Args() updateManyChatRoomArgs: UpdateManyChatRoomArgs) {
    return this.chatRoomController.updateMany(updateManyChatRoomArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async chatRoomDelete(
    @Args() deleteOneChatRoomArgs: DeleteOneChatRoomArgs,
    @Relations() relations: ChatRoomSelect,
  ) {
    return this.chatRoomController.delete({
      ...deleteOneChatRoomArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async chatRoomDeleteMany(@Args() deleteManyChatRoomArgs: DeleteManyChatRoomArgs) {
    return this.chatRoomController.deleteMany(deleteManyChatRoomArgs);
  }

  @Query(() => AggregateChatRoom, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  chatRoomAggregate(@Args() chatRoomAggregateArgs: ChatRoomAggregateArgs) {
    return this.chatRoomController.aggregate(chatRoomAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  chatRoomCount(@Args() chatRoomCountAggregateInput: FindManyChatRoomArgs) {
    return this.chatRoomController.count(chatRoomCountAggregateInput);
  }
}
