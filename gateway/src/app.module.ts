import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AuthController],
  providers: [
    ConfigService,
    {
      provide: 'API_GATEWAY',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('apiService'));
      },
      inject: [ConfigService],
    }
  ],
})
export class AppModule {}
