"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const FAKE_DATE = new Date();
const FAKE_DATE_2 = new Date(FAKE_DATE);
FAKE_DATE_2.setSeconds(FAKE_DATE_2.getSeconds());
const FAKE_DATA = [{
        token: "valid-token",
        refresh_token: "valid-refresh-token",
        user_id: 5,
        dateInsert: FAKE_DATE,
        dateUpdate: FAKE_DATE_2,
    }];
describe('ModelLogin class', () => {
    it('insert login token', async () => {
        const { database, model } = newModelLogin();
        await model.insertLogin({ refresh_token: 'refresh-token', token: 'long-token', user_id: 5 });
        expect(database._query).toBe("insert into login_token (user_id, token, refresh_token) values (?, ?, ?)");
        expect(database._props).toEqual([5, "long-token", "refresh-token"]);
    });
    it('update login token', async () => {
        const { database, model } = newModelLogin();
        await model.updateLogin('valid_token', { refresh_token: 'refresh-token', dateUpdate: FAKE_DATE });
        expect(database._query).toBe("update login_token set refresh_token = ?, dateUpdate = ? where refresh_token = ?");
        expect(database._props).toEqual(["refresh-token", FAKE_DATE.toISOString(), 'valid_token']);
    });
    it('get login by refresh_token', async () => {
        const { database, model } = newModelLogin();
        await model.getLogin('valid_token');
        expect(database._query).toBe("select * from login_token where refresh_token = ?");
        expect(database._props).toEqual(["valid_token"]);
    });
    it('delete login', async () => {
        const { database, model } = newModelLogin();
        await model.deleteLogin('short-token');
        expect(database._query).toBe("delete from login_token where refresh_token = ?");
        expect(database._props).toEqual(["short-token"]);
    });
    it('delete every logins from user', async () => {
        const { database, model } = newModelLogin();
        await model.deleteFullTokenUser(5);
        expect(database._query).toBe("delete from login_token where user_id = ?");
        expect(database._props).toEqual([5]);
    });
});
function newModelLogin() {
    const database = new FakeDatabase();
    const model = new _1.ModelLogin(database);
    return { database, model };
}
class FakeDatabase {
    _query = null;
    _props = null;
    async list(query, props) {
        this._props = props;
        this._query = query;
        return FAKE_DATA;
    }
    async exec(query, props) {
        this._props = props;
        this._query = query;
    }
}
