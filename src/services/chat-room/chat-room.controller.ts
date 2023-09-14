import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ChatRoomService } from './chatRoom.service';

@Injectable()
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  async createOne(chatRoomCreateArgs: Prisma.ChatRoomCreateArgs) {
    return await this.chatRoomService.createOne(chatRoomCreateArgs);
  }

  async createMany(chatRoomCreateManyArgs: Prisma.ChatRoomCreateManyArgs) {
    return await this.chatRoomService.createMany(chatRoomCreateManyArgs);
  }

  async findOne(chatRoomFindUniqueArgs: Prisma.ChatRoomFindUniqueArgs) {
    return await this.chatRoomService.findOne(chatRoomFindUniqueArgs);
  }

  async findMany(chatRoomFindManyArgs: Prisma.ChatRoomFindManyArgs) {
    return await this.chatRoomService.findMany(chatRoomFindManyArgs);
  }

  async findFirst(chatRoomFindFirstArgs: Prisma.ChatRoomFindFirstArgs) {
    return await this.chatRoomService.findFirst(chatRoomFindFirstArgs);
  }

  async updateOne(chatRoomUpdateOneArgs: Prisma.ChatRoomUpdateArgs) {
    return await this.chatRoomService.updateOne(chatRoomUpdateOneArgs);
  }

  async updateMany(chatRoomUpdateManyArgs: Prisma.ChatRoomUpdateManyArgs) {
    return await this.chatRoomService.updateMany(chatRoomUpdateManyArgs);
  }

  async delete(chatRoomDeleteArgs: Prisma.ChatRoomDeleteArgs) {
    return await this.chatRoomService.delete(chatRoomDeleteArgs);
  }

  async deleteMany(chatRoomDeleteManyArgs: Prisma.ChatRoomDeleteManyArgs) {
    return await this.chatRoomService.deleteMany(chatRoomDeleteManyArgs);
  }

  async aggregate(chatRoomAggregateArgs: Prisma.ChatRoomAggregateArgs) {
    return await this.chatRoomService.aggregate(chatRoomAggregateArgs);
  }

  async count(chatRoomCountArgs: Prisma.ChatRoomCountArgs) {
    return await this.chatRoomService.count(chatRoomCountArgs);
  }
}
