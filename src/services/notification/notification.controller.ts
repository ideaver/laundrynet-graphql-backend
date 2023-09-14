import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotificationService } from './notification.service';

@Injectable()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  async createOne(notificationCreateArgs: Prisma.NotificationCreateArgs) {
    return await this.notificationService.createOne(notificationCreateArgs);
  }

  async createMany(notificationCreateManyArgs: Prisma.NotificationCreateManyArgs) {
    return await this.notificationService.createMany(notificationCreateManyArgs);
  }

  async findOne(notificationFindUniqueArgs: Prisma.NotificationFindUniqueArgs) {
    return await this.notificationService.findOne(notificationFindUniqueArgs);
  }

  async findMany(notificationFindManyArgs: Prisma.NotificationFindManyArgs) {
    return await this.notificationService.findMany(notificationFindManyArgs);
  }

  async findFirst(notificationFindFirstArgs: Prisma.NotificationFindFirstArgs) {
    return await this.notificationService.findFirst(notificationFindFirstArgs);
  }

  async updateOne(notificationUpdateOneArgs: Prisma.NotificationUpdateArgs) {
    return await this.notificationService.updateOne(notificationUpdateOneArgs);
  }

  async updateMany(notificationUpdateManyArgs: Prisma.NotificationUpdateManyArgs) {
    return await this.notificationService.updateMany(notificationUpdateManyArgs);
  }

  async delete(notificationDeleteArgs: Prisma.NotificationDeleteArgs) {
    return await this.notificationService.delete(notificationDeleteArgs);
  }

  async deleteMany(notificationDeleteManyArgs: Prisma.NotificationDeleteManyArgs) {
    return await this.notificationService.deleteMany(notificationDeleteManyArgs);
  }

  async aggregate(notificationAggregateArgs: Prisma.NotificationAggregateArgs) {
    return await this.notificationService.aggregate(notificationAggregateArgs);
  }

  async count(notificationCountArgs: Prisma.NotificationCountArgs) {
    return await this.notificationService.count(notificationCountArgs);
  }
}
