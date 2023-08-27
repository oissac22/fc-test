"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const error_1 = require("../../entities/error");
const ServiceLogin_VerifyLoginActived_1 = require("./ServiceLogin_VerifyLoginActived");
const VALID_TOKEN = 'valid_token';
const VALID_LONG_TOKEN = 'valid_long_token';
const FAKE_DATE = new Date();
const FAKE_USER_ID = 5;
const FAKE_USER_NAME = 'Test Name';
jest.spyOn(global, 'Date').mockImplementation(() => FAKE_DATE);
describe('ServiceLogin_VerifyLoginActived class', () => {
    it('verify refresh token', async () => {
        const { service, model, tokenClass } = newServiceLogin_VerifyLoginActived(VALID_TOKEN);
        await service.result();
        expect(model._props).toEqual([]);
        expect(tokenClass._props).toEqual([{ "key": config_1.KEY_LOGIN_SHORT_TIME, "token": VALID_TOKEN }]);
    });
    it('verify invalid refresh token', async () => {
        const { service, model, tokenClass } = newServiceLogin_VerifyLoginActived(VALID_TOKEN);
        tokenClass._autoInvalidTokenCount = 1;
        const sut = await service.result();
        expect(model._props).toEqual([{ "token": VALID_TOKEN },
            { "data": { "dateUpdate": FAKE_DATE, "refresh_token": VALID_TOKEN }, "token": VALID_TOKEN }
        ]);
        expect(tokenClass._props).toEqual([
            { "key": config_1.KEY_LOGIN_SHORT_TIME, "token": VALID_TOKEN },
            { "key": config_1.KEY_LOGIN_LONG_TIME, "token": VALID_LONG_TOKEN },
            { "data": { id: FAKE_USER_ID, name: FAKE_USER_NAME }, "expiresIn": config_1.TOKEN_SHORT_TIME_EXPIRE, "key": config_1.KEY_LOGIN_SHORT_TIME }
        ]);
        expect(sut).toEqual({ "new_refresh_token": VALID_TOKEN });
    });
    it('verify invalid refresh_token and invalid token id db', async () => {
        const { service, model, tokenClass } = newServiceLogin_VerifyLoginActived(VALID_TOKEN);
        tokenClass._autoInvalidTokenCount = 2;
        await expect(() => service.result())
            .rejects
            .toThrow('O login não existe ou expirou');
        expect(model._props).toEqual([{ "token": VALID_TOKEN }]);
        expect(tokenClass._props).toEqual([
            { "key": config_1.KEY_LOGIN_SHORT_TIME, "token": VALID_TOKEN },
            { "key": config_1.KEY_LOGIN_LONG_TIME, "token": VALID_LONG_TOKEN }
        ]);
    });
});
function newServiceLogin_VerifyLoginActived(token) {
    const model = new FakeIModelLogin();
    const tokenClass = new FakeToken();
    const service = new ServiceLogin_VerifyLoginActived_1.ServiceLogin_VerifyLoginActived(token, tokenClass, model);
    return { service, model, tokenClass };
}
class FakeToken {
    _expectDate = { id: FAKE_USER_ID, name: FAKE_USER_NAME };
    _props = [];
    _autoInvalidTokenCount = 0;
    newToken(data, key, expiresIn) {
        this._props.push({ data, key, expiresIn });
        return VALID_TOKEN;
    }
    validateToken(token, key) {
        this._props.push({ token, key });
        if (this._autoInvalidTokenCount > 0) {
            this._autoInvalidTokenCount--;
            throw new error_1.HTTPException('invalid token', error_1.HTTPStatus.NOT_FOUND);
        }
        if (token === VALID_TOKEN || token === VALID_LONG_TOKEN)
            return this._expectDate;
        throw new Error("invalid token");
    }
    getDataToken(token) {
        this._props.push({ token });
        return this._expectDate;
    }
}
class FakeIModelLogin {
    _props = [];
    async insertLogin(data) {
        throw new Error("Method not implemented.");
    }
    async updateLogin(token, data) {
        this._props.push({ token, data });
    }
    async deleteLogin(token) {
        this._props.push({ token });
    }
    deleteFullTokenUser(user_id) {
        throw new Error("Method not implemented.");
    }
    async getLogin(token) {
        this._props.push({ token });
        if (token !== VALID_TOKEN)
            throw new error_1.HTTPException('no reg in db', error_1.HTTPStatus.NOT_FOUND);
        return {
            dateInsert: FAKE_DATE,
            dateUpdate: FAKE_DATE,
            refresh_token: token,
            token: VALID_LONG_TOKEN,
            user_id: FAKE_USER_ID
        };
    }
}
