import { Module } from '@nestjs/common';
import { PhoneCountryCodeService } from './phone-country-code.service';
import { PhoneCountryCodeResolver } from './phone-country-code.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PhoneCountryCodeController } from './phone-country-code.controller';

@Module({
  providers: [PrismaService, PhoneCountryCodeResolver, PhoneCountryCodeController, PhoneCountryCodeService],
  exports: [PhoneCountryCodeController],
})
export class PhoneCountryCodeModule {}
