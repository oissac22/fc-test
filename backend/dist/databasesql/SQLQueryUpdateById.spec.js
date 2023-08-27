"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SQLQueryUpdateById_1 = require("./SQLQueryUpdateById");
describe('SQLQueryUpdateById class', () => {
    it('generat update sql', () => {
        const sut = new SQLQueryUpdateById_1.SQLQueryUpdateById('5', 'test', { at1: "value 1", at2: 2, at3: "value 3", at4: undefined, at5: null, at6: "value 6" });
        expect(sut.sql).toBe('update test set at1=?,at2=?,at3=?,at6=? where id=?');
        expect(sut.propsValues).toEqual(["value 1", 2, "value 3", "value 6", '5']);
    });
});
