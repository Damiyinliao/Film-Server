import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcryptjs from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  // 将实体 映射到仓库
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
  // 用户注册
  async register(createUser: CreateUserDto): Promise<any> {
    let { username, password } = createUser;
    const saltOrRounds = 10;
    const hashPassword = bcryptjs.hashSync(password, saltOrRounds);     // 密码加密
    let user = await this.userModel.findOne( { username } )
    if (user) {
      throw new HttpException('用户已经存在', HttpStatus.BAD_REQUEST);
    }
    createUser.password = hashPassword;
    let newUser = new this.userModel(createUser);
    let res = await newUser.save();
    return {
      res,
      msg: 'REGISTERSUCCESS'
    }
  }
  //查找所有用户
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  // 获取用户信息
  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne( { username } );
  }
  // 返回用户信息
  async getUserInfo(username: string): Promise<any> {
    let user = await this.userModel.findOne({username});
    user.password = null;
    console.log(user);
    return user;
  }
  // 更新账户信息
  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    console.log(updateUserDto);

    return await this.userModel.findOneAndUpdate({ username: id }, updateUserDto, {new: true}).exec()
  }

  async remove(id: string): Promise<any> {
    return await this.userModel.deleteOne({_id: id});
  }
}
