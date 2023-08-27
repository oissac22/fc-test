import { Api } from "../api";
import express from 'express'
import { ControllerLoginVerifyIfLogged, ControllerLoginExecLogin, ControllerLoginLogoff, ControllerLoginLogoffEveryRegs, ControllerLoginDataUserLogged } from "./controller";
import { controllerToExpressCallback } from "../entities/controllerToExpressCallback";
import { featureServiceLogin } from "./featureServiceLogin";
import { ControllerLoginRefreshLogin } from "./controller/ControllerLoginRefreshLogin";

const routerExpress = express.Router();

routerExpress.post('/', controllerToExpressCallback(new ControllerLoginExecLogin(featureServiceLogin)));
routerExpress.get('/refresh', controllerToExpressCallback(new ControllerLoginRefreshLogin(featureServiceLogin)));

routerExpress.use(controllerToExpressCallback(new ControllerLoginVerifyIfLogged(featureServiceLogin)));

routerExpress.get('/', controllerToExpressCallback(new ControllerLoginDataUserLogged(featureServiceLogin)))
routerExpress.delete('/', controllerToExpressCallback(new ControllerLoginLogoff(featureServiceLogin)))
routerExpress.delete('/every', controllerToExpressCallback(new ControllerLoginLogoffEveryRegs(featureServiceLogin)))

Api.use('/api/v1/login', routerExpress)