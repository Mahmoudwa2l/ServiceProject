import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly username: string;
  readonly photo: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
  readonly readList: string[];
  readonly readListLength: number;
  readonly resetPasswordToken: string;
  readonly resetPasswordExpire: Date;
}
