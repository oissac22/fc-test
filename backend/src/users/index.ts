import express from 'express';
import { Api } from "../api";
import { Database } from "../databasesql";
import { ControllerUserDeleteById, ControllerUserInsertData, ControllerUserUpdateData, ControllerUsersList } from "./controller";
import { ControllerUsersDataById } from './controller/ControllerUsersDataById';
import { ModelUsers } from "./model";
import { ServiceUsers } from "./service";
import { controllerToExpressCallback } from '../entities/controllerToExpressCallback';
import { ControllerLoginVerifyIfLogged } from '../login/controller/ControllerLoginVerifyIfLogged';
import { featureServiceLogin } from '../login/featureServiceLogin';
import { ControllerUserUpdatePassword } from './controller/ControllerUserUpdatePassword';

const model = new ModelUsers(Database)
const service = new ServiceUsers(model)

const routerExpress = express.Router();

routerExpress.post('/recoverpassword', controllerToExpressCallback( new ControllerUserUpdatePassword(service) ))

routerExpress.use(controllerToExpressCallback( new ControllerLoginVerifyIfLogged(featureServiceLogin) ))

routerExpress.get('/', controllerToExpressCallback( new ControllerUsersList(service) ))
routerExpress.get('/:id', controllerToExpressCallback( new ControllerUsersDataById(service) ))
routerExpress.post('/', controllerToExpressCallback( new ControllerUserInsertData(service) ))
routerExpress.put('/:id', controllerToExpressCallback( new ControllerUserUpdateData(service) ))
routerExpress.delete('/:id', controllerToExpressCallback( new ControllerUserDeleteById(service) ))
// routerExpress.get('/api/v1/users/logindata', controllerToExpressCallback( new ControllerUserDataByPassword(service) ))

Api.use('/api/v1/users', routerExpress);

