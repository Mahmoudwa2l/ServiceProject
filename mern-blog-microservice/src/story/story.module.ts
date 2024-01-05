// src/items/story.module.ts
import { Module } from '@nestjs/common';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StorySchema, StoryModel } from './story.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Story', schema: StorySchema }]),
  ],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
