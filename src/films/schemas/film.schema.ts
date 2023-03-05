import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FilmDocument = HydratedDocument<Film>
// Film胶片的实体 
@Schema()
export class Film {
    @Prop()
    film_id: string;    // 胶片id
    @Prop()
    film_name: string;  // 胶片名字
    @Prop()
    film_ename: string; // 胶片英文名
    @Prop()
    film_type: string;  // 胶片类型
    @Prop()
    film_icon: string;  // 胶片图标
    @Prop()
    film_brand: string; // 胶片品牌
    @Prop()
    film_iso: number;   // 胶片感光度
    @Prop()
    film_country: string;// 胶片产地
    @Prop()
    film_formats: string;// 胶片格式
    @Prop()
    film_process: string;// 胶片冲洗工艺
    @Prop()
    film_grain: string; // 胶片颗粒度
    @Prop()
    film_contrast: string;// 胶片的对比度
    @Prop()
    film_color_tone: string;// 胶片色调
    @Prop()
    film_use_case: string;// 胶片使用场景
    @Prop()
    film_desc: string; // 胶片的描述
    @Prop({
        type: [{ id: { type: String } }]
    })
    example_card_id: { id: string }[]   // 示例卡片id
}

export const FilmSchema = SchemaFactory.createForClass(Film);