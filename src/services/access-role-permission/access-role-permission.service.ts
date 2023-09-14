import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class AccessRolePermissionService {
  constructor(private prisma: PrismaService) {}

  async createOne(accessRolePermissionCreateArgs: Prisma.AccessRolePermissionCreateArgs) {
    try {
      return await this.prisma.accessRolePermission.create(accessRolePermissionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(accessRolePermissionCreateManyArgs: Prisma.AccessRolePermissionCreateManyArgs) {
    try {
      return await this.prisma.accessRolePermission.createMany(accessRolePermissionCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(accessRolePermissionFindUniqueArgs: Prisma.AccessRolePermissionFindUniqueArgs) {
    try {
      return await this.prisma.accessRolePermission.findUnique(accessRolePermissionFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(accessRolePermissionFindManyArgs: Prisma.AccessRolePermissionFindManyArgs) {
    try {
      return await this.prisma.accessRolePermission.findMany(accessRolePermissionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(accessRolePermissionFindFirstArgs: Prisma.AccessRolePermissionFindFirstArgs) {
    try {
      return await this.prisma.accessRolePermission.findFirst(accessRolePermissionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(accessRolePermissionUpdateOneArgs: Prisma.AccessRolePermissionUpdateArgs) {
    try {
      return await this.prisma.accessRolePermission.update(accessRolePermissionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(accessRolePermissionUpdateManyArgs: Prisma.AccessRolePermissionUpdateManyArgs) {
    try {
      return await this.prisma.accessRolePermission.updateMany(accessRolePermissionUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(accessRolePermissionDeleteArgs: Prisma.AccessRolePermissionDeleteArgs) {
    try {
      await this.prisma.accessRolePermission.delete(accessRolePermissionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(accessRolePermissionDeleteManyArgs: Prisma.AccessRolePermissionDeleteManyArgs) {
    try {
      await this.prisma.accessRolePermission.deleteMany(accessRolePermissionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(accessRolePermissionAggregateArgs: Prisma.AccessRolePermissionAggregateArgs) {
    try {
      return await this.prisma.accessRolePermission.aggregate(accessRolePermissionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(accessRolePermissionCountArgs: Prisma.AccessRolePermissionCountArgs) {
    try {
      return await this.prisma.accessRolePermission.count(accessRolePermissionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
