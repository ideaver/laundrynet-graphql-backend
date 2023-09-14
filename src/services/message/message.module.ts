import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { MessageController } from './message.controller';

@Module({
  providers: [PrismaService, MessageResolver, MessageController, MessageService],
  exports: [MessageController],
})
export class MessageModule {}
