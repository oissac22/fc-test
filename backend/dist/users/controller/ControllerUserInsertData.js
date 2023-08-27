"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUserInsertData = void 0;
class ControllerUserInsertData {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { body } = props;
        const { age = '', cpf = '', email = '', login = '', mather = '', name = '', password = '', phone = '', status } = body || {};
        const result = await this.service.insertUser({ age: new Date(age), cpf, email, login, mather, name, password, phone, status });
        return {
            status: 200,
            data: result
        };
    }
}
exports.ControllerUserInsertData = ControllerUserInsertData;
