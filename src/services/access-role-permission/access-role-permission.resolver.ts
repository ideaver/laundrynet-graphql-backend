// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateAccessRolePermission,
  CreateManyAccessRolePermissionArgs,
  CreateOneAccessRolePermissionArgs,
  DeleteManyAccessRolePermissionArgs,
  DeleteOneAccessRolePermissionArgs,
  FindFirstAccessRolePermissionArgs,
  FindManyAccessRolePermissionArgs,
  FindUniqueAccessRolePermissionArgs,
  AccessRolePermission,
  AccessRolePermissionAggregateArgs,
  UpdateManyAccessRolePermissionArgs,
  UpdateOneAccessRolePermissionArgs,
} from 'src/@generated';
import { AccessRolePermissionController } from './accessRolePermission.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface AccessRolePermissionSelect {
  select: Prisma.AccessRolePermissionSelect;
}

@Resolver(() => AccessRolePermission)
export class AccessRolePermissionResolver {
  constructor(private readonly accessRolePermissionController: AccessRolePermissionController) {}

  @Mutation(() => AccessRolePermission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accessRolePermissionCreateOne(
    @Args()
    accessRolePermissionCreateArgs: CreateOneAccessRolePermissionArgs,
    @Relations() relations: AccessRolePermissionSelect,
  ): Promise<AccessRolePermission | void> {
    return await this.accessRolePermissionController.createOne({
      ...accessRolePermissionCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accessRolePermissionCreateMany(
    @Args()
    createManyAccessRolePermissionArgs: CreateManyAccessRolePermissionArgs,
  ) {
    return await this.accessRolePermissionController.createMany(createManyAccessRolePermissionArgs);
  }

  @Query(() => AccessRolePermission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accessRolePermissionFindOne(
    @Args()
    accessRolePermissionFindUniqueArgs: FindUniqueAccessRolePermissionArgs,
    @Relations() relations: AccessRolePermissionSelect,
  ): Promise<AccessRolePermission | void> {
    return this.accessRolePermissionController.findOne({
      ...accessRolePermissionFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [AccessRolePermission], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accessRolePermissionFindMany(
    @Args() accessRolePermissionFindManyArgs: FindManyAccessRolePermissionArgs,
    @Relations() relations: AccessRolePermissionSelect,
  ) {
    return this.accessRolePermissionController.findMany({
      ...accessRolePermissionFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => AccessRolePermission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accessRolePermissionFindFirst(
    @Args()
    findFirstAccessRolePermissionArgs: FindFirstAccessRolePermissionArgs,
    @Relations() relations: AccessRolePermissionSelect,
  ): Promise<AccessRolePermission | void> {
    return this.accessRolePermissionController.findFirst({
      ...findFirstAccessRolePermissionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => AccessRolePermission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accessRolePermissionUpdateOne(
    @Args() accessRolePermissionUpdateOneArgs: UpdateOneAccessRolePermissionArgs,
    @Relations() relations: AccessRolePermissionSelect,
  ) {
    return this.accessRolePermissionController.updateOne({
      ...replaceNullWithUndefined(accessRolePermissionUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => AccessRolePermission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accessRolePermissionUpdateMany(@Args() updateManyAccessRolePermissionArgs: UpdateManyAccessRolePermissionArgs) {
    return this.accessRolePermissionController.updateMany(updateManyAccessRolePermissionArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async accessRolePermissionDelete(
    @Args() deleteOneAccessRolePermissionArgs: DeleteOneAccessRolePermissionArgs,
    @Relations() relations: AccessRolePermissionSelect,
  ) {
    return this.accessRolePermissionController.delete({
      ...deleteOneAccessRolePermissionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async accessRolePermissionDeleteMany(@Args() deleteManyAccessRolePermissionArgs: DeleteManyAccessRolePermissionArgs) {
    return this.accessRolePermissionController.deleteMany(deleteManyAccessRolePermissionArgs);
  }

  @Query(() => AggregateAccessRolePermission, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accessRolePermissionAggregate(@Args() accessRolePermissionAggregateArgs: AccessRolePermissionAggregateArgs) {
    return this.accessRolePermissionController.aggregate(accessRolePermissionAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accessRolePermissionCount(@Args() accessRolePermissionCountAggregateInput: FindManyAccessRolePermissionArgs) {
    return this.accessRolePermissionController.count(accessRolePermissionCountAggregateInput);
  }
}
