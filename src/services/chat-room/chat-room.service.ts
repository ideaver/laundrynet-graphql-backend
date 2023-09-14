import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ChatRoomService {
  constructor(private prisma: PrismaService) {}

  async createOne(chatRoomCreateArgs: Prisma.ChatRoomCreateArgs) {
    try {
      return await this.prisma.chatRoom.create(chatRoomCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(chatRoomCreateManyArgs: Prisma.ChatRoomCreateManyArgs) {
    try {
      return await this.prisma.chatRoom.createMany(chatRoomCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(chatRoomFindUniqueArgs: Prisma.ChatRoomFindUniqueArgs) {
    try {
      return await this.prisma.chatRoom.findUnique(chatRoomFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(chatRoomFindManyArgs: Prisma.ChatRoomFindManyArgs) {
    try {
      return await this.prisma.chatRoom.findMany(chatRoomFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(chatRoomFindFirstArgs: Prisma.ChatRoomFindFirstArgs) {
    try {
      return await this.prisma.chatRoom.findFirst(chatRoomFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(chatRoomUpdateOneArgs: Prisma.ChatRoomUpdateArgs) {
    try {
      return await this.prisma.chatRoom.update(chatRoomUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(chatRoomUpdateManyArgs: Prisma.ChatRoomUpdateManyArgs) {
    try {
      return await this.prisma.chatRoom.updateMany(chatRoomUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(chatRoomDeleteArgs: Prisma.ChatRoomDeleteArgs) {
    try {
      await this.prisma.chatRoom.delete(chatRoomDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(chatRoomDeleteManyArgs: Prisma.ChatRoomDeleteManyArgs) {
    try {
      await this.prisma.chatRoom.deleteMany(chatRoomDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(chatRoomAggregateArgs: Prisma.ChatRoomAggregateArgs) {
    try {
      return await this.prisma.chatRoom.aggregate(chatRoomAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(chatRoomCountArgs: Prisma.ChatRoomCountArgs) {
    try {
      return await this.prisma.chatRoom.count(chatRoomCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
