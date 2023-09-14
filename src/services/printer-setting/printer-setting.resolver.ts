// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePrinterSetting,
  CreateManyPrinterSettingArgs,
  CreateOnePrinterSettingArgs,
  DeleteManyPrinterSettingArgs,
  DeleteOnePrinterSettingArgs,
  FindFirstPrinterSettingArgs,
  FindManyPrinterSettingArgs,
  FindUniquePrinterSettingArgs,
  PrinterSetting,
  PrinterSettingAggregateArgs,
  UpdateManyPrinterSettingArgs,
  UpdateOnePrinterSettingArgs,
} from 'src/@generated';
import { PrinterSettingController } from './printer-setting.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PrinterSettingSelect {
  select: Prisma.PrinterSettingSelect;
}

@Resolver(() => PrinterSetting)
export class PrinterSettingResolver {
  constructor(private readonly printerSettingController: PrinterSettingController) {}

  @Mutation(() => PrinterSetting, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async printerSettingCreateOne(
    @Args()
    printerSettingCreateArgs: CreateOnePrinterSettingArgs,
    @Relations() relations: PrinterSettingSelect,
  ): Promise<PrinterSetting | void> {
    return await this.printerSettingController.createOne({
      ...printerSettingCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async printerSettingCreateMany(
    @Args()
    createManyPrinterSettingArgs: CreateManyPrinterSettingArgs,
  ) {
    return await this.printerSettingController.createMany(createManyPrinterSettingArgs);
  }

  @Query(() => PrinterSetting, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  printerSettingFindOne(
    @Args()
    printerSettingFindUniqueArgs: FindUniquePrinterSettingArgs,
    @Relations() relations: PrinterSettingSelect,
  ): Promise<PrinterSetting | void> {
    return this.printerSettingController.findOne({
      ...printerSettingFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [PrinterSetting], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  printerSettingFindMany(
    @Args() printerSettingFindManyArgs: FindManyPrinterSettingArgs,
    @Relations() relations: PrinterSettingSelect,
  ) {
    return this.printerSettingController.findMany({
      ...printerSettingFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => PrinterSetting, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  printerSettingFindFirst(
    @Args()
    findFirstPrinterSettingArgs: FindFirstPrinterSettingArgs,
    @Relations() relations: PrinterSettingSelect,
  ): Promise<PrinterSetting | void> {
    return this.printerSettingController.findFirst({
      ...findFirstPrinterSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => PrinterSetting, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async printerSettingUpdateOne(
    @Args() printerSettingUpdateOneArgs: UpdateOnePrinterSettingArgs,
    @Relations() relations: PrinterSettingSelect,
  ) {
    return this.printerSettingController.updateOne({
      ...replaceNullWithUndefined(printerSettingUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => PrinterSetting, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async printerSettingUpdateMany(@Args() updateManyPrinterSettingArgs: UpdateManyPrinterSettingArgs) {
    return this.printerSettingController.updateMany(updateManyPrinterSettingArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async printerSettingDelete(
    @Args() deleteOnePrinterSettingArgs: DeleteOnePrinterSettingArgs,
    @Relations() relations: PrinterSettingSelect,
  ) {
    return this.printerSettingController.delete({
      ...deleteOnePrinterSettingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async printerSettingDeleteMany(@Args() deleteManyPrinterSettingArgs: DeleteManyPrinterSettingArgs) {
    return this.printerSettingController.deleteMany(deleteManyPrinterSettingArgs);
  }

  @Query(() => AggregatePrinterSetting, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  printerSettingAggregate(@Args() printerSettingAggregateArgs: PrinterSettingAggregateArgs) {
    return this.printerSettingController.aggregate(printerSettingAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  printerSettingCount(@Args() printerSettingCountAggregateInput: FindManyPrinterSettingArgs) {
    return this.printerSettingController.count(printerSettingCountAggregateInput);
  }
}
