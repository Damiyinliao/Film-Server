import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateCardDto {

    // @ApiProperty({

    // })
    // card_id: string;            // 卡片id

    @ApiProperty({
        required: true,
        description: '用户id'
    })
    @IsString()
    user_id: string;           

    @ApiProperty({
        description: '用户头像地址'
    })
    @IsString()
    user_img_url: string;

    @ApiProperty({
        description: '图片地址'
    })
    @IsArray()
    photos: {url: string}[]

    @ApiProperty({
        description: '胶片食谱标题'
    })
    @IsString()
    card_title: string;         

    @ApiProperty({
        description:'胶片模拟名称'
    })
    @IsString()
    film_simulation: string;    

    @ApiProperty({
        description: '动态范围'
    })
    dynamic_range: string;      

    @ApiProperty({
        description: '高光'
    })
    @IsString()
    hightlight: string;         

    @ApiProperty({
        description:'阴影'
    })
    shadow: string;             

    @ApiProperty({
        description: '色彩'
    })
    color: string;              

    @ApiProperty({
        description:'降噪'
    })
    @IsString()
    noise_reduction: string;    

    @ApiProperty({
        description: '锐度'
    })
    sharpening: string;         

    @ApiProperty({
        description: '清晰度'
    })
    clarity: string;            

    @ApiProperty({
        description: '颗粒'
    })
    @IsString()
    grain_effect: string;       

    @ApiProperty({
        description: '色彩效果'
    })
    color_effect: string;       

    @ApiProperty({
        description: '彩色FX蓝色'
    })
    color_effect_blue: string;  

    @ApiProperty({
        description: '白平衡'
    })
    white_balance: string;      

    @ApiProperty({
        description: 'iso'
    })
    iso: string;                

    @ApiProperty({
        description: '曝光补偿(exposure_compensation)'
    })
    @IsString()
    ev: string;                 

}
