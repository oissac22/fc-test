import { SQLite } from "./sqlite3";

describe("SQLite class test", () => {

    it("list users", async () => {
        const sql = new SQLite();
        const sut = await sql.list(`select id, name, phone, cpf from users limit 1`);
        expect(sut[0]).toHaveProperty("id");
        expect(sut[0]).toHaveProperty("name");
        expect(sut[0]).toHaveProperty("phone");
        expect(sut[0]).toHaveProperty("cpf");
        expect(sut).toHaveProperty('length', 1);
    })

})