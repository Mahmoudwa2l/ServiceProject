// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const mongoUri = 'mongodb+srv://magdy:magdy@cluster0.ckknyzq.mongodb.net/';

  try {
    await mongoose.connect(mongoUri);

    console.log(`Connected to MongoDB at ${mongoUri}`);
    const app = await NestFactory.create(AppModule);
    await app.listen(6000);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

bootstrap();
