import { ModelUsers_ListUsers } from "./ModelUsers_ListUsers"
import { ISQL } from "../../interfaces/ISQL";
import { IUsersListFilter } from "../../interfaces/IModelUsers";

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
]


describe("ModelUsers_ListUsers class", () => {

    it("list users", async () => {
        const { model, database } = newModelUsers_ListUsers({ index:0, limit:3 });
        const sut = await model.result();
        expect(sut).toEqual(FAKE_LIST);
        expect(database._query).toBe(`SELECT id, name, email, phone\nFROM users\nORDER BY name\nLIMIT ?\nOFFSET ?`);
        expect(database._props).toEqual([3, 0]);
    })

    it("list with filter", async () => {
        const { model, database } = newModelUsers_ListUsers({ index:0, limit:1, filter:"filter test" });
        await model.result();
        expect(database._query).toBe(`SELECT id, name, email, phone\nFROM users\n` +
            `WHERE id=? OR name LIKE ? OR email LIKE ? OR phone LIKE ? OR cpf LIKE ? OR mather LIKE ? OR status LIKE ?\n` +
            `ORDER BY name\n`+
            `LIMIT ?\nOFFSET ?`);
        const expectResult = [...(new Array(7).fill("%filter%test%")), 1, 0];
        expect(database._props).toEqual(expectResult);
    })

})

function newModelUsers_ListUsers(props: IUsersListFilter)
{
    const database = new FakeDatabase();
    const model = new ModelUsers_ListUsers(props, database);
    return {model, database};
}

class FakeDatabase implements ISQL {
    _query:any = null;
    _props:any = null;
    async list(query: string, props?: (string | number)[]): Promise<any>
    {
        this._query = query;
        this._props = props;
        return FAKE_LIST;
    }
    exec(query: string, props?: (string | number)[]): Promise<any>
    {
        throw new Error("Method not implemented.");
    }
}