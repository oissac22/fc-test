import { SQLQueryInsert } from "./SQLQueryInsert"

describe('SQLQueryInsert class', () => {

    it('generat insert sql', () => {
        const sut = new SQLQueryInsert('test', { at1:"value 1", at2:2, at3:"value 3", at4: undefined, at5:null, at6:"value 6" });
        expect(sut.sql).toBe('insert into test (at1,at2,at3,at6) values (?,?,?,?)');
        expect(sut.propsValues).toEqual(["value 1", 2, "value 3", "value 6"]);
    })

})