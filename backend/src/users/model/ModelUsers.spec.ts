import { ModelUsers } from "."
import { Database } from "../../databasesql";


describe("ModelUsers class", () => {

    it("list users", async () => {
        const { model } = newModelUsers();
        const sut = await model.listUsers({ index:0, limit:3 });
        console.log(JSON.stringify(sut, null, 4));
        // expect(sut).toEqual('***');
    })

})

function newModelUsers()
{
    const model = new ModelUsers(Database);
    return {model}
}