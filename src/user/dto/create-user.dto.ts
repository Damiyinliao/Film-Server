import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: '用户名',
    })
    @IsNotEmpty({
        message: '请输入用户名'
    })
    username: string;

    @ApiProperty({
        description: '密码'
    })
    @IsNotEmpty({
        message: '请输入密码'
    })
    password:string;

    @ApiProperty({
        description: '用户角色'
    })
    role: string;

    @ApiProperty({
        description: '用户id'
    })
    user_id: string;

    @ApiProperty({
        description: '用户头像地址'
    })
    avator: string;

    @ApiProperty({
        description: '用户昵称'
    })
    nickname: string;

    @ApiProperty({
        description: '用户描述'
    })
    desc: string;

    @ApiProperty({
        description: '用户标签'
    })
    tag: string;

    @ApiProperty({
        description: '关注的数量'
    })
    follows: number;

    @ApiProperty({
        description: '粉丝数量'
    })
    fans: number;

    @ApiProperty({
        description: '账号创建时间'
    })
    createTime: Date;

    @ApiProperty({
        description: '收藏的Recipe'
    })
    RecipesId: {recipe_id: string}[]

    @ApiProperty({
        description: '喜欢的Recipe'
    })
    LikesId: {like_id: string}[]
}
