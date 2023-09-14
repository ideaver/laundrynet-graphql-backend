// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateReview,
  CreateManyReviewArgs,
  CreateOneReviewArgs,
  DeleteManyReviewArgs,
  DeleteOneReviewArgs,
  FindFirstReviewArgs,
  FindManyReviewArgs,
  FindUniqueReviewArgs,
  Review,
  ReviewAggregateArgs,
  UpdateManyReviewArgs,
  UpdateOneReviewArgs,
} from 'src/@generated';
import { ReviewController } from './review.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ReviewSelect {
  select: Prisma.ReviewSelect;
}

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewController: ReviewController) {}

  @Mutation(() => Review, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async reviewCreateOne(
    @Args()
    reviewCreateArgs: CreateOneReviewArgs,
    @Relations() relations: ReviewSelect,
  ): Promise<Review | void> {
    return await this.reviewController.createOne({
      ...reviewCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async reviewCreateMany(
    @Args()
    createManyReviewArgs: CreateManyReviewArgs,
  ) {
    return await this.reviewController.createMany(createManyReviewArgs);
  }

  @Query(() => Review, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  reviewFindOne(
    @Args()
    reviewFindUniqueArgs: FindUniqueReviewArgs,
    @Relations() relations: ReviewSelect,
  ): Promise<Review | void> {
    return this.reviewController.findOne({
      ...reviewFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Review], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  reviewFindMany(
    @Args() reviewFindManyArgs: FindManyReviewArgs,
    @Relations() relations: ReviewSelect,
  ) {
    return this.reviewController.findMany({
      ...reviewFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Review, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  reviewFindFirst(
    @Args()
    findFirstReviewArgs: FindFirstReviewArgs,
    @Relations() relations: ReviewSelect,
  ): Promise<Review | void> {
    return this.reviewController.findFirst({
      ...findFirstReviewArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Review, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async reviewUpdateOne(
    @Args() reviewUpdateOneArgs: UpdateOneReviewArgs,
    @Relations() relations: ReviewSelect,
  ) {
    return this.reviewController.updateOne({
      ...replaceNullWithUndefined(reviewUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Review, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async reviewUpdateMany(@Args() updateManyReviewArgs: UpdateManyReviewArgs) {
    return this.reviewController.updateMany(updateManyReviewArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async reviewDelete(
    @Args() deleteOneReviewArgs: DeleteOneReviewArgs,
    @Relations() relations: ReviewSelect,
  ) {
    return this.reviewController.delete({
      ...deleteOneReviewArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async reviewDeleteMany(@Args() deleteManyReviewArgs: DeleteManyReviewArgs) {
    return this.reviewController.deleteMany(deleteManyReviewArgs);
  }

  @Query(() => AggregateReview, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  reviewAggregate(@Args() reviewAggregateArgs: ReviewAggregateArgs) {
    return this.reviewController.aggregate(reviewAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  reviewCount(@Args() reviewCountAggregateInput: FindManyReviewArgs) {
    return this.reviewController.count(reviewCountAggregateInput);
  }
}
