import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './services/app.service';

@Controller()
export class AuthController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('auth.hello')
  getHello(data) {
    return data;
    
  }
}
