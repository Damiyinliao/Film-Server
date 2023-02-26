import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ToolsService } from 'src/utils/tools.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';

@Module({
  controllers: [UserController],
  providers: [UserService, ToolsService], // 在要使用的module引入tools
  imports: [MongooseModule.forFeature([{name: User.name, schema:UserSchema}])],
  exports: [UserService]
})
export class UserModule {}
