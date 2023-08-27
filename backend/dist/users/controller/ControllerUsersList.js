"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUsersList = void 0;
class ControllerUsersList {
    service;
    constructor(service) {
        this.service = service;
    }
    async exec({ query }) {
        const { index, limit, filter } = query;
        const result = await this.service.listUsers({
            index: Number(index || 0),
            limit: Number(limit || 1),
            filter: filter || ''
        });
        return {
            status: 200,
            data: result
        };
    }
}
exports.ControllerUsersList = ControllerUsersList;
