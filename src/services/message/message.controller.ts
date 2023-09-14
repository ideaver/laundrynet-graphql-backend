import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MessageService } from './message.service';

@Injectable()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  async createOne(messageCreateArgs: Prisma.MessageCreateArgs) {
    return await this.messageService.createOne(messageCreateArgs);
  }

  async createMany(messageCreateManyArgs: Prisma.MessageCreateManyArgs) {
    return await this.messageService.createMany(messageCreateManyArgs);
  }

  async findOne(messageFindUniqueArgs: Prisma.MessageFindUniqueArgs) {
    return await this.messageService.findOne(messageFindUniqueArgs);
  }

  async findMany(messageFindManyArgs: Prisma.MessageFindManyArgs) {
    return await this.messageService.findMany(messageFindManyArgs);
  }

  async findFirst(messageFindFirstArgs: Prisma.MessageFindFirstArgs) {
    return await this.messageService.findFirst(messageFindFirstArgs);
  }

  async updateOne(messageUpdateOneArgs: Prisma.MessageUpdateArgs) {
    return await this.messageService.updateOne(messageUpdateOneArgs);
  }

  async updateMany(messageUpdateManyArgs: Prisma.MessageUpdateManyArgs) {
    return await this.messageService.updateMany(messageUpdateManyArgs);
  }

  async delete(messageDeleteArgs: Prisma.MessageDeleteArgs) {
    return await this.messageService.delete(messageDeleteArgs);
  }

  async deleteMany(messageDeleteManyArgs: Prisma.MessageDeleteManyArgs) {
    return await this.messageService.deleteMany(messageDeleteManyArgs);
  }

  async aggregate(messageAggregateArgs: Prisma.MessageAggregateArgs) {
    return await this.messageService.aggregate(messageAggregateArgs);
  }

  async count(messageCountArgs: Prisma.MessageCountArgs) {
    return await this.messageService.count(messageCountArgs);
  }
}
