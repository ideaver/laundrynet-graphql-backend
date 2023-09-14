import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ImageService } from './image.service';

@Injectable()
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  async createOne(imageCreateArgs: Prisma.ImageCreateArgs) {
    return await this.imageService.createOne(imageCreateArgs);
  }

  async createMany(imageCreateManyArgs: Prisma.ImageCreateManyArgs) {
    return await this.imageService.createMany(imageCreateManyArgs);
  }

  async findOne(imageFindUniqueArgs: Prisma.ImageFindUniqueArgs) {
    return await this.imageService.findOne(imageFindUniqueArgs);
  }

  async findMany(imageFindManyArgs: Prisma.ImageFindManyArgs) {
    return await this.imageService.findMany(imageFindManyArgs);
  }

  async findFirst(imageFindFirstArgs: Prisma.ImageFindFirstArgs) {
    return await this.imageService.findFirst(imageFindFirstArgs);
  }

  async updateOne(imageUpdateOneArgs: Prisma.ImageUpdateArgs) {
    return await this.imageService.updateOne(imageUpdateOneArgs);
  }

  async updateMany(imageUpdateManyArgs: Prisma.ImageUpdateManyArgs) {
    return await this.imageService.updateMany(imageUpdateManyArgs);
  }

  async delete(imageDeleteArgs: Prisma.ImageDeleteArgs) {
    return await this.imageService.delete(imageDeleteArgs);
  }

  async deleteMany(imageDeleteManyArgs: Prisma.ImageDeleteManyArgs) {
    return await this.imageService.deleteMany(imageDeleteManyArgs);
  }

  async aggregate(imageAggregateArgs: Prisma.ImageAggregateArgs) {
    return await this.imageService.aggregate(imageAggregateArgs);
  }

  async count(imageCountArgs: Prisma.ImageCountArgs) {
    return await this.imageService.count(imageCountArgs);
  }
}
