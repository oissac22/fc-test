import express, { Request, Response } from 'express'
import { IApi } from '../interfaces/Api';
import { PATH_ROOT, PORT } from '../config';
import cors from 'cors'
import { IController } from '../interfaces/Controller';
import { HTTPException, HTTPStatus } from '../entities/error';

class ExecControllerApi {
    private async exec(req:Request, res:Response, controller: IController)
    {
        const {body, headers, params, query, url} = req;
        const { status, data, file } = await controller.exec({ body, headers, params, query, url });
        res.status(status);
        if (file)
            res.sendFile(file);
        else
            res.send(data);
    }

    private async exception(res:Response, e:any)
    {
        if (e instanceof HTTPException)
            res.status(e.status).send(e.message);
        else
        {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).sendFile(PATH_ROOT + '/html/internal-error.html')
        }
    }

    async execAndException(req:Request, res:Response, controller: IController)
    {
        try {
            await this.exec(req, res, controller);
        } catch(e) {
            this.exception(res, e);
        }
    }
}

export class ApiExpress implements IApi {

    static Api = express();

    use(...props:any): void {
        ApiExpress.Api.use(...props);
    }

    all(url:string, controller: IController) {
        ApiExpress.Api.all(url, async (req,res) => {
            new ExecControllerApi().execAndException(req, res, controller)
        })
    }

    get(url: string, controller: IController): void {
        ApiExpress.Api.get(url, async (req,res) => {
            new ExecControllerApi().execAndException(req, res, controller)
        })
    }

    delete(url: string, controller: IController): void {
        ApiExpress.Api.delete(url, async (req,res) => {
            new ExecControllerApi().execAndException(req, res, controller)
        })
    }

    post(url: string, controller: IController): void {
        ApiExpress.Api.post(url, async (req,res) => {
            new ExecControllerApi().execAndException(req, res, controller)
        })
    }

    put(url: string, controller: IController): void {
        ApiExpress.Api.put(url, async (req,res) => {
            new ExecControllerApi().execAndException(req, res, controller)
        })
    }

    setup()
    {
        ApiExpress.Api.use(cors({ origin: '*' }))
    }

    run() {
        ApiExpress.Api.listen(PORT, () => console.log(`RUN IN http://localhost:${PORT}`));
    }

}
