// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoryModule } from './story/story.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StoryModule,
    MongooseModule.forRoot('mongodb+srv://magdy:magdy@cluster0.ckknyzq.mongodb.net/'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
