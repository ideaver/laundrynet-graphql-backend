import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OwnerController } from './owner.controller';

@Module({
  providers: [PrismaService, OwnerResolver, OwnerController, OwnerService],
  exports: [OwnerController],
})
export class OwnerModule {}
