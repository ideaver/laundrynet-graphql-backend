import { Module } from '@nestjs/common';
import { PlatformItemService } from './platform-item.service';
import { PlatformItemResolver } from './platform-item.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PlatformItemController } from './platform-item.controller';

@Module({
  providers: [PrismaService, PlatformItemResolver, PlatformItemController, PlatformItemService],
  exports: [PlatformItemController],
})
export class PlatformItemModule {}
