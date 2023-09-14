import { Module } from '@nestjs/common';
import { TermOrFaqService } from './termOrFaq.service';
import { TermOrFaqResolver } from './termOrFaq.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TermOrFaqController } from './termOrFaq.controller';

@Module({
  providers: [PrismaService, TermOrFaqResolver, TermOrFaqController, TermOrFaqService],
  exports: [TermOrFaqController],
})
export class TermOrFaqModule {}
