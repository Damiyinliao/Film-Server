import { ApiProperty } from "@nestjs/swagger";

export class Captcha {
    @ApiProperty({
        description: '验证码图片的id'
    })
    id: string;
    @ApiProperty({
        description: '文本'
    })
    text?:string;
    @ApiProperty({
        description: '验证码图片数据'
    })
    data: string;
    @ApiProperty({
        description: '时间'
    })
    time: Date;
}