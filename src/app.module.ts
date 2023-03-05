import { MiddlewareConsumer, Module } from '@nestjs/common';
import * as winston from 'winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { join } from 'path';
import * as moment from 'moment';
import { LoggerMiddlewave } from './common/middleware/logger.middleware';
import { SimulationModule } from './simulation/simulation.module';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CameraModule } from './camera/camera.module';
import { RecipeModule } from './recipe/recipe.module';
@Module({
  imports: [
    // 停止使用TypeOrm改使用Mongoose
    MongooseModule.forRoot('mongodb://localhost:27017/filmgallery'),
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
    UserModule,
    FilmsModule,
    AuthModule,
    CameraModule,
    RecipeModule
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
