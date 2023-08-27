"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelUsers_ListUsers_1 = require("./ModelUsers_ListUsers");
const FAKE_LIST = [
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
describe("ModelUsers_ListUsers class", () => {
    it("list users", async () => {
        const { model, database } = newModelUsers_ListUsers({ index: 0, limit: 3 });
        const sut = await model.result();
        expect(sut).toEqual(FAKE_LIST);
        expect(database._query).toBe(`SELECT id, name, email, phone\nFROM users\nORDER BY name\nLIMIT ?\nOFFSET ?`);
        expect(database._props).toEqual([3, 0]);
    });
    it("list with filter", async () => {
        const { model, database } = newModelUsers_ListUsers({ index: 0, limit: 1, filter: "filter test" });
        await model.result();
        expect(database._query).toBe(`SELECT id, name, email, phone\nFROM users\n` +
            `WHERE id=? OR name LIKE ? OR email LIKE ? OR phone LIKE ? OR cpf LIKE ? OR mather LIKE ? OR status LIKE ?\n` +
            `ORDER BY name\n` +
            `LIMIT ?\nOFFSET ?`);
        const expectResult = [...(new Array(7).fill("%filter%test%")), 1, 0];
        expect(database._props).toEqual(expectResult);
    });
});
function newModelUsers_ListUsers(props) {
    const database = new FakeDatabase();
    const model = new ModelUsers_ListUsers_1.ModelUsers_ListUsers(props, database);
    return { model, database };
}
class FakeDatabase {
    _query = null;
    _props = null;
    async list(query, props) {
        this._query = query;
        this._props = props;
        return FAKE_LIST;
    }
    exec(query, props) {
        throw new Error("Method not implemented.");
    }
}
