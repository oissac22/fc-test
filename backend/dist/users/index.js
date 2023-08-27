"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("../api");
const databasesql_1 = require("../databasesql");
const controller_1 = require("./controller");
const ControllerUsersDataById_1 = require("./controller/ControllerUsersDataById");
const model_1 = require("./model");
const service_1 = require("./service");
const controllerToExpressCallback_1 = require("../entities/controllerToExpressCallback");
const ControllerLoginVerifyIfLogged_1 = require("../login/controller/ControllerLoginVerifyIfLogged");
const featureServiceLogin_1 = require("../login/featureServiceLogin");
const model = new model_1.ModelUsers(databasesql_1.Database);
const service = new service_1.ServiceUsers(model);
const routerExpress = express_1.default.Router();
routerExpress.use((0, controllerToExpressCallback_1.controllerToExpressCallback)(new ControllerLoginVerifyIfLogged_1.ControllerLoginVerifyIfLogged(featureServiceLogin_1.featureServiceLogin)));
routerExpress.get('/', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerUsersList(service)));
routerExpress.get('/:id', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new ControllerUsersDataById_1.ControllerUsersDataById(service)));
routerExpress.post('/', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerUserInsertData(service)));
routerExpress.put('/:id', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerUserUpdateData(service)));
routerExpress.delete('/:id', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerUserDeleteById(service)));
// routerExpress.get('/api/v1/users/logindata', controllerToExpressCallback( new ControllerUserDataByPassword(service) ))
api_1.Api.use('/api/v1/users', routerExpress);
