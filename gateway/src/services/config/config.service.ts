import { Transport } from '@nestjs/microservices';

type Key = 'apiService' | 'port';
export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    
    this.envConfig.port= process.env.PORT;
    this.envConfig.apiService = {
      options: {
        servers: [process.env.NATS_SERVER],
      },
      transport: Transport.NATS,
    };
  }

  get(key: Key): any {
    return this.envConfig[key];
  }
}
