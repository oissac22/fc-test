"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLogin_Logoff = void 0;
class ServiceLogin_Logoff {
    token;
    model;
    constructor(token, model) {
        this.token = token;
        this.model = model;
    }
    async result() {
        await this.model.deleteLogin(this.token);
    }
}
exports.ServiceLogin_Logoff = ServiceLogin_Logoff;
