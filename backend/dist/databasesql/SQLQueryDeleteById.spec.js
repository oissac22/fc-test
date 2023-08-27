"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SQLQueryDeleteById_1 = require("./SQLQueryDeleteById");
describe('SQLQueryDeleteById class', () => {
    it('generat delete sql', () => {
        const sut = new SQLQueryDeleteById_1.SQLQueryDeleteById('22', 'test');
        expect(sut.sql).toBe('delete from test where id=?');
        expect(sut.propsValues).toEqual(['22']);
    });
});
