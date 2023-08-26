import { ModelUsers_Update } from "./ModelUsers_Update"
import { ISQL } from "../../interfaces/ISQL";
import { IUsersDataInsert } from "../../interfaces/IModelUsers";

const FAKE_DATE = new Date();

describe("ModelUsers_Update class", () => {

    it("update user", async () => {
        const { model, database } = newModelUsers_Update(
            4,
            {
                age:FAKE_DATE, cpf:'00000000000', email:'test@test.com', login:'validlogin',
                mather:'Mather test', name:'Name test', password:'123456', phone:'81900000000',
                status: 'active'
            }
        );
        const sut = await model.result();
        expect(sut).toEqual(undefined);
        expect(database._query).toBe("update users set age=?,cpf=?,email=?,login=?,mather=?,name=?,password=?,phone=?,status=?,dateUpdate=? where id=?");
        let [id, dateUpdate, ...props] = database._props.reverse();
        props = props.reverse();
        expect(props).toEqual([FAKE_DATE.toISOString(), "00000000000", "test@test.com", "validlogin", "Mather test", "Name test", "*crip:123456", "81900000000", "active"]);
        expect(dateUpdate).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
        expect(id).toBe("4");
    })

    it("update user, without status data", async () => {
        const { model, database } = newModelUsers_Update(4, {
            age:FAKE_DATE, cpf:'00000000000', email:'test@test.com', login:'validlogin',
            mather:'Mather test', name:'Name test', password:'123456', phone:'81900000000'
        });
        const sut = await model.result();
        expect(sut).toEqual(undefined);
        expect(database._query).toBe("update users set age=?,cpf=?,email=?,login=?,mather=?,name=?,password=?,phone=?,dateUpdate=? where id=?");
        let [id, dateUpdate, ...props] = database._props.reverse();
        props = props.reverse();
        expect(props).toEqual([FAKE_DATE.toISOString(), "00000000000", "test@test.com", "validlogin", "Mather test", "Name test", "*crip:123456", "81900000000"]);
        expect(dateUpdate).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
        expect(id).toBe("4");
    })

})

function newModelUsers_Update(id:number, data: IUsersDataInsert)
{
    const database = new FakeDatabase();
    const model = new ModelUsers_Update(id, data, database);
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