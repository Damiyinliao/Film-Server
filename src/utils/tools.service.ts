import { Injectable } from "@nestjs/common";
import * as svgCaptcha  from 'svg-captcha';


// 封装，以便多次调用
@Injectable()
export class ToolsService {
    async createCaptcha(){
        const captcha = svgCaptcha.create({
            size: 4,        //生成几个验证码
            noise: 2,       //干扰线条数
            width: 120,     //宽度
            height: 40,     //高度
            background: '#f2f2f2',//背景颜色
        })
        return captcha;
    }
}