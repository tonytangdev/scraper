import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const DATASOURCE_PROVIDER = Symbol('DATASOURCE_PROVIDER');

export const databaseProviders = [
  {
    provide: DATASOURCE_PROVIDER,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.getOrThrow<string>('DB_HOST'),
        port: configService.getOrThrow<number>('DB_PORT'),
        username: configService.getOrThrow<string>('DB_USER'),
        password: configService.getOrThrow<string>('DB_PASSWORD'),
        database: configService.getOrThrow<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
