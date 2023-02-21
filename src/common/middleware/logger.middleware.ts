import { Inject, Injectable, LoggerService } from "@nestjs/common";
import { NestMiddleware } from "@nestjs/common/interfaces/middleware";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

// 请求日志打印中间件

@Injectable()
export class LoggerMiddlewave implements NestMiddleware {
    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER)
        private readonly logger: LoggerService,
    ){}

    use(req: any, res: any, next: (error?: any) => void) {
        // 打印日志 请求方式 请求路径 请求体
        this.logger.log(JSON.stringify(`${req.method} ${req.originalUrl} ${JSON.stringify(req.query)}`));
        next();
    }
}