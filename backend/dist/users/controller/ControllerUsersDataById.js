"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUsersDataById = void 0;
class ControllerUsersDataById {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec(props) {
        const { params } = props;
        const result = await this.service.detailUser(Number(params?.id || 0));
        return {
            status: 200,
            data: result
        };
    }
}
exports.ControllerUsersDataById = ControllerUsersDataById;
