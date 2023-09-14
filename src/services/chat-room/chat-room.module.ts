import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { ChatRoomResolver } from './chat-room.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ChatRoomController } from './chat-room.controller';

@Module({
  providers: [PrismaService, ChatRoomResolver, ChatRoomController, ChatRoomService],
  exports: [ChatRoomController],
})
export class ChatRoomModule {}
