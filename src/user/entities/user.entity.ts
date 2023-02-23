import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
// 喜欢的Recipes/Card
export class LikesId {
    @Column()
    like_id: string;
    constructor(like_id: string) {
        this.like_id = like_id;
    }
}
// 创作的食谱/Card
export class RecipesId {
    @Column()
    recipe_id: string;
    constructor(recipe_id: string) {
        this.recipe_id = recipe_id;
    }
}

@Entity('user')
export class UserEntity {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    user_id: string;            // 用户id
    @Column()
    avatar: string;             // 用户头像地址
    @Column()
    username: string            // 用户名（手机号）
    @Column()
    nickname: string;           // 用户昵称
    @Column()
    password: string;           // 用户密码
    @Column()
    email: string;              // 用户邮箱
    @Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
    role: string;               // 用户角色
    @Column()
    desc: string;               // 用户描述
    @Column()
    tag: string;                // 用户标签
    @Column()
    follows: number;             // 关注的数量
    @Column()
    fans: number;               // 粉丝数
    @Column({
        name: 'create_time',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createTime: Date;           // 创建时间

    @Column(type => RecipesId)
    RecipesId: RecipesId[]      // 创建的RecipeId

    @Column(type => LikesId)
    LikesId: LikesId[]          // 喜欢的RecipeId
}
