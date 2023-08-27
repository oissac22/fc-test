"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceLogin_LogoffEveryMachines_1 = require("./ServiceLogin_LogoffEveryMachines");
const REFRESH_TOKEN = 'refresh-token';
const TOKEN = 'valid-toke';
const FAKE_DATE = new Date();
const FAKE_USER_ID = 5;
describe('ServiceLogin_LogoffEveryMachines class', () => {
    it('generate valid token with valid login and password', async () => {
        const { service, model } = newServiceLogin_LogoffEveryMachines(REFRESH_TOKEN);
        await service.result();
        expect(model._props).toEqual([{ "token": REFRESH_TOKEN }, { "user_id": FAKE_USER_ID }]);
    });
});
function newServiceLogin_LogoffEveryMachines(token) {
    const model = new FakeIModelLogin();
    const service = new ServiceLogin_LogoffEveryMachines_1.ServiceLogin_LogoffEveryMachines(token, model);
    return { service, model };
}
class FakeIModelLogin {
    _props = [];
    insertLogin(data) {
        throw new Error("Method not implemented.");
    }
    updateLogin(token, data) {
        throw new Error("Method not implemented.");
    }
    async deleteLogin(token) {
        throw new Error("Method not implemented.");
    }
    async deleteFullTokenUser(user_id) {
        this._props.push({ user_id });
    }
    async getLogin(token) {
        this._props.push({ token });
        return { dateInsert: FAKE_DATE, dateUpdate: FAKE_DATE, refresh_token: REFRESH_TOKEN, user_id: FAKE_USER_ID, token: TOKEN };
    }
}
