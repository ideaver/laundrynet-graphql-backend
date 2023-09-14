import { Module } from '@nestjs/common';
import { ComplainService } from './complain.service';
import { ComplainResolver } from './complain.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ComplainController } from './complain.controller';

@Module({
  providers: [PrismaService, ComplainResolver, ComplainController, ComplainService],
  exports: [ComplainController],
})
export class ComplainModule {}
