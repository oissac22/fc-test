"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLogin = void 0;
const ServiceLogin_Login_1 = require("./ServiceLogin_Login");
const ServiceLogin_Logoff_1 = require("./ServiceLogin_Logoff");
const ServiceLogin_LogoffEveryMachines_1 = require("./ServiceLogin_LogoffEveryMachines");
const ServiceLogin_VerifyLoginActived_1 = require("./ServiceLogin_VerifyLoginActived");
const ServiceLogin_Data_1 = require("./ServiceLogin_Data");
class ServiceLogin {
    userService;
    token;
    model;
    constructor(userService, token, model) {
        this.userService = userService;
        this.token = token;
        this.model = model;
    }
    userDataByToken(token) {
        return new ServiceLogin_Data_1.ServiceLogin_Data(token, this.model, this.userService).result();
    }
    login(login, password) {
        return new ServiceLogin_Login_1.ServiceLogin_Login(login, password, this.userService, this.token, this.model).result();
    }
    logoff(token) {
        return new ServiceLogin_Logoff_1.ServiceLogin_Logoff(token, this.model).result();
    }
    logoffEveryMachines(token) {
        return new ServiceLogin_LogoffEveryMachines_1.ServiceLogin_LogoffEveryMachines(token, this.model).result();
    }
    verifyLoginActived(token) {
        return new ServiceLogin_VerifyLoginActived_1.ServiceLogin_VerifyLoginActived(token, this.token, this.model).result();
    }
}
exports.ServiceLogin = ServiceLogin;
