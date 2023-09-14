import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CustomerController } from './customer.controller';

@Module({
  providers: [PrismaService, CustomerResolver, CustomerController, CustomerService],
  exports: [CustomerController],
})
export class CustomerModule {}
