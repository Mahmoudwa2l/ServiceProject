import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { UserSchema } from './schema/user.schema';
import { UserService } from './microservices/user/user.service';
import { UserController } from './controller/user/user.controller';
dotenv.config();
@Module({
  imports: [ MongooseModule.forRoot(process.env.MONGODB_URL,{dbName: 'userdb'}),MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    
],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
