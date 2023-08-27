"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelUsers_Delete_1 = require("./ModelUsers_Delete");
describe("ModelUsers_Delete class", () => {
    it("delete user by id", async () => {
        const { model, database } = newModelUsers_Delete(4);
        const sut = await model.result();
        expect(sut).toEqual(undefined);
        expect(database._query).toBe("delete from users where id=?");
        expect(database._props).toEqual(["4"]);
    });
});
function newModelUsers_Delete(id) {
    const database = new FakeDatabase();
    const model = new ModelUsers_Delete_1.ModelUsers_Delete(id, database);
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
