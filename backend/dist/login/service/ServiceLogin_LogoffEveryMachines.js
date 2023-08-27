"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLogin_LogoffEveryMachines = void 0;
class ServiceLogin_LogoffEveryMachines {
    token;
    model;
    constructor(token, model) {
        this.token = token;
        this.model = model;
    }
    async result() {
        const data = await this.model.getLogin(this.token);
        await this.model.deleteFullTokenUser(data.user_id);
    }
}
exports.ServiceLogin_LogoffEveryMachines = ServiceLogin_LogoffEveryMachines;
