import { ModelUsers_dataUserById } from "./ModelUsers_dataUserById"
import { ISQL } from "../../interfaces/ISQL";

const FAKE_LIST = [{
    "age": "1984-09-08",
    "cpf": "10020030040",
    "dateInsert": "2023-08-24 01:17:33",
    "dateUpdate": "2023-08-24 01:17:33",
    "email": "cassio@test.com",
    "id": 1,
    "login": "cassio",
    "mather": "Catia",
    "name": "Cássio",
    "phone": "81900000001",
    "status": "active"
}]


describe("ModelUsers_dataUserById class", () => {

    it("get user data", async () => {
        const { model, database } = newModelUsers_dataUserById(1);
        const sut = await model.result();
        expect(sut).toEqual(FAKE_LIST[0]);
        expect(database._query).toBe(`SELECT *\nFROM users\nWHERE id=?`);
        expect(database._props).toEqual([1]);
    })

    it("get nonexistent user", async () => {
        const { model, database } = newModelUsers_dataUserById(0);
        await expect(() => model.result())
            .rejects
            .toThrow('Usuário de id 0 não encontrado');
        
    })

})

function newModelUsers_dataUserById(id: number)
{
    const database = new FakeDatabase();
    const model = new ModelUsers_dataUserById(id, database);
    return {model, database};
}

class FakeDatabase implements ISQL {
    _query:any = null;
    _props:any = null;
    async list(query: string, props?: (string | number)[]): Promise<any>
    {
        this._query = query;
        this._props = props;
        if (props?.[0] === 0)
            return [];
        return FAKE_LIST;
    }
    exec(query: string, props?: (string | number)[]): Promise<any>
    {
        throw new Error("Method not implemented.");
    }
}