// Microservice: MERN-BLOG-MICROSERVICE
// src/story/story.controller.ts
import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { StoryService } from './story.service';

import { CreateStoryDto, UpdateStoryDto } from './dto/create-story.dto';


@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  addStory(@Body() createStoryDto: CreateStoryDto) {
    return this.storyService.addStory(createStoryDto);
  }

  @Get()
  getAllStories() {
    return this.storyService.getAllStories();
  }

  @Get(':slug')
  detailStory(@Param('slug') slug: string) {
    return this.storyService.detailStory(slug);
  }

  @Post(':slug/like')
  likeStory(@Param('slug') slug: string, @Body() activeUser: any) {
    return this.storyService.likeStory(slug, activeUser);
  }

  @Get(':slug/edit')
  editStoryPage(@Param('slug') slug: string) {
    return this.storyService.editStoryPage(slug);
  }

  @Patch(':slug/edit')
  editStory(@Param('slug') slug: string, @Body() updateStoryDto: UpdateStoryDto) {
    return this.storyService.editStory(slug, updateStoryDto);
  }

  @Delete(':slug')
  deleteStory(@Param('slug') slug: string) {
    return this.storyService.deleteStory(slug);
  }
}
