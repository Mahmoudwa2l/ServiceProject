// src/items/story.model.ts
import { Schema, Document, model } from 'mongoose';

export interface Story extends Document {
  readonly title: string;
  readonly content: string;
  readonly author: string;
  readonly createdAt?: Date;
}

export const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const StoryModel = model<Story>('Story', StorySchema);
