import { ModelUsers_Delete } from "./ModelUsers_Delete"
import { ISQL } from "../../interfaces/ISQL";

describe("ModelUsers_Delete class", () => {

    it("delete user by id", async () => {
        const { model, database } = newModelUsers_Delete(4);
        const sut = await model.result();
        expect(sut).toEqual({id:1});
        expect(database._query).toBe("delete from users where id=?");
        expect(database._props).toEqual(["4"]);
    })

})

function newModelUsers_Delete(id:number)
{
    const database = new FakeDatabase();
    const model = new ModelUsers_Delete(id, database);
    return {model, database};
}


class FakeDatabase implements ISQL {
    _query:any = null;
    _props:any = null;
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