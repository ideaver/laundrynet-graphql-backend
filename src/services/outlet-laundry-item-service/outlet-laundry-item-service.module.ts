import { Module } from '@nestjs/common';
import { OutletLaundryItemServiceService } from './outletLaundryItemService.service';
import { OutletLaundryItemServiceResolver } from './outletLaundryItemService.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OutletLaundryItemServiceController } from './outletLaundryItemService.controller';

@Module({
  providers: [PrismaService, OutletLaundryItemServiceResolver, OutletLaundryItemServiceController, OutletLaundryItemServiceService],
  exports: [OutletLaundryItemServiceController],
})
export class OutletLaundryItemServiceModule {}
