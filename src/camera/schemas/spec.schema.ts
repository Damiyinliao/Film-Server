import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Spec{
    @Prop()
    name:string;    //规格名称
    // @Prop()
    // icon?:string;   //规格对应的icon图标
    @Prop()
    value:string    //规格的值
}
export const SpecSchema = SchemaFactory.createForClass(Spec)