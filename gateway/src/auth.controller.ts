import { Controller, Get,Post } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('API_GATEWAY') private client: ClientProxy,
  ) {}

  @Get()
  getHello() {
    return this.client.send('auth.hello',{name:'jose julian jacome'});
  }

  @Post()
  create(){}
}
