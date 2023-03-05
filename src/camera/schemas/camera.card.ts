import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { HydratedDocument } from "mongoose";

import { Spec, SpecSchema } from "src/camera/schemas/spec.schema";

export type CameraDocument = HydratedDocument<Camera>
@Schema()
export class Camera {
    @Prop()
    full_name?: string;  //胶片相机全称
    @Prop()
    name?: string;       // 简称
    @Prop()
    brand?: string;      // 品牌
    @Prop()
    type?: string;       // 类型（
    @Prop()
    pic_url_small?: string;  //小图
    @Prop()
    pic_url_big?: string;    // 大图
    @Prop()
    eur_name?: string;        //欧洲/亚洲/大洋洲名称
    @Prop()
    jap_name?: string;        //日本名称
    @Prop()
    ame_name?: string;        //美洲名称
    @Prop()
    ttm?: string;             // 上市时间
    @Prop()
    price?: string;           //发行价格
    @Prop()
    desc?: string;            //描述
    @Prop({ type: [SpecSchema] })
    spec?: Spec[];           // 各种参数的总和
    @Prop({
        type: [{ _id: { type: String } }]
    })
    intro_card_id?: { _id: string }[]    //介绍的card的id


}
export const CameraSchema = SchemaFactory.createForClass(Camera);
