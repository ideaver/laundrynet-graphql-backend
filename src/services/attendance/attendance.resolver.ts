// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateAttendance,
  CreateManyAttendanceArgs,
  CreateOneAttendanceArgs,
  DeleteManyAttendanceArgs,
  DeleteOneAttendanceArgs,
  FindFirstAttendanceArgs,
  FindManyAttendanceArgs,
  FindUniqueAttendanceArgs,
  Attendance,
  AttendanceAggregateArgs,
  UpdateManyAttendanceArgs,
  UpdateOneAttendanceArgs,
} from 'src/@generated';
import { AttendanceController } from './attendance.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface AttendanceSelect {
  select: Prisma.AttendanceSelect;
}

@Resolver(() => Attendance)
export class AttendanceResolver {
  constructor(private readonly attendanceController: AttendanceController) {}

  @Mutation(() => Attendance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async attendanceCreateOne(
    @Args()
    attendanceCreateArgs: CreateOneAttendanceArgs,
    @Relations() relations: AttendanceSelect,
  ): Promise<Attendance | void> {
    return await this.attendanceController.createOne({
      ...attendanceCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async attendanceCreateMany(
    @Args()
    createManyAttendanceArgs: CreateManyAttendanceArgs,
  ) {
    return await this.attendanceController.createMany(createManyAttendanceArgs);
  }

  @Query(() => Attendance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  attendanceFindOne(
    @Args()
    attendanceFindUniqueArgs: FindUniqueAttendanceArgs,
    @Relations() relations: AttendanceSelect,
  ): Promise<Attendance | void> {
    return this.attendanceController.findOne({
      ...attendanceFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Attendance], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  attendanceFindMany(
    @Args() attendanceFindManyArgs: FindManyAttendanceArgs,
    @Relations() relations: AttendanceSelect,
  ) {
    return this.attendanceController.findMany({
      ...attendanceFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Attendance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  attendanceFindFirst(
    @Args()
    findFirstAttendanceArgs: FindFirstAttendanceArgs,
    @Relations() relations: AttendanceSelect,
  ): Promise<Attendance | void> {
    return this.attendanceController.findFirst({
      ...findFirstAttendanceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Attendance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async attendanceUpdateOne(
    @Args() attendanceUpdateOneArgs: UpdateOneAttendanceArgs,
    @Relations() relations: AttendanceSelect,
  ) {
    return this.attendanceController.updateOne({
      ...replaceNullWithUndefined(attendanceUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Attendance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async attendanceUpdateMany(@Args() updateManyAttendanceArgs: UpdateManyAttendanceArgs) {
    return this.attendanceController.updateMany(updateManyAttendanceArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async attendanceDelete(
    @Args() deleteOneAttendanceArgs: DeleteOneAttendanceArgs,
    @Relations() relations: AttendanceSelect,
  ) {
    return this.attendanceController.delete({
      ...deleteOneAttendanceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async attendanceDeleteMany(@Args() deleteManyAttendanceArgs: DeleteManyAttendanceArgs) {
    return this.attendanceController.deleteMany(deleteManyAttendanceArgs);
  }

  @Query(() => AggregateAttendance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  attendanceAggregate(@Args() attendanceAggregateArgs: AttendanceAggregateArgs) {
    return this.attendanceController.aggregate(attendanceAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  attendanceCount(@Args() attendanceCountAggregateInput: FindManyAttendanceArgs) {
    return this.attendanceController.count(attendanceCountAggregateInput);
  }
}
