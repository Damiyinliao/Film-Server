import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class FilmEntity {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    film_id: string;    // 胶片id
    @Column()
    film_name: string;  // 胶片名字
    @Column()
    film_ename: string; // 胶片英文名
    @Column()
    film_type: string;  // 胶片类型
    @Column()
    film_icon: string;  // 胶片图标
    @Column()
    film_brand: string; // 胶片品牌
    @Column()
    film_iso: number;   // 胶片感光度
    @Column()
    film_country: string;// 胶片产地
    @Column()
    film_formats: string;// 胶片格式
    @Column()
    film_process: string;// 胶片冲洗工艺
    @Column()
    film_grain: string; // 胶片颗粒度
    @Column()
    film_contrast: string;// 胶片的对比度
    @Column()
    film_color_tone: string;// 胶片色调
    @Column()
    film_use_case: string;// 胶片使用场景
    @Column()
    film_facts: string; // 胶片的事实
}

