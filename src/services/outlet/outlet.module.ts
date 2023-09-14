import { Module } from '@nestjs/common';
import { OutletService } from './outlet.service';
import { OutletResolver } from './outlet.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletController } from './outlet.controller';

@Module({
  providers: [PrismaService, OutletResolver, OutletController, OutletService],
  exports: [OutletController],
})
export class OutletModule {}
