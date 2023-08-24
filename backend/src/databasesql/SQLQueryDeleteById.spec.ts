import { SQLQueryDeleteById } from "./SQLQueryDeleteById"

describe('SQLQueryDeleteById class', () => {

    it('generat delete sql', () => {
        const sut = new SQLQueryDeleteById('22','test');
        expect(sut.sql).toBe('delete from test where id=?');
        expect(sut.propsValues).toEqual(['22']);
    })

})