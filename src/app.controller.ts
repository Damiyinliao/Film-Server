import { Body, Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}
  // 登录成功颁发token
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() body) {
    // 去生成token
    return await this.authService.login(body);
  }
  // 检查是否携带正确的token
  @UseGuards(JwtAuthGuard)
  @Get('login/profile')
  getProfile(@Request() req) {
    return {
      msg: "访问了该路由"
    };
  }
}

