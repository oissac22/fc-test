"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLogin_VerifyLoginActived = void 0;
const error_1 = require("../../entities/error");
const config_1 = require("../../config");
class ServiceLogin_VerifyLoginActived {
    refresh_token;
    token;
    model;
    constructor(refresh_token, token, model) {
        this.refresh_token = refresh_token;
        this.token = token;
        this.model = model;
    }
    velidRefreshToken() {
        this.token.validateToken(this.refresh_token, config_1.KEY_LOGIN_SHORT_TIME);
        return null;
    }
    async updateRefreshToken() {
        try {
            const loginData = await this.model.getLogin(this.refresh_token);
            const { token } = loginData;
            const { exp, iat, ...data } = this.token.validateToken(token, config_1.KEY_LOGIN_LONG_TIME);
            const new_refresh_token = this.token.newToken(data, config_1.KEY_LOGIN_SHORT_TIME, config_1.TOKEN_SHORT_TIME_EXPIRE);
            const dateUpdate = new Date();
            this.model.updateLogin(this.refresh_token, { dateUpdate, refresh_token: new_refresh_token });
            this.refresh_token = new_refresh_token;
            return { new_refresh_token };
        }
        catch (e) {
            throw new error_1.HTTPException(`O login não existe ou expirou`, error_1.HTTPStatus.UNAUTHORIZED);
        }
    }
    async result() {
        try {
            return this.velidRefreshToken();
        }
        catch (e) {
            return await this.updateRefreshToken();
        }
    }
}
exports.ServiceLogin_VerifyLoginActived = ServiceLogin_VerifyLoginActived;
