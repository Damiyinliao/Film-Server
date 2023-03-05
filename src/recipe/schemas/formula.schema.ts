import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Formula {
    @Prop()
    name?: string;  //参数名
    @Prop()
    value?: string;  //参数值
    @Prop()
    icon?: string;   //对应的图标地址
}
export const FormulaSchema = SchemaFactory.createForClass(Formula)