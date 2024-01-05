import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('stories')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createStory(@Body() storyData: any) {
    // Your logic to handle the creation of a story
    // This is where you should call the service to create a story
    return { message: 'Story created successfully', data: storyData };
  }
}
