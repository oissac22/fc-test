"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerLoginLogoffEveryRegs = void 0;
class ControllerLoginLogoffEveryRegs {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { key } = props.headers || {};
        await this.service.logoffEveryMachines(key);
        return {
            status: 200,
            data: ''
        };
    }
}
exports.ControllerLoginLogoffEveryRegs = ControllerLoginLogoffEveryRegs;
