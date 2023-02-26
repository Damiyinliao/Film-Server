import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局前缀
  app.setGlobalPrefix('v1');
  // 设置全局管道
  app.useGlobalPipes(new ValidationPipe());
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 初始化Swagger
  const config = new DocumentBuilder()
    .setTitle('Film Api')
    .setDescription('胶片社区网站的Api')
    .setVersion('1.0')
    .addTag('Film')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // 使用session ession是一种服务器端的状态管理技术。
  //浏览器访问服务器时，服务器创建一个session对象(该对象有一个唯一的id号，称之为sessionId),服务器在默认情况下，会将sessionId以cookie的方式(set-cookie消息头)发送给浏览器,浏览器会将sessionId保存到内存。当浏览器再次访问服务器时，会将sessionId发送给服务器，服务器依据sessionId就可找到之前创建的session对象。
  app.use(session({
    secret: 'hw',
    name: 'hw.session'
  }));
  await app.listen(3000);
}
bootstrap();
