import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectID } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    // private readonly authService: AuthService
  ) { }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    // return this.userService.create(createUserDto);
    return this.userService.register(createUserDto);
  }
  // @Post('login')
  // async login(@Body() LoginDto: LoginDto) {
  //   const authResult = await this.authService.validateUser(
  //     LoginDto.username,
  //     LoginDto.password
  //   );
  //   switch (authResult.code) {
  //     case 1: return this.authService.certificate(authResult.user);
  //     case 2: throw new HttpException('账号或密码错误', HttpStatus.BAD_REQUEST);
  //     // return { code: 600, msg: '账号或密码不正确' }
  //     default: throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
  //     // return { code: 600, msg: '用户不存在' }
  //   }

  // }
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
  remove(@Param('id') id: ObjectID) {
    return this.userService.remove(id);
  }
}
