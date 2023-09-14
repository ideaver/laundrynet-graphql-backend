import { Module } from '@nestjs/common';
import { PhoneCountryCodeService } from './phoneCountryCode.service';
import { PhoneCountryCodeResolver } from './phoneCountryCode.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PhoneCountryCodeController } from './phoneCountryCode.controller';

@Module({
  providers: [PrismaService, PhoneCountryCodeResolver, PhoneCountryCodeController, PhoneCountryCodeService],
  exports: [PhoneCountryCodeController],
})
export class PhoneCountryCodeModule {}
