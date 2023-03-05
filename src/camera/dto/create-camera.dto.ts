import { ApiProperty } from "@nestjs/swagger";

export class CreateCameraDto {
    @ApiProperty({
        description:'胶片相机全称',
    })
    full_name?: string;  
    @ApiProperty({
        description:'简称'
    })
    name?: string;      
    @ApiProperty({
        description:'品牌'
    })
    brand?: string;      
    @ApiProperty({
        description:'类型'
    })
    type?: string;       
    @ApiProperty({
        description:'小图'
    })
    pic_url_small?: string;  
    @ApiProperty({
        description:'大图'
    })
    pic_url_big?: string;    
    @ApiProperty({
        description:'欧洲/亚洲/大洋洲名称'
    })
    eur_name?: string;       
    @ApiProperty({
        description:'日本名称'
    })
    jap_name?: string;       
    @ApiProperty({
        description:'美洲名称'
    })
    ame_name?: string;       
    @ApiProperty({
        description:'上市时间'
    })
    ttm?: string;             
    @ApiProperty({
        description:'发行价格'
    })
    price?: string;          
    @ApiProperty({
        description:'描述'
    })
    desc?: string;           
    @ApiProperty({
        description:'各个参数以及各个值'
    })
    spec?:{name?:string, icon?:string, value?:string}[];          
    @ApiProperty({
        description:'介绍的card的id'
    })
    intro_card_id?: { _id: string }[]   
}
