"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerLoginVerifyIfLogged = void 0;
class ControllerLoginVerifyIfLogged {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { key = '' } = props.headers || {};
        const { new_refresh_token } = await this.service.verifyLoginActived(key) || {};
        props.headers.key = new_refresh_token || key;
        return {
            status: 200,
            next: true,
            cookies: new_refresh_token ? { "key": new_refresh_token } : null
        };
    }
}
exports.ControllerLoginVerifyIfLogged = ControllerLoginVerifyIfLogged;
