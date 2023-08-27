"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUserUpdateData = void 0;
class ControllerUserUpdateData {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { body, params } = props;
        const { id = '' } = params;
        const { age, cpf, email, login, mather, name, password, phone, status } = body || {};
        const ageAdjust = age ? new Date(age) : undefined;
        const result = await this.service.updateUser(Number(id) || 0, { age: ageAdjust, cpf, email, login, mather, name, password, phone, status });
        return {
            status: 200,
            data: result
        };
    }
}
exports.ControllerUserUpdateData = ControllerUserUpdateData;
