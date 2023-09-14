import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async createOne(messageCreateArgs: Prisma.MessageCreateArgs) {
    try {
      return await this.prisma.message.create(messageCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(messageCreateManyArgs: Prisma.MessageCreateManyArgs) {
    try {
      return await this.prisma.message.createMany(messageCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(messageFindUniqueArgs: Prisma.MessageFindUniqueArgs) {
    try {
      return await this.prisma.message.findUnique(messageFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(messageFindManyArgs: Prisma.MessageFindManyArgs) {
    try {
      return await this.prisma.message.findMany(messageFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(messageFindFirstArgs: Prisma.MessageFindFirstArgs) {
    try {
      return await this.prisma.message.findFirst(messageFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(messageUpdateOneArgs: Prisma.MessageUpdateArgs) {
    try {
      return await this.prisma.message.update(messageUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(messageUpdateManyArgs: Prisma.MessageUpdateManyArgs) {
    try {
      return await this.prisma.message.updateMany(messageUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(messageDeleteArgs: Prisma.MessageDeleteArgs) {
    try {
      await this.prisma.message.delete(messageDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(messageDeleteManyArgs: Prisma.MessageDeleteManyArgs) {
    try {
      await this.prisma.message.deleteMany(messageDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(messageAggregateArgs: Prisma.MessageAggregateArgs) {
    try {
      return await this.prisma.message.aggregate(messageAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(messageCountArgs: Prisma.MessageCountArgs) {
    try {
      return await this.prisma.message.count(messageCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
