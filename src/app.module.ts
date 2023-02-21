import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as winston from 'winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { FilmEntity } from './films/entities/film.entity';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { join } from 'path';
import * as moment from 'moment';
import { LoggerMiddlewave } from './common/middleware/logger.middleware';
import { SimulationModule } from './simulation/simulation.module';

import { SimulationEntity } from './simulation/entities/simulation.entity';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    FilmsModule,
    // 连接数据库
    TypeOrmModule.forRoot({
      type: 'mongodb',
      username: 'root',
      password: '123456',
      host: 'localhost',
      port: 27017,
      database: 'filmgallery',
      // 导入entity
      //autoLoadEntities: true,
      entities:[FilmEntity,SimulationEntity],
      // 开启同步
      synchronize: true
    }),
    // 开启日志打印
    WinstonModule.forRoot({
      transports: [
        // 将日志打印在文件里
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {})
          ),
          // 日志文件名（带上日期）
          filename: join(process.cwd(), `nest-${moment().format('MM-DD')}.log`)
        })
      ]
    }),
    SimulationModule,
    CardModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // 挂在日志打印中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddlewave)
            .forRoutes('*');            // 为哪个路由添加中间价
  }
}
