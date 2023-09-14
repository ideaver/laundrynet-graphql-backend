// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregatePrinterMachine,
  CreateManyPrinterMachineArgs,
  CreateOnePrinterMachineArgs,
  DeleteManyPrinterMachineArgs,
  DeleteOnePrinterMachineArgs,
  FindFirstPrinterMachineArgs,
  FindManyPrinterMachineArgs,
  FindUniquePrinterMachineArgs,
  PrinterMachine,
  PrinterMachineAggregateArgs,
  UpdateManyPrinterMachineArgs,
  UpdateOnePrinterMachineArgs,
} from 'src/@generated';
import { PrinterMachineController } from './printerMachine.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface PrinterMachineSelect {
  select: Prisma.PrinterMachineSelect;
}

@Resolver(() => PrinterMachine)
export class PrinterMachineResolver {
  constructor(private readonly printerMachineController: PrinterMachineController) {}

  @Mutation(() => PrinterMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async printerMachineCreateOne(
    @Args()
    printerMachineCreateArgs: CreateOnePrinterMachineArgs,
    @Relations() relations: PrinterMachineSelect,
  ): Promise<PrinterMachine | void> {
    return await this.printerMachineController.createOne({
      ...printerMachineCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async printerMachineCreateMany(
    @Args()
    createManyPrinterMachineArgs: CreateManyPrinterMachineArgs,
  ) {
    return await this.printerMachineController.createMany(createManyPrinterMachineArgs);
  }

  @Query(() => PrinterMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  printerMachineFindOne(
    @Args()
    printerMachineFindUniqueArgs: FindUniquePrinterMachineArgs,
    @Relations() relations: PrinterMachineSelect,
  ): Promise<PrinterMachine | void> {
    return this.printerMachineController.findOne({
      ...printerMachineFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [PrinterMachine], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  printerMachineFindMany(
    @Args() printerMachineFindManyArgs: FindManyPrinterMachineArgs,
    @Relations() relations: PrinterMachineSelect,
  ) {
    return this.printerMachineController.findMany({
      ...printerMachineFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => PrinterMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  printerMachineFindFirst(
    @Args()
    findFirstPrinterMachineArgs: FindFirstPrinterMachineArgs,
    @Relations() relations: PrinterMachineSelect,
  ): Promise<PrinterMachine | void> {
    return this.printerMachineController.findFirst({
      ...findFirstPrinterMachineArgs,
      select: relations.select,
    });
  }

  @Mutation(() => PrinterMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async printerMachineUpdateOne(
    @Args() printerMachineUpdateOneArgs: UpdateOnePrinterMachineArgs,
    @Relations() relations: PrinterMachineSelect,
  ) {
    return this.printerMachineController.updateOne({
      ...replaceNullWithUndefined(printerMachineUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => PrinterMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async printerMachineUpdateMany(@Args() updateManyPrinterMachineArgs: UpdateManyPrinterMachineArgs) {
    return this.printerMachineController.updateMany(updateManyPrinterMachineArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async printerMachineDelete(
    @Args() deleteOnePrinterMachineArgs: DeleteOnePrinterMachineArgs,
    @Relations() relations: PrinterMachineSelect,
  ) {
    return this.printerMachineController.delete({
      ...deleteOnePrinterMachineArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async printerMachineDeleteMany(@Args() deleteManyPrinterMachineArgs: DeleteManyPrinterMachineArgs) {
    return this.printerMachineController.deleteMany(deleteManyPrinterMachineArgs);
  }

  @Query(() => AggregatePrinterMachine, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  printerMachineAggregate(@Args() printerMachineAggregateArgs: PrinterMachineAggregateArgs) {
    return this.printerMachineController.aggregate(printerMachineAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  printerMachineCount(@Args() printerMachineCountAggregateInput: FindManyPrinterMachineArgs) {
    return this.printerMachineController.count(printerMachineCountAggregateInput);
  }
}
