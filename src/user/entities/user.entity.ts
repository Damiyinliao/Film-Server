import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

// 喜欢的Recipes/Card
export class Likes{
    @Column()
    like_id: string;
    constructor( like_id: string){
        this.like_id = like_id;
    }
}

export class Recipes {
    @Column()
    recipe_id: string;
    constructor(recipe_id: string){
        this.recipe_id = recipe_id;
    }
}

@Entity()
export class UserEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    user_id: string;            // 用户id

    @Column()
    user_img_url: string;       // 用户头像地址

    @Column()
    user_name: string;          // 用户名称

    @Column()
    user_desc: string;          // 用户描述

    @Column()
    tag: string;                // 用户标签

    

}
