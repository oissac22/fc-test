"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelUsers_Update_1 = require("./ModelUsers_Update");
const FAKE_DATE = new Date();
describe("ModelUsers_Update class", () => {
    it("update user", async () => {
        const { model, database } = newModelUsers_Update(4, {
            age: FAKE_DATE, cpf: '00000000000', email: 'test@test.com', login: 'validlogin',
            mather: 'Mather test', name: 'Name test', password: '123456', phone: '81900000000',
            status: 'active'
        });
        const sut = await model.result();
        expect(sut).toEqual(undefined);
        expect(database._query).toBe("update users set age=?,cpf=?,email=?,login=?,mather=?,name=?,password=?,phone=?,status=?,dateUpdate=? where id=?");
        let [id, dateUpdate, ...props] = database._props.reverse();
        props = props.reverse();
        expect(props).toEqual([FAKE_DATE.toISOString(), "00000000000", "test@test.com", "validlogin", "Mather test", "Name test", "*crip:123456", "81900000000", "active"]);
        expect(dateUpdate).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
        expect(id).toBe("4");
    });
    it("update user, without status data", async () => {
        const { model, database } = newModelUsers_Update(4, {
            age: FAKE_DATE, cpf: '00000000000', email: 'test@test.com', login: 'validlogin',
            mather: 'Mather test', name: 'Name test', password: '123456', phone: '81900000000'
        });
        const sut = await model.result();
        expect(sut).toEqual(undefined);
        expect(database._query).toBe("update users set age=?,cpf=?,email=?,login=?,mather=?,name=?,password=?,phone=?,dateUpdate=? where id=?");
        let [id, dateUpdate, ...props] = database._props.reverse();
        props = props.reverse();
        expect(props).toEqual([FAKE_DATE.toISOString(), "00000000000", "test@test.com", "validlogin", "Mather test", "Name test", "*crip:123456", "81900000000"]);
        expect(dateUpdate).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
        expect(id).toBe("4");
    });
});
function newModelUsers_Update(id, data) {
    const database = new FakeDatabase();
    const model = new ModelUsers_Update_1.ModelUsers_Update(id, data, database);
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
