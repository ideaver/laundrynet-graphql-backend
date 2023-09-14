// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateImage,
  CreateManyImageArgs,
  CreateOneImageArgs,
  DeleteManyImageArgs,
  DeleteOneImageArgs,
  FindFirstImageArgs,
  FindManyImageArgs,
  FindUniqueImageArgs,
  Image,
  ImageAggregateArgs,
  UpdateManyImageArgs,
  UpdateOneImageArgs,
} from 'src/@generated';
import { ImageController } from './image.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ImageSelect {
  select: Prisma.ImageSelect;
}

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageController: ImageController) {}

  @Mutation(() => Image, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async imageCreateOne(
    @Args()
    imageCreateArgs: CreateOneImageArgs,
    @Relations() relations: ImageSelect,
  ): Promise<Image | void> {
    return await this.imageController.createOne({
      ...imageCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async imageCreateMany(
    @Args()
    createManyImageArgs: CreateManyImageArgs,
  ) {
    return await this.imageController.createMany(createManyImageArgs);
  }

  @Query(() => Image, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  imageFindOne(
    @Args()
    imageFindUniqueArgs: FindUniqueImageArgs,
    @Relations() relations: ImageSelect,
  ): Promise<Image | void> {
    return this.imageController.findOne({
      ...imageFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Image], {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  imageFindMany(
    @Args() imageFindManyArgs: FindManyImageArgs,
    @Relations() relations: ImageSelect,
  ) {
    return this.imageController.findMany({
      ...imageFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Image, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  imageFindFirst(
    @Args()
    findFirstImageArgs: FindFirstImageArgs,
    @Relations() relations: ImageSelect,
  ): Promise<Image | void> {
    return this.imageController.findFirst({
      ...findFirstImageArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Image, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async imageUpdateOne(
    @Args() imageUpdateOneArgs: UpdateOneImageArgs,
    @Relations() relations: ImageSelect,
  ) {
    return this.imageController.updateOne({
      ...replaceNullWithUndefined(imageUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Image, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  async imageUpdateMany(@Args() updateManyImageArgs: UpdateManyImageArgs) {
    return this.imageController.updateMany(updateManyImageArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async imageDelete(
    @Args() deleteOneImageArgs: DeleteOneImageArgs,
    @Relations() relations: ImageSelect,
  ) {
    return this.imageController.delete({
      ...deleteOneImageArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'deskripsinya-ada-disini-loh',
  })
  async imageDeleteMany(@Args() deleteManyImageArgs: DeleteManyImageArgs) {
    return this.imageController.deleteMany(deleteManyImageArgs);
  }

  @Query(() => AggregateImage, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  imageAggregate(@Args() imageAggregateArgs: ImageAggregateArgs) {
    return this.imageController.aggregate(imageAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'deskripsinya-ada-disini-loh',
  })
  imageCount(@Args() imageCountAggregateInput: FindManyImageArgs) {
    return this.imageController.count(imageCountAggregateInput);
  }
}
