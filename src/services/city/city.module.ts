import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CityController } from './city.controller';

@Module({
  providers: [PrismaService, CityResolver, CityController, CityService],
  exports: [CityController],
})
export class CityModule {}
