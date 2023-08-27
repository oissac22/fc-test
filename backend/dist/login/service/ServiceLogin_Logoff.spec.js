"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceLogin_Logoff_1 = require("./ServiceLogin_Logoff");
const VALID_TOKEN = 'valid_token';
describe('ServiceLogin_Logoff class', () => {
    it('generate valid token with valid login and password', async () => {
        const { service, model } = newServiceLogin_Logoff(VALID_TOKEN);
        await service.result();
        expect(model._props).toEqual({ "token": VALID_TOKEN });
    });
});
function newServiceLogin_Logoff(token) {
    const model = new FakeIModelLogin();
    const service = new ServiceLogin_Logoff_1.ServiceLogin_Logoff(token, model);
    return { service, model };
}
class FakeIModelLogin {
    _props = null;
    async insertLogin(data) {
        throw new Error("Method not implemented.");
    }
    updateLogin(token, data) {
        throw new Error("Method not implemented.");
    }
    async deleteLogin(token) {
        this._props = { token };
    }
    deleteFullTokenUser(user_id) {
        throw new Error("Method not implemented.");
    }
    getLogin(token) {
        throw new Error("Method not implemented.");
    }
}
