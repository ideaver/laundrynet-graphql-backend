import { Module } from '@nestjs/common';
import { ChatRoomService } from './chatRoom.service';
import { ChatRoomResolver } from './chatRoom.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ChatRoomController } from './chatRoom.controller';

@Module({
  providers: [PrismaService, ChatRoomResolver, ChatRoomController, ChatRoomService],
  exports: [ChatRoomController],
})
export class ChatRoomModule {}
