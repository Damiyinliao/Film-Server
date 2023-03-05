import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Formula, FormulaSchema } from "./formula.schema";

export type RecipeDocument = HydratedDocument<Recipe>
@Schema()
export class Recipe {
    @Prop()
    sim_id:string;  //对应的胶片模拟
    @Prop()
    name?: string;   //配方名字
    @Prop()
    chip?: string;    //适用的芯片
    @Prop({ type: [FormulaSchema] })
    formula?: Formula[]
    @Prop({
        type: [{ url: { type: String } }]
    })
    photos?: { url: string }[]; //照片
}
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
