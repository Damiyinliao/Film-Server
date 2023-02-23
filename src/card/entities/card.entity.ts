import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

export class Photo {
    @Column()
    url: string;

    constructor(url: string){
        this.url = url;
    }
}

@Entity()
export class CardEntity {
    // 默认的卡片id
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    user_id: string;            // 用户id
    @Column()
    user_avatar: string;       //用户头像地址
    @Column(type => Photo)      
    photos: Photo[]             //图片地址
    @Column()
    card_title: string;         //胶片食谱标题
    @Column()
    film_simulation: string;    //胶片模拟名称
    @Column()
    dynamic_range: string;      //动态范围
    @Column()
    hightlight: string;         //高光
    @Column()
    shadow: string;             //阴影
    @Column()
    color: string;              //色彩
    @Column()
    noise_reduction: string;    //降噪
    @Column()
    sharpening: string;         //锐度
    @Column()
    clarity: string;            //清晰度
    @Column()
    grain_effect: string;       //颗粒
    @Column()
    color_effect: string;       //色彩效果
    @Column()
    color_effect_blue: string;  //彩色FX蓝色
    @Column()
    white_balance: string;      //白平衡
    @Column()
    iso: string;                //iso
    @Column()
    ev: string;                 //曝光补偿  exposure_compensation
    @Column()
    equipment: string;          // 拍摄设备
    @Column({
        name: 'create_time',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createTime: Date;           // 创建时间
}
