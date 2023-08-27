"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLogin_Login = void 0;
const error_1 = require("../../entities/error");
const config_1 = require("../../config");
class ServiceLogin_Login {
    login;
    password;
    userService;
    token;
    model;
    constructor(login, password, userService, token, model) {
        this.login = login;
        this.password = password;
        this.userService = userService;
        this.token = token;
        this.model = model;
    }
    async result() {
        const userData = await this.userService.userByPassword(this.login, this.password);
        const { id, name, status } = userData;
        if (status === 'block')
            throw new error_1.HTTPException(`Este usuário está bloqueado`, error_1.HTTPStatus.UNAUTHORIZED);
        if (status === 'inactive')
            throw new error_1.HTTPException(`Este usuário está inativo`, error_1.HTTPStatus.UNAUTHORIZED);
        const data = { id, name };
        const token = this.token.newToken(data, config_1.KEY_LOGIN_LONG_TIME, config_1.TOKEN_LONG_TIME_EXPIRE);
        const refresh_token = this.token.newToken(data, config_1.KEY_LOGIN_SHORT_TIME, config_1.TOKEN_SHORT_TIME_EXPIRE);
        await this.model.insertLogin({
            refresh_token,
            token,
            user_id: id
        });
        return { token: refresh_token };
    }
}
exports.ServiceLogin_Login = ServiceLogin_Login;
