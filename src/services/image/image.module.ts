import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageResolver } from './image.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ImageController } from './image.controller';

@Module({
  providers: [PrismaService, ImageResolver, ImageController, ImageService],
  exports: [ImageController],
})
export class ImageModule {}
