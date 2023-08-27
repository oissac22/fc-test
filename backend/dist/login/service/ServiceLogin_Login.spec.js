"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const ServiceLogin_Login_1 = require("./ServiceLogin_Login");
const FAKE_DATE = new Date();
const VALID_TOKEN = 'valid_token';
describe('ServiceLogin_Login class', () => {
    it('generate valid token with valid login and password', async () => {
        const { service, model, token, userService } = newServiceLogin_Login('valid_login', 'valid_password');
        const sut = await service.result();
        expect(sut).toEqual({ token: VALID_TOKEN });
        expect(model._props).toEqual({ data: { refresh_token: VALID_TOKEN, token: VALID_TOKEN, user_id: 1 } });
        expect(token._props).toEqual([
            { "data": { "id": 1, "name": "Test Name" }, "expiresIn": config_1.TOKEN_LONG_TIME_EXPIRE, "key": config_1.KEY_LOGIN_LONG_TIME },
            { "data": { "id": 1, "name": "Test Name" }, "expiresIn": config_1.TOKEN_SHORT_TIME_EXPIRE, "key": config_1.KEY_LOGIN_SHORT_TIME }
        ]);
        expect(userService._props).toEqual({ "login": "valid_login", "password": "valid_password" });
    });
});
function newServiceLogin_Login(login, password) {
    const userService = new FakeUserService();
    const token = new FakeToken();
    const model = new FakeIModelLogin();
    const service = new ServiceLogin_Login_1.ServiceLogin_Login(login, password, userService, token, model);
    return { service, model, token, userService };
}
class FakeUserService {
    _props = null;
    async userByPassword(login, password) {
        this._props = { login, password };
        return {
            age: FAKE_DATE,
            cpf: '00000000000',
            dateInsert: FAKE_DATE,
            dateUpdate: FAKE_DATE,
            email: 'test@test.com',
            id: 1,
            mather: 'Test Mom',
            name: 'Test Name',
            phone: '81900000000',
            status: 'active'
        };
    }
}
class FakeToken {
    _expectDate = null;
    _props = [];
    newToken(data, key, expiresIn) {
        this._props.push({ data, key, expiresIn });
        return VALID_TOKEN;
    }
    validateToken(token, key) {
        this._props.push({ token, key });
        if (token === VALID_TOKEN)
            return this._expectDate;
        throw new Error("invalid token");
    }
    getDataToken(token) {
        this._props.push({ token });
        return this._expectDate;
    }
}
class FakeIModelLogin {
    _props = null;
    async insertLogin(data) {
        this._props = { data };
    }
    updateLogin(token, data) {
        throw new Error("Method not implemented.");
    }
    deleteLogin(token) {
        throw new Error("Method not implemented.");
    }
    deleteFullTokenUser(user_id) {
        throw new Error("Method not implemented.");
    }
    getLogin(token) {
        throw new Error("Method not implemented.");
    }
}
