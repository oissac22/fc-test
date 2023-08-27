"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerLoginLogoff = void 0;
class ControllerLoginLogoff {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { key } = props.headers || {};
        await this.service.logoff(key);
        return {
            status: 200
        };
    }
}
exports.ControllerLoginLogoff = ControllerLoginLogoff;
