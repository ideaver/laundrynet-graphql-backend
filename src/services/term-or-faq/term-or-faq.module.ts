import { Module } from '@nestjs/common';
import { TermOrFaqService } from './term-or-faq.service';
import { TermOrFaqResolver } from './term-or-faq.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TermOrFaqController } from './term-or-faq.controller';

@Module({
  providers: [PrismaService, TermOrFaqResolver, TermOrFaqController, TermOrFaqService],
  exports: [TermOrFaqController],
})
export class TermOrFaqModule {}
