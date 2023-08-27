import { Api } from "../api";
import express from 'express'
import { ControllerLoginLogoff } from "./controller";
import { ControllerLoginExecLogin } from "./controller/ControllerLoginExecLogin";
import { ControllerLoginVerifyIfLogged } from "./controller/ControllerLoginVerifyIfLogged";
import { controllerToExpressCallback } from "../entities/controllerToExpressCallback";
import { featureServiceLogin } from "./featureServiceLogin";




const routerExpress = express.Router();

routerExpress.post('/', controllerToExpressCallback(new ControllerLoginExecLogin(featureServiceLogin)));

routerExpress.use(controllerToExpressCallback(new ControllerLoginVerifyIfLogged(featureServiceLogin)));

routerExpress.delete('/', controllerToExpressCallback(new ControllerLoginLogoff(featureServiceLogin)))

Api.use('/api/v1/login', routerExpress)