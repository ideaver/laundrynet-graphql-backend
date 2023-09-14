import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { NotificationController } from './notification.controller';

@Module({
  providers: [PrismaService, NotificationResolver, NotificationController, NotificationService],
  exports: [NotificationController],
})
export class NotificationModule {}
