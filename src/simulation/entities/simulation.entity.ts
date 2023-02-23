import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


export class ID {
    @Column()
    card_id: string;
  
    constructor(card_id: string) {
      this.card_id = card_id;
    }
  }

// Film Simulation 胶片模拟的实体
@Entity()
export class SimulationEntity {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    simulation_id: string;          // 胶片模拟的id
    @Column()
    sim_cname: string;              // 胶片模拟中文名称
    @Column()
    sim_ename: string;              // 胶片模拟英文名
    @Column()
    sim_img_url: string;            // 胶片模拟图标Icon地址
    @Column()
    sim_desc: string;               // 胶片模拟的描述
    @Column()
    sim_use_case: string;           // 使用场景
    @Column(type => ID)            
    example_card_ids: ID[];          // 对应的展示的的作品的id
}
