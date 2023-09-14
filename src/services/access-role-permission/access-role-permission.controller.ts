import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccessRolePermissionService } from './access-role-permission.service';

@Injectable()
export class AccessRolePermissionController {
  constructor(private readonly accessRolePermissionService: AccessRolePermissionService) {}

  async createOne(accessRolePermissionCreateArgs: Prisma.AccessRolePermissionCreateArgs) {
    return await this.accessRolePermissionService.createOne(accessRolePermissionCreateArgs);
  }

  async createMany(accessRolePermissionCreateManyArgs: Prisma.AccessRolePermissionCreateManyArgs) {
    return await this.accessRolePermissionService.createMany(accessRolePermissionCreateManyArgs);
  }

  async findOne(accessRolePermissionFindUniqueArgs: Prisma.AccessRolePermissionFindUniqueArgs) {
    return await this.accessRolePermissionService.findOne(accessRolePermissionFindUniqueArgs);
  }

  async findMany(accessRolePermissionFindManyArgs: Prisma.AccessRolePermissionFindManyArgs) {
    return await this.accessRolePermissionService.findMany(accessRolePermissionFindManyArgs);
  }

  async findFirst(accessRolePermissionFindFirstArgs: Prisma.AccessRolePermissionFindFirstArgs) {
    return await this.accessRolePermissionService.findFirst(accessRolePermissionFindFirstArgs);
  }

  async updateOne(accessRolePermissionUpdateOneArgs: Prisma.AccessRolePermissionUpdateArgs) {
    return await this.accessRolePermissionService.updateOne(accessRolePermissionUpdateOneArgs);
  }

  async updateMany(accessRolePermissionUpdateManyArgs: Prisma.AccessRolePermissionUpdateManyArgs) {
    return await this.accessRolePermissionService.updateMany(accessRolePermissionUpdateManyArgs);
  }

  async delete(accessRolePermissionDeleteArgs: Prisma.AccessRolePermissionDeleteArgs) {
    return await this.accessRolePermissionService.delete(accessRolePermissionDeleteArgs);
  }

  async deleteMany(accessRolePermissionDeleteManyArgs: Prisma.AccessRolePermissionDeleteManyArgs) {
    return await this.accessRolePermissionService.deleteMany(accessRolePermissionDeleteManyArgs);
  }

  async aggregate(accessRolePermissionAggregateArgs: Prisma.AccessRolePermissionAggregateArgs) {
    return await this.accessRolePermissionService.aggregate(accessRolePermissionAggregateArgs);
  }

  async count(accessRolePermissionCountArgs: Prisma.AccessRolePermissionCountArgs) {
    return await this.accessRolePermissionService.count(accessRolePermissionCountArgs);
  }
}
