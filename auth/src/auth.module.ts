import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AppService],
})
export class AuthModule {}
