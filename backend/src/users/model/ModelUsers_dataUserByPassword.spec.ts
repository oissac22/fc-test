import { ModelUsers_dataUserByPassword } from "./ModelUsers_dataUserByPassword"
import { ISQL } from "../../interfaces/ISQL";
import * as entities from "../../entities/passwordCrip";

jest.spyOn(entities, 'passwordCrip').mockImplementation(text => `*crip:${text}`);

const {passwordCrip} = entities;

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


describe("ModelUsers_dataUserByPassword class", () => {

    it("get user data", async () => {
        const { model, database } = newModelUsers_dataUserByPassword('test', '123456');
        const sut = await model.result();
        expect(sut).toEqual(FAKE_LIST[0]);
        expect(database._query).toBe(`SELECT *\nFROM users\nWHERE login=? AND password=?`);
        expect(database._props).toEqual(['test', passwordCrip('123456')]);
    })

    it("invalid login", async () => {
        const { model } = newModelUsers_dataUserByPassword('invalid_login', '123456');
        await expect(() => model.result())
            .rejects
            .toThrow('Login ou senha inválida');
        
    })

    it("invalid password", async () => {
        const { model } = newModelUsers_dataUserByPassword('test', 'invalid_password');
        await expect(() => model.result())
            .rejects
            .toThrow('Login ou senha inválida');
        
    })

})

function newModelUsers_dataUserByPassword(login: string, password:string)
{
    const database = new FakeDatabase();
    const model = new ModelUsers_dataUserByPassword(login, password, database);
    return {model, database};
}

class FakeDatabase implements ISQL {
    _query:any = null;
    _props:any = null;
    async list(query: string, props?: (string | number)[]): Promise<any>
    {
        this._query = query;
        this._props = props;
        if (props?.[0] === 'invalid_login' || /invalid_password/.test(props?.[1]+''))
            return [];
        return FAKE_LIST;
    }
    exec(query: string, props?: (string | number)[]): Promise<any>
    {
        throw new Error("Method not implemented.");
    }
}