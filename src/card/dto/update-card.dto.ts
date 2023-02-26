import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { CreateCardDto } from './create-card.dto';

export class UpdateCardDto extends PartialType(CreateCardDto) {
    @ApiProperty({
        description: 'card的id'
    })
    card_id: string;

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
    user_avatar: string;

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
        description: 'D范围优先级'
    })    
    drp: string; 

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
    @ApiProperty({
        description: '拍摄设备'
    })              
    @IsString()
    equipment: string;

    @ApiProperty({
        description: '创建时间'
    })
    createTime: Date;
    
    @ApiProperty({
        description: '图片地址'
    })
    @IsArray()
    photos: {url: string}[]       
}
