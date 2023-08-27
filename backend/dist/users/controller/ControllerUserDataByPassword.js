"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUserDataByPassword = void 0;
class ControllerUserDataByPassword {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { login = '', password = '' } = props.body || {};
        const result = this.service.userByPassword(login, password);
        return {
            status: 200,
            data: result
        };
    }
}
exports.ControllerUserDataByPassword = ControllerUserDataByPassword;
