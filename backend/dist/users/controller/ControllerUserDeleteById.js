"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUserDeleteById = void 0;
class ControllerUserDeleteById {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { id = '0' } = props.params || {};
        await this.service.deleteUser(Number(id || 0));
        return {
            status: 200,
            data: '',
        };
    }
}
exports.ControllerUserDeleteById = ControllerUserDeleteById;
