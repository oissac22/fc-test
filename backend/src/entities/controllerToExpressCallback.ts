import { NextFunction, Request, Response } from "express";
import { IController } from "../interfaces/Controller";
import { HTTPException } from "./error";
import { Logs } from "./logs";

export function controllerToExpressCallback(controller:IController)
{
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            const { body, headers, params, query, url } = req;
            const result = await controller.exec({ body, headers, params, query, url });
            res.status(result.status);
            console.log('result.headers :>> ', result.headers);
            if (result.headers)
                res.set(result.headers);
            if (result.data)
                res.send(result.data);
            else if (result.file)
                res.sendFile(result.file);
            else if (result.next)
                next();
        } catch (e) {
            if (e instanceof HTTPException)
                res.status(e.status).json( { error:e.message } );
            new Logs().error(e);
        }
    }
}