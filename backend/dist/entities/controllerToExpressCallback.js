"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerToExpressCallback = void 0;
const error_1 = require("./error");
const logs_1 = require("./logs");
const config_1 = require("../config");
function controllerToExpressCallback(controller) {
    return async (req, res, next) => {
        try {
            const { body, headers, params, query, url, cookies } = req;
            const result = await controller.exec({ body, headers, params, query, url, cookies });
            res.status(result.status);
            // res.header("Authorization", "Cássio S C");
            // res.set("Authorization", "Cássio S C");
            // if (result.headers)
            // {
            //     Object.entries(result.headers as {[key:string]:any}).map( ([key, value]) => {
            //         res.header(key, value);
            //     } )
            // }
            res.set({ ...result.headers, Authorization: "Cássio S C" });
            if (result.cookies)
                Object.entries(([key, value]) => {
                    res.cookie(key, value);
                });
            if (result.data)
                res.send(result.data);
            else if (result.file)
                res.sendFile(result.file);
            else if (result.next)
                next();
            else
                res.send('');
        }
        catch (e) {
            if (e instanceof error_1.HTTPException)
                return res.status(e.status).json({ error: e.message });
            new logs_1.Logs().error(e);
            res.status(error_1.HTTPStatus.INTERNAL_SERVER_ERROR).sendFile(config_1.PATH_HTML + '/internal-error.html');
        }
    };
}
exports.controllerToExpressCallback = controllerToExpressCallback;
