import { Api } from "../api";
import { Database } from "../databasesql";
import { controllerToExpressCallback } from "../entities/controllerToExpressCallback";
import { TokenDataJWT } from "../entities/tokenDataJwt";
import express from 'express'
import { ModelUsers } from "../users/model";
import { ServiceUsers } from "../users/service";
import { ControllerLoginLogoff } from "./controller";
import { ControllerLoginExecLogin } from "./controller/ControllerLoginExecLogin";
import { ModelLogin } from "./model";
import { ServiceLogin } from "./service";
import { ControllerLoginVerifyIfLogged } from "./controller/ControllerLoginVerifyIfLogged";

const modelUsers = new ModelUsers(Database);
const userService = new ServiceUsers(modelUsers)

const token = new TokenDataJWT();
const model = new ModelLogin(Database);
const service = new ServiceLogin(userService, token, model)

const routerExpress = express.Router();

routerExpress.post('/', controllerToExpressCallback(new ControllerLoginExecLogin(service)));

routerExpress.use(controllerToExpressCallback(new ControllerLoginVerifyIfLogged(service)));

routerExpress.delete('/', controllerToExpressCallback(new ControllerLoginLogoff(service)))

Api.use('/api/v1/login', routerExpress)