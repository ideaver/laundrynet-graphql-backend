import { Module } from '@nestjs/common';
import { AccessRolePermissionService } from './accessRolePermission.service';
import { AccessRolePermissionResolver } from './accessRolePermission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccessRolePermissionController } from './accessRolePermission.controller';

@Module({
  providers: [PrismaService, AccessRolePermissionResolver, AccessRolePermissionController, AccessRolePermissionService],
  exports: [AccessRolePermissionController],
})
export class AccessRolePermissionModule {}
