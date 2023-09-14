import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  async createOne(notificationCreateArgs: Prisma.NotificationCreateArgs) {
    try {
      return await this.prisma.notification.create(notificationCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(notificationCreateManyArgs: Prisma.NotificationCreateManyArgs) {
    try {
      return await this.prisma.notification.createMany(notificationCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(notificationFindUniqueArgs: Prisma.NotificationFindUniqueArgs) {
    try {
      return await this.prisma.notification.findUnique(notificationFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(notificationFindManyArgs: Prisma.NotificationFindManyArgs) {
    try {
      return await this.prisma.notification.findMany(notificationFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(notificationFindFirstArgs: Prisma.NotificationFindFirstArgs) {
    try {
      return await this.prisma.notification.findFirst(notificationFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(notificationUpdateOneArgs: Prisma.NotificationUpdateArgs) {
    try {
      return await this.prisma.notification.update(notificationUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(notificationUpdateManyArgs: Prisma.NotificationUpdateManyArgs) {
    try {
      return await this.prisma.notification.updateMany(notificationUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(notificationDeleteArgs: Prisma.NotificationDeleteArgs) {
    try {
      await this.prisma.notification.delete(notificationDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(notificationDeleteManyArgs: Prisma.NotificationDeleteManyArgs) {
    try {
      await this.prisma.notification.deleteMany(notificationDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(notificationAggregateArgs: Prisma.NotificationAggregateArgs) {
    try {
      return await this.prisma.notification.aggregate(notificationAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(notificationCountArgs: Prisma.NotificationCountArgs) {
    try {
      return await this.prisma.notification.count(notificationCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
