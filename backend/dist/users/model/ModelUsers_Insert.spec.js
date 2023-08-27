"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelUsers_Insert_1 = require("./ModelUsers_Insert");
const FAKE_DATE = new Date();
describe("ModelUsers_Insert class", () => {
    it("insert user", async () => {
        const { model, database } = newModelUsers_Insert({
            age: FAKE_DATE, cpf: '00000000000', email: 'test@test.com', login: 'validlogin',
            mather: 'Mather test', name: 'Name test', password: '123456', phone: '81900000000',
            status: 'active'
        });
        const sut = await model.result();
        expect(sut).toEqual({ id: 1 });
        expect(database._query).toBe("insert into users (age,cpf,email,login,mather,name,password,phone,status) values (?,?,?,?,?,?,?,?,?)");
        expect(database._props).toEqual([FAKE_DATE.toISOString(), "00000000000", "test@test.com", "validlogin", "Mather test", "Name test", "*crip:123456", "81900000000", "active"]);
    });
    it("insert user, without status data", async () => {
        const { model, database } = newModelUsers_Insert({
            age: FAKE_DATE, cpf: '00000000000', email: 'test@test.com', login: 'validlogin',
            mather: 'Mather test', name: 'Name test', password: '123456', phone: '81900000000'
        });
        const sut = await model.result();
        expect(sut).toEqual({ id: 1 });
        expect(database._query).toBe("insert into users (age,cpf,email,login,mather,name,password,phone) values (?,?,?,?,?,?,?,?)");
        expect(database._props).toEqual([FAKE_DATE.toISOString(), "00000000000", "test@test.com", "validlogin", "Mather test", "Name test", "*crip:123456", "81900000000"]);
    });
});
function newModelUsers_Insert(data) {
    const database = new FakeDatabase();
    const model = new ModelUsers_Insert_1.ModelUsers_Insert(data, database);
    return { model, database };
}
class FakeDatabase {
    _query = null;
    _props = null;
    list(query, props) {
        throw new Error("Method not implemented.");
    }
    async exec(query, props) {
        this._query = query;
        this._props = props;
        return { id: 1 };
    }
}
