import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  async createOne(imageCreateArgs: Prisma.ImageCreateArgs) {
    try {
      return await this.prisma.image.create(imageCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(imageCreateManyArgs: Prisma.ImageCreateManyArgs) {
    try {
      return await this.prisma.image.createMany(imageCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(imageFindUniqueArgs: Prisma.ImageFindUniqueArgs) {
    try {
      return await this.prisma.image.findUnique(imageFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(imageFindManyArgs: Prisma.ImageFindManyArgs) {
    try {
      return await this.prisma.image.findMany(imageFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(imageFindFirstArgs: Prisma.ImageFindFirstArgs) {
    try {
      return await this.prisma.image.findFirst(imageFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(imageUpdateOneArgs: Prisma.ImageUpdateArgs) {
    try {
      return await this.prisma.image.update(imageUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(imageUpdateManyArgs: Prisma.ImageUpdateManyArgs) {
    try {
      return await this.prisma.image.updateMany(imageUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(imageDeleteArgs: Prisma.ImageDeleteArgs) {
    try {
      await this.prisma.image.delete(imageDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(imageDeleteManyArgs: Prisma.ImageDeleteManyArgs) {
    try {
      await this.prisma.image.deleteMany(imageDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(imageAggregateArgs: Prisma.ImageAggregateArgs) {
    try {
      return await this.prisma.image.aggregate(imageAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(imageCountArgs: Prisma.ImageCountArgs) {
    try {
      return await this.prisma.image.count(imageCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
