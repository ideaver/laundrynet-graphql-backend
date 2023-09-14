import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PhoneCountryCodeService } from './phone-country-code.service';

@Injectable()
export class PhoneCountryCodeController {
  constructor(private readonly phoneCountryCodeService: PhoneCountryCodeService) {}

  async createOne(phoneCountryCodeCreateArgs: Prisma.PhoneCountryCodeCreateArgs) {
    return await this.phoneCountryCodeService.createOne(phoneCountryCodeCreateArgs);
  }

  async createMany(phoneCountryCodeCreateManyArgs: Prisma.PhoneCountryCodeCreateManyArgs) {
    return await this.phoneCountryCodeService.createMany(phoneCountryCodeCreateManyArgs);
  }

  async findOne(phoneCountryCodeFindUniqueArgs: Prisma.PhoneCountryCodeFindUniqueArgs) {
    return await this.phoneCountryCodeService.findOne(phoneCountryCodeFindUniqueArgs);
  }

  async findMany(phoneCountryCodeFindManyArgs: Prisma.PhoneCountryCodeFindManyArgs) {
    return await this.phoneCountryCodeService.findMany(phoneCountryCodeFindManyArgs);
  }

  async findFirst(phoneCountryCodeFindFirstArgs: Prisma.PhoneCountryCodeFindFirstArgs) {
    return await this.phoneCountryCodeService.findFirst(phoneCountryCodeFindFirstArgs);
  }

  async updateOne(phoneCountryCodeUpdateOneArgs: Prisma.PhoneCountryCodeUpdateArgs) {
    return await this.phoneCountryCodeService.updateOne(phoneCountryCodeUpdateOneArgs);
  }

  async updateMany(phoneCountryCodeUpdateManyArgs: Prisma.PhoneCountryCodeUpdateManyArgs) {
    return await this.phoneCountryCodeService.updateMany(phoneCountryCodeUpdateManyArgs);
  }

  async delete(phoneCountryCodeDeleteArgs: Prisma.PhoneCountryCodeDeleteArgs) {
    return await this.phoneCountryCodeService.delete(phoneCountryCodeDeleteArgs);
  }

  async deleteMany(phoneCountryCodeDeleteManyArgs: Prisma.PhoneCountryCodeDeleteManyArgs) {
    return await this.phoneCountryCodeService.deleteMany(phoneCountryCodeDeleteManyArgs);
  }

  async aggregate(phoneCountryCodeAggregateArgs: Prisma.PhoneCountryCodeAggregateArgs) {
    return await this.phoneCountryCodeService.aggregate(phoneCountryCodeAggregateArgs);
  }

  async count(phoneCountryCodeCountArgs: Prisma.PhoneCountryCodeCountArgs) {
    return await this.phoneCountryCodeService.count(phoneCountryCodeCountArgs);
  }
}
