import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";


// 拦截器，在向前端发送数据之前进行修改与包装

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            // 对返回的数据进行处理
            map((data)=>{
                return {
                    code: 200,
                    message: 'ok',
                    result: data
                }
            })
        )
    }
}