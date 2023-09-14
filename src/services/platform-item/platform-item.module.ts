import { Module } from '@nestjs/common';
import { PlatformItemService } from './platformItem.service';
import { PlatformItemResolver } from './platformItem.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PlatformItemController } from './platformItem.controller';

@Module({
  providers: [PrismaService, PlatformItemResolver, PlatformItemController, PlatformItemService],
  exports: [PlatformItemController],
})
export class PlatformItemModule {}
