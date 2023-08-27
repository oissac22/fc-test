"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerLoginDataUserLogged = void 0;
class ControllerLoginDataUserLogged {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { key = '' } = props.headers || {};
        const user = await this.service.userDataByToken(key) || {};
        return {
            status: 200,
            data: user
        };
    }
}
exports.ControllerLoginDataUserLogged = ControllerLoginDataUserLogged;
