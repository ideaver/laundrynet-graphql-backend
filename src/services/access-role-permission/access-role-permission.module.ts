import { Module } from '@nestjs/common';
import { AccessRolePermissionService } from './access-role-permission.service';
import { AccessRolePermissionResolver } from './access-role-permission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccessRolePermissionController } from './access-role-permission.controller';

@Module({
  providers: [PrismaService, AccessRolePermissionResolver, AccessRolePermissionController, AccessRolePermissionService],
  exports: [AccessRolePermissionController],
})
export class AccessRolePermissionModule {}
