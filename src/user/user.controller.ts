import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ToolsService } from 'src/utils/tools.service';
import * as Session  from 'express-session';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly toolsService: ToolsService     // 注入服务
  ) { }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto, @Req() req) {
    if(createUserDto.role == 'root'){
      return this.userService.register(createUserDto);
    }else{
      let captcha = createUserDto.captcha.toLowerCase();
      let code = String(req.session.code.toLowerCase());
      if(captcha == code){
        return this.userService.register(createUserDto);
      }else{
        throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST);
      }
    }
  }
  @Get('captcha')
  async getCaptcha(@Req() req, @Res() res) {
    const svgCaptcha = await this.toolsService.createCaptcha();   // 创建验证码
    req.session.code = svgCaptcha.text;                           // 使用session保存验证，用于注册或登录验证
    console.log(req.session.code);
    res.type('imase/svg+xml');                                    // 指定返回的类型
    res.send(svgCaptcha.data)                                     // 返回svg
  }



  //登录之后获取用户信息
  // @UseGuards(JwtAuthGuard)
  @Get('login/:username')
  getUserInfo(@Param('username') username: string){
    return this.userService.getUserInfo(username);
  }


  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
