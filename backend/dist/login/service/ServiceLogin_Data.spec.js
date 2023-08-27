"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceLogin_Data_1 = require("./ServiceLogin_Data");
const FAKE_DATE = new Date();
const FAKE_USER_ID = 5;
const VALID_TOKEN = 'valid_token';
const FAKE_USER_DATA = {
    age: FAKE_DATE,
    cpf: '00000000000',
    dateInsert: FAKE_DATE,
    dateUpdate: FAKE_DATE,
    email: 'test@test.com',
    id: FAKE_USER_ID,
    mather: 'Test Mom',
    name: 'Test Name',
    phone: '81900000000',
    status: 'active'
};
describe('ServiceLogin_Data class', () => {
    it('get user by id', async () => {
        const { service, model, serviceUserDetail } = newServiceLogin_Data(VALID_TOKEN);
        const sut = await service.result();
        expect(sut).toEqual(FAKE_USER_DATA);
        expect(model._props).toEqual({ "token": VALID_TOKEN });
        expect(serviceUserDetail._props).toEqual({ "id": FAKE_USER_ID });
    });
});
function newServiceLogin_Data(refresh_token) {
    const model = new FakeIModelLogin();
    const serviceUserDetail = new FakeServicesUsersDetail();
    const service = new ServiceLogin_Data_1.ServiceLogin_Data(refresh_token, model, serviceUserDetail);
    return { service, model, serviceUserDetail };
}
class FakeServicesUsersDetail {
    _props = null;
    async detailUser(id) {
        this._props = { id };
        return FAKE_USER_DATA;
    }
}
class FakeIModelLogin {
    _props = null;
    async insertLogin(data) {
        throw new Error("Method not implemented.");
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
    async getLogin(token) {
        this._props = { token };
        return {
            dateInsert: FAKE_DATE,
            dateUpdate: FAKE_DATE,
            refresh_token: VALID_TOKEN,
            token: VALID_TOKEN,
            user_id: FAKE_USER_ID
        };
    }
}
