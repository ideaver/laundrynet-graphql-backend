// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateIndonesianBank,
  CreateManyIndonesianBankArgs,
  CreateOneIndonesianBankArgs,
  DeleteManyIndonesianBankArgs,
  DeleteOneIndonesianBankArgs,
  FindFirstIndonesianBankArgs,
  FindManyIndonesianBankArgs,
  FindUniqueIndonesianBankArgs,
  IndonesianBank,
  IndonesianBankAggregateArgs,
  UpdateManyIndonesianBankArgs,
  UpdateOneIndonesianBankArgs,
} from 'src/@generated';
import { IndonesianBankController } from './indonesian-bank.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface IndonesianBankSelect {
  select: Prisma.IndonesianBankSelect;
}

@Resolver(() => IndonesianBank)
export class IndonesianBankResolver {
  constructor(private readonly indonesianBankController: IndonesianBankController) {}

  @Mutation(() => IndonesianBank, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async indonesianBankCreateOne(
    @Args()
    indonesianBankCreateArgs: CreateOneIndonesianBankArgs,
    @Relations() relations: IndonesianBankSelect,
  ): Promise<IndonesianBank | void> {
    return await this.indonesianBankController.createOne({
      ...indonesianBankCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async indonesianBankCreateMany(
    @Args()
    createManyIndonesianBankArgs: CreateManyIndonesianBankArgs,
  ) {
    return await this.indonesianBankController.createMany(createManyIndonesianBankArgs);
  }

  @Query(() => IndonesianBank, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  indonesianBankFindOne(
    @Args()
    indonesianBankFindUniqueArgs: FindUniqueIndonesianBankArgs,
    @Relations() relations: IndonesianBankSelect,
  ): Promise<IndonesianBank | void> {
    return this.indonesianBankController.findOne({
      ...indonesianBankFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [IndonesianBank], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  indonesianBankFindMany(
    @Args() indonesianBankFindManyArgs: FindManyIndonesianBankArgs,
    @Relations() relations: IndonesianBankSelect,
  ) {
    return this.indonesianBankController.findMany({
      ...indonesianBankFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => IndonesianBank, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  indonesianBankFindFirst(
    @Args()
    findFirstIndonesianBankArgs: FindFirstIndonesianBankArgs,
    @Relations() relations: IndonesianBankSelect,
  ): Promise<IndonesianBank | void> {
    return this.indonesianBankController.findFirst({
      ...findFirstIndonesianBankArgs,
      select: relations.select,
    });
  }

  @Mutation(() => IndonesianBank, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async indonesianBankUpdateOne(
    @Args() indonesianBankUpdateOneArgs: UpdateOneIndonesianBankArgs,
    @Relations() relations: IndonesianBankSelect,
  ) {
    return this.indonesianBankController.updateOne({
      ...replaceNullWithUndefined(indonesianBankUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => IndonesianBank, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async indonesianBankUpdateMany(@Args() updateManyIndonesianBankArgs: UpdateManyIndonesianBankArgs) {
    return this.indonesianBankController.updateMany(updateManyIndonesianBankArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async indonesianBankDelete(
    @Args() deleteOneIndonesianBankArgs: DeleteOneIndonesianBankArgs,
    @Relations() relations: IndonesianBankSelect,
  ) {
    return this.indonesianBankController.delete({
      ...deleteOneIndonesianBankArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async indonesianBankDeleteMany(@Args() deleteManyIndonesianBankArgs: DeleteManyIndonesianBankArgs) {
    return this.indonesianBankController.deleteMany(deleteManyIndonesianBankArgs);
  }

  @Query(() => AggregateIndonesianBank, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  indonesianBankAggregate(@Args() indonesianBankAggregateArgs: IndonesianBankAggregateArgs) {
    return this.indonesianBankController.aggregate(indonesianBankAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  indonesianBankCount(@Args() indonesianBankCountAggregateInput: FindManyIndonesianBankArgs) {
    return this.indonesianBankController.count(indonesianBankCountAggregateInput);
  }
}
