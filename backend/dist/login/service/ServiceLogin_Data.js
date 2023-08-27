"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLogin_Data = void 0;
class ServiceLogin_Data {
    refresh_token;
    model;
    userService;
    constructor(refresh_token, model, userService) {
        this.refresh_token = refresh_token;
        this.model = model;
        this.userService = userService;
    }
    async result() {
        const { user_id } = await this.model.getLogin(this.refresh_token);
        const user = await this.userService.detailUser(user_id);
        return user;
    }
}
exports.ServiceLogin_Data = ServiceLogin_Data;
