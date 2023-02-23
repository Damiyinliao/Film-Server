import { UnauthorizedException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super();
    }
    // 登录经过这里，校验账号密码是否正确
    async validate (username: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(username, password);
        if(!user){     
            throw new UnauthorizedException();
        }
        return user;
    }
}