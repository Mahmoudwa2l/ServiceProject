// api-gateway/src/app.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  @Client({ transport: Transport.TCP })
  client: ClientProxy;

  @Get()
  getHello(@Req() request): any {
    return this.client.send('stories', request.body);
  }
}
