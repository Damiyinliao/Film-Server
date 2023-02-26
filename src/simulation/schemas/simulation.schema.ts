import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SimulationDocument = HydratedDocument<Simulation>


// Film Simulation 胶片模拟的
@Schema()
export class Simulation {
    @Prop()
    simulation_id: string;          // 胶片模拟的id
    @Prop()
    sim_cname: string;              // 胶片模拟中文名称
    @Prop()
    sim_ename: string;              // 胶片模拟英文名
    @Prop()
    sim_img_url: string;            // 胶片模拟图标Icon地址
    @Prop()
    sim_desc: string;               // 胶片模拟的描述
    @Prop()
    sim_use_case: string;           // 使用场景
    @Prop({
      type: [{_id: {type: String}}]
    })            
    example_card_ids: {_id: string}[];          // 对应的展示的的作品的id
}
export const SimulationSchema = SchemaFactory.createForClass(Simulation);