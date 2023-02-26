import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type CardDocument = HydratedDocument<Card>

@Schema()
export class Card {
    @Prop()
    card_title: string;         // 卡片标题
    @Prop({
        required: true
    })
    user_id: string;            // 卡片所属用户id
    @Prop()
    user_avatar: string;        // 卡片所属用户头像
    @Prop()
    film_simulation: "CC";      // 胶片模拟名称
    @Prop()
    dynamic_range?: string;      // 动态范围
    @Prop()
    drp?: string;                // D范围优先级
    @Prop()
    hightlight?: string;
    @Prop()
    shadow?: string;             //阴影
    @Prop()
    color?: string;              //色彩
    @Prop()
    noise_reduction?: string;    //降噪
    @Prop()
    sharpening?: string;         //锐度
    @Prop()
    clarity?: string;            //清晰度
    @Prop()
    grain_effect?: string;       //颗粒
    @Prop()
    color_effect?: string;       //色彩效果
    @Prop()
    color_effect_blue?: string;  //彩色FX蓝色
    @Prop()
    white_balance?: string;      //白平衡
    @Prop()
    iso?: string;                //iso
    @Prop()
    ev?: string;                 //曝光补偿  exposure_compensation
    @Prop()
    equipment?: string;          // 拍摄设备
    @Prop()
    createTime?: Date;           // 创建时间
    @Prop({
        type: [{ url: { type: String } }]
    })
    photos?: { url: string }[];
}

export const CardSchema = SchemaFactory.createForClass(Card);