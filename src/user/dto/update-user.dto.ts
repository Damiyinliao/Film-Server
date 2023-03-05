import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: '用户头像地址'
    })
    avatar?: string;
    @ApiProperty({
        description: '用户昵称'
    })
    nickname?: string;
    @ApiProperty({
        description: '用户邮箱'
    })
    email?: string;
    @ApiProperty({
        description: '用户描述'
    })
    desc?: string;
    @ApiProperty({
        description: '用户标签'
    })
    tag?: string;
    @ApiProperty({
        description: '关注的数量'
    })
    follows?: number;
    @ApiProperty({
        description: '粉丝数'
    })
    fans?: number;
    @ApiProperty({
        description:'辨别是要添加RecipesId还是LikesId，一次只能添加一个'
    })
    dis?:string;
    @ApiProperty({
        description:'携带的RecipesId或者是LikesId'
    })
    _id?:string
}
