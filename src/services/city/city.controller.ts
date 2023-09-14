import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CityService } from './city.service';

@Injectable()
export class CityController {
  constructor(private readonly cityService: CityService) {}

  async createOne(cityCreateArgs: Prisma.CityCreateArgs) {
    return await this.cityService.createOne(cityCreateArgs);
  }

  async createMany(cityCreateManyArgs: Prisma.CityCreateManyArgs) {
    return await this.cityService.createMany(cityCreateManyArgs);
  }

  async findOne(cityFindUniqueArgs: Prisma.CityFindUniqueArgs) {
    return await this.cityService.findOne(cityFindUniqueArgs);
  }

  async findMany(cityFindManyArgs: Prisma.CityFindManyArgs) {
    return await this.cityService.findMany(cityFindManyArgs);
  }

  async findFirst(cityFindFirstArgs: Prisma.CityFindFirstArgs) {
    return await this.cityService.findFirst(cityFindFirstArgs);
  }

  async updateOne(cityUpdateOneArgs: Prisma.CityUpdateArgs) {
    return await this.cityService.updateOne(cityUpdateOneArgs);
  }

  async updateMany(cityUpdateManyArgs: Prisma.CityUpdateManyArgs) {
    return await this.cityService.updateMany(cityUpdateManyArgs);
  }

  async delete(cityDeleteArgs: Prisma.CityDeleteArgs) {
    return await this.cityService.delete(cityDeleteArgs);
  }

  async deleteMany(cityDeleteManyArgs: Prisma.CityDeleteManyArgs) {
    return await this.cityService.deleteMany(cityDeleteManyArgs);
  }

  async aggregate(cityAggregateArgs: Prisma.CityAggregateArgs) {
    return await this.cityService.aggregate(cityAggregateArgs);
  }

  async count(cityCountArgs: Prisma.CityCountArgs) {
    return await this.cityService.count(cityCountArgs);
  }
}
