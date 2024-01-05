import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    type: String,
    required: [true, 'Please provide a username'],
  })
  username: string;

  @Prop({
    type: String,
    default: 'user.png',
  })
  photo: string;

  @Prop({
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  })
  email: string;

  @Prop({
    type: String,
    minlength: [6, 'Please provide a password with a minimum length of 6'],
    required: [true, 'Please provide a password'],
    select: false,
  })
  password: string;

  @Prop({
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  })
  role: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Story' }])
  readList: string[];

  @Prop({
    type: Number,
    default: 0,
  })
  readListLength: number;

  @Prop()
  resetPasswordToken: string;

  @Prop()
  resetPasswordExpire: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
