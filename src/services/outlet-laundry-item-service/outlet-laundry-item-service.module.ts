import { Module } from '@nestjs/common';
import { OutletLaundryItemServiceService } from './outlet-laundry-item-service.service';
import { OutletLaundryItemServiceResolver } from './outlet-laundry-item-service.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletLaundryItemServiceController } from './outlet-laundry-item-service.controller';

@Module({
  providers: [PrismaService, OutletLaundryItemServiceResolver, OutletLaundryItemServiceController, OutletLaundryItemServiceService],
  exports: [OutletLaundryItemServiceController],
})
export class OutletLaundryItemServiceModule {}
