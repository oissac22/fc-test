import { Api } from "../api";
import express from 'express'
import { ControllerLoginVerifyIfLogged, ControllerLoginExecLogin, ControllerLoginLogoff, ControllerLoginLogoffEveryRegs } from "./controller";
import { controllerToExpressCallback } from "../entities/controllerToExpressCallback";
import { featureServiceLogin } from "./featureServiceLogin";




const routerExpress = express.Router();

routerExpress.post('/', controllerToExpressCallback(new ControllerLoginExecLogin(featureServiceLogin)));

routerExpress.use(controllerToExpressCallback(new ControllerLoginVerifyIfLogged(featureServiceLogin)));

routerExpress.delete('/', controllerToExpressCallback(new ControllerLoginLogoff(featureServiceLogin)))
routerExpress.delete('/every', controllerToExpressCallback(new ControllerLoginLogoffEveryRegs(featureServiceLogin)))

Api.use('/api/v1/login', routerExpress)