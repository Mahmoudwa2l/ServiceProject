// src/story/story.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoryDto, UpdateStoryDto } from './dto/create-story.dto';

@Injectable()
export class StoryService {
  constructor(@InjectModel('Story') private readonly storyModel: Model<any>) {}

  async addStory(createStoryDto: CreateStoryDto) {
    const createdStory = new this.storyModel(createStoryDto);
    return createdStory.save();
  }

  async getAllStories() {
    return this.storyModel.find().exec();
  }

  async detailStory(slug: string) {
    return this.storyModel.findOne({ slug }).exec();
  }

  async likeStory(slug: string, activeUser: any) {
    const story = await this.storyModel.findOne({ slug }).exec();
    // Implement like/unlike logic
    return story;
  }

  async editStoryPage(slug: string) {
    return this.storyModel.findOne({ slug }).exec();
  }

  async editStory(slug: string, updateStoryDto: UpdateStoryDto) {
    return this.storyModel.findOneAndUpdate({ slug }, updateStoryDto, { new: true }).exec();
  }

  async deleteStory(slug: string) {
    await this.storyModel.deleteOne({ slug }).exec();
    return { success: true, message: 'Story deleted successfully' };
  }
}
