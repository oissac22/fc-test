"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceUsersListUsers_1 = require("./ServiceUsersListUsers");
const FAKE_RESULT = [
    {
        "id": 1,
        "name": "Cássio",
        "email": "cassio@test.com",
        "phone": "81900000001"
    },
    {
        "id": 2,
        "name": "Maria",
        "email": "maria@test.com",
        "phone": "81900000002"
    },
    {
        "id": 3,
        "name": "Ana",
        "email": "ana@test.com",
        "phone": "81900000003"
    }
];
describe('ServiceUsersListUsers class', () => {
    it('list users', async () => {
        const { service, model } = newServiceUsersListUsers({ index: 0, limit: 3 });
        const sut = await service.result();
        expect(sut).toEqual(FAKE_RESULT);
        expect(model._props).toEqual({ "index": 0, "limit": 3 });
    });
    it('list users with filter', async () => {
        const { service, model } = newServiceUsersListUsers({ index: 0, limit: 3, filter: 'filter test' });
        const sut = await service.result();
        expect(sut).toEqual(FAKE_RESULT);
        expect(model._props).toEqual({ "index": 0, "limit": 3, filter: 'filter test' });
    });
});
function newServiceUsersListUsers(props) {
    const model = new FakeModelUsers();
    const service = new ServiceUsersListUsers_1.ServiceUsersListUsers(props, model);
    return { service, model };
}
class FakeModelUsers {
    _props = null;
    insertUser(data) {
        throw new Error("Method not implemented.");
    }
    updateUser(id, data) {
        throw new Error("Method not implemented.");
    }
    deleteUser(id) {
        throw new Error("Method not implemented.");
    }
    async listUsers(props) {
        this._props = props;
        return FAKE_RESULT;
    }
    detailUser(id) {
        throw new Error("Method not implemented.");
    }
    userByPassword(login, password) {
        throw new Error("Method not implemented.");
    }
}
