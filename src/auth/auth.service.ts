// import { Inject, Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UserService } from 'src/user/user.service';
// import * as bcryptjs from 'bcryptjs'
// @Injectable()
// export class AuthService {
//     constructor(
//         private readonly userService: UserService,
//         private readonly jwtService: JwtService
//     ) { }
//     // 校验用户信息
//     async validateUser(username: string, password: string): Promise<any> {
//         const user = await this.userService.findOne(username);
//         if (user) {
//             const hashedPassword = user.password;
//             // const salt = 10;
//             // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
//             const isEqual = bcryptjs.compareSync(password, hashedPassword);
//             // 密码正确
//             if (isEqual) {
//                 return {
//                     code: 1,
//                     user
//                 };
//             } else {
//                 // 密码错误
//                 return {
//                     code: 2,
//                     user: null
//                 }
//             }
//         } else {
//             // throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
//             return {
//                 // 用户名不正确，查不到
//                 code: 3,
//                 user: null
//             }
//         }
//     }
//     // 处理jwt签证
//     async certificate(user: any) {
//         const payload = {
//             name: user.username,
//         };
//         try {
//             const token = this.jwtService.sign(payload);
//             return {
//                 data: token,
//                 msg: '登陆成功'
//             }
//         } catch (error) {
//             return {
//                 code: 600,
//                 msg: '账号或密码错误'
//             }

//         }
//     }
// }
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs'
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && bcryptjs.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  // 登录成功生成token，并返回给前端
  async login(user: any) {
    const payload = { username: user.username };
    return {
      msg:'登陆成功',
      access_token: this.jwtService.sign(payload),
    };
  }
}