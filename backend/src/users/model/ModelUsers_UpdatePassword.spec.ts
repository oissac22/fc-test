import { ModelUsers_UpdatePassword } from "./ModelUsers_UpdatePassword"
import { ISQL } from "../../interfaces/ISQL";
import { IUsersDataUpdatePassword } from "../../interfaces/IModelUsers";
import { passwordCrip } from "../../entities/passwordCrip";

const FAKE_DATE = new Date();

jest.spyOn(global, 'Date').mockImplementation(() => FAKE_DATE);

describe("ModelUsers_UpdatePassword class", () => {

    it("update password", async () => {
        const { model, database } = newModelUsers_UpdatePassword(
            { cpf:'00000000000', login:'validlogin',  password:'123456' }
        );
        const sut = await model.result();
        expect(sut).toEqual(undefined);
        expect(database._query).toBe("update users login = ?, password = ?, dateUpdate = ? from  where cpf = ?");
        expect(database._props).toEqual(['validlogin', passwordCrip('123456'), FAKE_DATE.toISOString(), '00000000000']);
    })

})

function newModelUsers_UpdatePassword(data: IUsersDataUpdatePassword)
{
    const database = new FakeDatabase();
    const model = new ModelUsers_UpdatePassword(data, database);
    return {model, database};
}


class FakeDatabase implements ISQL {
    _query:any = null;
    _props:any[] = null;
    list(query: string, props?: (string | number)[]): Promise<any>
    {
        throw new Error("Method not implemented.");
    }
    async exec(query: string, props?: (string | number)[]): Promise<any>
    {
        this._query = query;
        this._props = props;
        return {id:1}
    }
}