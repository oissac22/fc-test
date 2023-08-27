import { NextFunction, Request, Response } from "express";
import { IController } from "../interfaces/Controller";

export function controllerToExpressCallback(controller:IController)
{
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            const { body, headers, params, query, url } = req;
            const result = await controller.exec({ body, headers, params, query, url });
            res.status(result.status);
            if (result.headers)
            {
                Object.entries((key, value) => {
                    res.setHeader(key, value);
                })
            }
            if (result.data)
                res.send(result.data);
            else if (result.file)
                res.sendFile(result.file);
            else if (result.next)
                next();
        } catch (e) {

        }
    }
}