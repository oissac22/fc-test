"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerLoginExecLogin = void 0;
class ControllerLoginExecLogin {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { login = '', password = '' } = props.body || {};
        const result = await this.service.login(login, password);
        return {
            status: 200,
            cookies: { key: result.token }
        };
    }
}
exports.ControllerLoginExecLogin = ControllerLoginExecLogin;
