import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const createTypeOrmOptions = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const dbType = configService.get<string>('DB_TYPE');

  if (dbType === 'sqlite' || !configService.get<string>('MYSQL_HOST')) {
    return {
      type: 'sqlite',
      database: configService.get<string>('DB_DATABASE', ':memory:'),
      autoLoadEntities: true,
      synchronize: true,
    };
  }

  return {
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST', 'localhost'),
    port: parseInt(configService.get<string>('MYSQL_PORT', '3306'), 10),
    username: configService.get<string>('MYSQL_USER', 'root'),
    password: configService.get<string>('MYSQL_PASSWORD', ''),
    database: configService.get<string>('MYSQL_DATABASE', 'app'),
    autoLoadEntities: true,
    synchronize: true,
  };
};
