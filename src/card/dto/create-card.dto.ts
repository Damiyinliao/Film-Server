import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateCardDto {
    @ApiProperty({
        required: true,
        description: '卡片所属用户id'
    })
    @IsString()
    username: string;   
    @ApiProperty({
        description: '卡片所属用户昵称'
    })        
    nickanme?: string;
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
    film_simulation?: string;    

    @ApiProperty({
        description: '动态范围'
    })
    dynamic_range?: string;  
    
    @ApiProperty({
        description: 'D范围优先级'
    })    
    drp?: string; 

    @ApiProperty({
        description: '高光'
    })
    hightlight?: string;         

    @ApiProperty({
        description:'阴影'
    })
    shadow?: string;             

    @ApiProperty({
        description: '色彩'
    })
    color?: string;              

    @ApiProperty({
        description:'降噪'
    })
    noise_reduction?: string;    

    @ApiProperty({
        description: '锐度'
    })
    sharpening?: string;         

    @ApiProperty({
        description: '清晰度'
    })
    clarity?: string;            

    @ApiProperty({
        description: '颗粒'
    })
    grain_effect?: string;       

    @ApiProperty({
        description: '色彩效果'
    })
    color_effect?: string;       

    @ApiProperty({
        description: '彩色FX蓝色'
    })
    color_effect_blue?: string;  

    @ApiProperty({
        description: '白平衡'
    })
    white_balance?: string;      

    @ApiProperty({
        description: 'iso'
    })
    iso?: number;                

    @ApiProperty({
        description: '曝光补偿(exposure_compensation)'
    })
    ev?: string;   
    @ApiProperty({
        description: '拍摄设备'
    })              
    equipment?: string;

    @ApiProperty({
        description: '创建时间'
    })
    createTime?: Date;
    
    @ApiProperty({
        description: '图片地址'
    })
    @IsArray()
    photos: {url: string}[]      
    
    @ApiProperty({
        description: '喜欢数'
    })
    @IsNumber()
    like: number
    @ApiProperty({
        required:true,
        description:'是不是模拟胶片'
    })
    @IsBoolean()
    isSimulation: boolean;
    @ApiProperty({
        description:'胶片类型'
    })
    film_type?: string;
    @ApiProperty({
        description:'描述'
    })
    desc?: string;
}
