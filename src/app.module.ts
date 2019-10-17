import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-config';
import { TypeOrmConfigService } from './config/database';
import * as path from 'path';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [
      ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')),
      TypeOrmModule.forRootAsync(
      {
        inject: [ConfigModule],
        useClass: TypeOrmConfigService,
      }),
      BookModule,
      AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
