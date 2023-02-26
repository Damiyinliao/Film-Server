import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { IsNumber, IsString } from "class-validator";

export class CreateFilmDto {
    // 参数的接口注释
    @ApiProperty({
        required: true,
        description: '胶片名称(英文缩写)'
    })
    @IsNotEmpty()
    @IsString()
    film_id: string;

    @ApiProperty({
        required: true,
        description: '胶片名称(中文)'
    })
    @IsNotEmpty()
    @IsString()
    film_name?: string;

    @ApiProperty({
        required: true,
        description: '胶片英文名(英文)'
    })
    @IsString()
    film_ename?: string; 

    @ApiProperty({
        required: true,
        description: '胶片类型'
    })
    @IsString()
    film_type?: string;  

    @ApiProperty({
        required: true,
        description: '胶片图标'
    })
    @IsString()
    film_icon?: string; 

    @ApiProperty({
        required: true,
        description: '胶片品牌'
    })
    @IsString()
    film_brand?: string; 

    @ApiProperty({
        required: true,
        description: '胶片感光度'
    })
    @IsNotEmpty()
    @IsInt()
    film_iso?: number;   

    @ApiProperty({
        required: true,
        description: '胶片产地'
    })
    @IsString()
    film_country?: string;

    @ApiProperty({
        description: '胶片格式'
    })
    @IsString()
    film_formats?: string;

    @ApiProperty({
        description: '胶片冲洗工艺'
    })
    @IsString()
    film_process?: string;

    @ApiProperty({
        description: '胶片颗粒度'
    })
    @IsString()
    film_grain?: string; 

    @ApiProperty({
        description: '胶片对比度'
    })
    @IsString()
    film_contrast?: string;

    @ApiProperty({
        description: '胶片色调'
    })
    @IsString()
    film_color_tone?: string;

    @ApiProperty({
        description: '胶片使用场景'
    })
    @IsString()
    film_use_case?: string;
    
    @ApiProperty({
        description: '胶片描述'
    })
    @IsString()
    film_desc?: string; 
}
