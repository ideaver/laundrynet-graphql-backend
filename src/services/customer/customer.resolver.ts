// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateCustomer,
  CreateManyCustomerArgs,
  CreateOneCustomerArgs,
  DeleteManyCustomerArgs,
  DeleteOneCustomerArgs,
  FindFirstCustomerArgs,
  FindManyCustomerArgs,
  FindUniqueCustomerArgs,
  Customer,
  CustomerAggregateArgs,
  UpdateManyCustomerArgs,
  UpdateOneCustomerArgs,
} from 'src/@generated';
import { CustomerController } from './customer.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface CustomerSelect {
  select: Prisma.CustomerSelect;
}

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerController: CustomerController) {}

  @Mutation(() => Customer, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async customerCreateOne(
    @Args()
    customerCreateArgs: CreateOneCustomerArgs,
    @Relations() relations: CustomerSelect,
  ): Promise<Customer | void> {
    return await this.customerController.createOne({
      ...customerCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async customerCreateMany(
    @Args()
    createManyCustomerArgs: CreateManyCustomerArgs,
  ) {
    return await this.customerController.createMany(createManyCustomerArgs);
  }

  @Query(() => Customer, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  customerFindOne(
    @Args()
    customerFindUniqueArgs: FindUniqueCustomerArgs,
    @Relations() relations: CustomerSelect,
  ): Promise<Customer | void> {
    return this.customerController.findOne({
      ...customerFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Customer], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  customerFindMany(
    @Args() customerFindManyArgs: FindManyCustomerArgs,
    @Relations() relations: CustomerSelect,
  ) {
    return this.customerController.findMany({
      ...customerFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Customer, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  customerFindFirst(
    @Args()
    findFirstCustomerArgs: FindFirstCustomerArgs,
    @Relations() relations: CustomerSelect,
  ): Promise<Customer | void> {
    return this.customerController.findFirst({
      ...findFirstCustomerArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Customer, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async customerUpdateOne(
    @Args() customerUpdateOneArgs: UpdateOneCustomerArgs,
    @Relations() relations: CustomerSelect,
  ) {
    return this.customerController.updateOne({
      ...replaceNullWithUndefined(customerUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Customer, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async customerUpdateMany(@Args() updateManyCustomerArgs: UpdateManyCustomerArgs) {
    return this.customerController.updateMany(updateManyCustomerArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async customerDelete(
    @Args() deleteOneCustomerArgs: DeleteOneCustomerArgs,
    @Relations() relations: CustomerSelect,
  ) {
    return this.customerController.delete({
      ...deleteOneCustomerArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async customerDeleteMany(@Args() deleteManyCustomerArgs: DeleteManyCustomerArgs) {
    return this.customerController.deleteMany(deleteManyCustomerArgs);
  }

  @Query(() => AggregateCustomer, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  customerAggregate(@Args() customerAggregateArgs: CustomerAggregateArgs) {
    return this.customerController.aggregate(customerAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  customerCount(@Args() customerCountAggregateInput: FindManyCustomerArgs) {
    return this.customerController.count(customerCountAggregateInput);
  }
}
