// src/story/story.schema.ts

import * as mongoose from 'mongoose';

export const StorySchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User schema
  },
  image: String,
  readtime: Number,
  // Add other fields as needed
});
