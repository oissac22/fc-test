import express, { NextFunction, Request, Response } from 'express'
import { IApi } from '../interfaces/Api';
import { PATH_HTML, PORT } from '../config';
import cors from 'cors'
import { IController } from '../interfaces/Controller';
import { HTTPException, HTTPStatus } from '../entities/error';
import { ILogs } from '../interfaces/ILogs';
import { EventRequest } from './EventRequest';

class ExecControllerApi {
    protected sendInfos:{[key:string]:any} = {};

    constructor(
        private readonly logs:ILogs
    ) {}

    private async exec(req:Request, res:Response, controller: IController, _next:NextFunction)
    {
        const {body, headers, params, query, url} = req;
        const { status, data, file, next, headers:headersResponse } = await controller.exec({ body, headers, params, query, url });
        this.sendInfos = { status, data, file, next, headers:headersResponse };
        res.status(status);
        if (headersResponse) {
            res.header = {
                ...(res.header || {}),
                ...headersResponse
            }
        }
        if (file)
            res.sendFile(file);
        else if (next)
            _next()
        else
            res.send(data);
    }

    private async exception(res:Response, e:any)
    {
        if (e instanceof HTTPException)
        {
            res.status(e.status).send({ error:e.message, status:e.status, name:e.name});
        }
        else
        {
            this.logs.error(e.stack || e.message);
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).sendFile(PATH_HTML + '/internal-error.html')
        }
    }

    private callEventsBeforeExec(req:Request)
    {
        const {body, headers, params, query, url, method} = req;
        return Promise.all(new EventRequest().exec('beforerequest', {body, headers, params, query, url, method}));
    }

    private callEventsAfterExec(req:Request)
    {
        const {body, headers, params, query, url, method} = req;
        return Promise.all(new EventRequest().exec('afterrequest', {body, headers, params, query, url, method, sendInfos:this.sendInfos}));
    }

    async execAndException(req:Request, res:Response, controller: IController, next:NextFunction)
    {
        try {
            await this.callEventsBeforeExec(req);
            await this.exec(req, res, controller, next);
            await this.callEventsAfterExec(req)
        } catch(e) {
            this.exception(res, e);
        }
    }
}

export class ApiExpress implements IApi {

    static Api = express();

    constructor(
        private readonly logs:ILogs
    ) {}

    use(controller: IController):void;
    use(url:string, controller: IController):void;
    use(...props:any): void {
        if ('exec' in props[0])
        {
            ApiExpress.Api.use(async (req,res,next) => {
                new ExecControllerApi(this.logs).execAndException(req, res, props[0], next)
            });
            return;
        }
        if ((typeof props[0] === 'string') || ('exec' in props[1]))
        {
            ApiExpress.Api.use(async (req,res, next) => {
                new ExecControllerApi(this.logs).execAndException(req, res, props[0], next)
            });
            return;
        }
        ApiExpress.Api.use(...props);
    }

    all(url:string, controller: IController) {
        ApiExpress.Api.all(url, async (req,res,next) => {
            new ExecControllerApi(this.logs).execAndException(req, res, controller, next)
        })
    }

    get(url: string, controller: IController): void {
        ApiExpress.Api.get(url, async (req,res,next) => {
            new ExecControllerApi(this.logs).execAndException(req, res, controller, next)
        })
    }

    delete(url: string, controller: IController): void {
        ApiExpress.Api.delete(url, async (req,res,next) => {
            new ExecControllerApi(this.logs).execAndException(req, res, controller, next)
        })
    }

    post(url: string, controller: IController): void {
        ApiExpress.Api.post(url, async (req,res,next) => {
            new ExecControllerApi(this.logs).execAndException(req, res, controller, next)
        })
    }

    put(url: string, controller: IController): void {
        ApiExpress.Api.put(url, async (req,res,next) => {
            new ExecControllerApi(this.logs).execAndException(req, res, controller, next)
        })
    }

    setup()
    {
        ApiExpress.Api.use(cors({ origin: '*' }))
        ApiExpress.Api.use(express.json({ inflate: false }))
    }

    run() {
        ApiExpress.Api.listen(PORT, () => console.log(`RUN IN http://localhost:${PORT}`));
    }

}
