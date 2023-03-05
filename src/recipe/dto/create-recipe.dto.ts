import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipeDto {
    @ApiProperty({
        description:'对应的胶片模拟(这个recipe是哪个胶片模拟的)'
    })
    sim_id:string; 
    @ApiProperty({
        description:'配方名字'
    })
    name?: string;   
    @ApiProperty({
        description:'适用的芯片'
    })
    chip?: string;    
    @ApiProperty({ 
        description:'各个配置、参数、icon图片'
     })
    formula?: {name:string,value:string,icon:string}[]
    @ApiProperty({
        description:'展示照片'
    })
    photos?: { url: string }[]; 
}
