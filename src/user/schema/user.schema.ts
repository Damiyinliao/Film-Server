import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>
@Schema()
export class User {
    @Prop({
        required: true
    })
    username: string;           // 用户名（手机号）
    @Prop({
        required: true
    })
    password: string;           // 用户密码
    @Prop({
        required: true
    })
    avatar?: string;             // 用户头像地址          
    @Prop()
    nickname?: string;           // 用户昵称
    @Prop()
    email?: string;              // 用户邮箱
    @Prop({
        required: true
    })
    role: string;               // 用户角色,有两种，root和visitor
    @Prop()
    desc?: string;               // 用户描述
    @Prop()
    tag?: string;                // 用户标签
    @Prop()
    follows?: number;            // 关注的数量
    @Prop()
    fans?: number;               // 粉丝数
    @Prop()
    createTime: Date;           // 创建时间

    @Prop({
        type: [{ _id: { type: String } }]
    })
    RecipesId: { _id: string }[]      // 创建的卡片id

    @Prop({
        type: [{ _id: { type: String } }]
    })
    LikesId: { _id: string }[]          // 喜欢的卡片id
}

export const UserSchema = SchemaFactory.createForClass(User);