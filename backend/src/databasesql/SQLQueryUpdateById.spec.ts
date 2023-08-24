import { SQLQueryUpdateById } from "./SQLQueryUpdateById"

describe('SQLQueryUpdateById class', () => {

    it('generat insert sql', () => {
        const sut = new SQLQueryUpdateById('5','test', { at1:"value 1", at2:2, at3:"value 3", at4: undefined, at5:null, at6:"value 6" });
        expect(sut.sql).toBe('update test set at1=?,at2=?,at3=?,at6=? where id=?');
        expect(sut.propsValues).toEqual(["value 1", 2, "value 3", "value 6", '5']);
    })

})