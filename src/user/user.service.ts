import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import  * as bcryptjs  from 'bcryptjs';
@Injectable()
export class UserService {
  // 将实体 映射到仓库
  constructor(@InjectRepository(UserEntity) private UserRepo: Repository<UserEntity>) { }

  create(createUserDto: CreateUserDto) {

  }
  // 用户注册
  async register(createUser: CreateUserDto) {
    let { username, password } = createUser;
    const saltOrRounds  = 10;
    const hashPassword = bcryptjs.hashSync(password, saltOrRounds);     // 密码加密
    let user = await this.UserRepo.findOne({ where: { username } })
    if (user) {
      throw new HttpException('用户已经存在', HttpStatus.BAD_REQUEST);
    }
    createUser.password = hashPassword;
    let newUser = this.UserRepo.create(createUser);
    return await this.UserRepo.save(newUser);
  }
  // 登录
  // Partial<T> 可以快速把某个接口类型中定义的属性变成可选的(Optional)
  // async login(user: Partial<CreateUserDto>) {
  //   const { username, password } = user;
  //   const existUser = await this.UserRepo.findOne({ where: { username } })
  //   console.log(existUser.role);
  //   if (!existUser || existUser.password != password) {
  //     throw new BadRequestException('用户名或者密码错误');
  //   }
  //   return existUser;
  // }


  async findAll() {
    return await this.UserRepo.find();
  }

  async findOne(username: string) {
    return await this.UserRepo.findOne({ where: { username } });
  }
  // 更新账户信息
  async update(id: string, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);

    return await this.UserRepo.update({ username: id }, {
      avatar: updateUserDto.avatar,
      nickname: updateUserDto.nickname,
      email: updateUserDto.email,
      desc: updateUserDto.desc,
      tag: updateUserDto.tag,
      follows: updateUserDto.follows,
      fans: updateUserDto.fans
    })
  }

  async remove(id: ObjectID) {
    return await this.UserRepo.delete(id);
  }
}
