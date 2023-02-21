import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateSimulationDto {
    @ApiProperty({
        description: 'id'
    })
    id: string;

    @ApiProperty({
        required: true,
        description: '胶片模拟的id'
    })
    @IsString()
    simulation_id: string;           

    @ApiProperty({
        description: '胶片模拟中文名称',

    })
    @IsString()
    sim_cname: string;               

    @ApiProperty({
        description: '胶片模拟英文名'
    })
    @IsString()
    sim_ename: string;               

    @ApiProperty({
        description: '胶片模拟图标Icon地址'
    })
    @IsString()
    sim_img_url: string;            

    @ApiProperty({
        description:'胶片模拟的描述'
    })
    @IsString()
    sim_desc: string;                

    @ApiProperty({
        description: '对应的展示的的作品的id'
    })
    @IsArray()
    example_card_ids: {card_id: string}[];
}
