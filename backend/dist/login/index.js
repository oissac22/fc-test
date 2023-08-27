"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const controllerToExpressCallback_1 = require("../entities/controllerToExpressCallback");
const featureServiceLogin_1 = require("./featureServiceLogin");
const routerExpress = express_1.default.Router();
routerExpress.post('/', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerLoginExecLogin(featureServiceLogin_1.featureServiceLogin)));
routerExpress.use((0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerLoginVerifyIfLogged(featureServiceLogin_1.featureServiceLogin)));
routerExpress.get('/', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerLoginDataUserLogged(featureServiceLogin_1.featureServiceLogin)));
routerExpress.delete('/', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerLoginLogoff(featureServiceLogin_1.featureServiceLogin)));
routerExpress.delete('/every', (0, controllerToExpressCallback_1.controllerToExpressCallback)(new controller_1.ControllerLoginLogoffEveryRegs(featureServiceLogin_1.featureServiceLogin)));
api_1.Api.use('/api/v1/login', routerExpress);
