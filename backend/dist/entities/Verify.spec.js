"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verify_1 = require("./verify");
describe('test Verify class', () => {
    it('cpf function', () => {
        expect(verify_1.Verify.cpf("01685")).toBe(false);
        expect(verify_1.Verify.cpf(62165843677)).toBe(false);
        expect(verify_1.Verify.cpf("62165843677")).toBe(true);
    });
    it('date function', () => {
        expect(verify_1.Verify.date(new Date("invalid date"))).toBe(false);
        expect(verify_1.Verify.date("2023/08/25")).toBe(false);
        expect(verify_1.Verify.date(new Date("2023/08/25"))).toBe(true);
        expect(verify_1.Verify.date(new Date("2023-08-25"))).toBe(true);
    });
    it('email function', () => {
        expect(verify_1.Verify.email("asdafewed@dfqw")).toBe(false);
        expect(verify_1.Verify.email("asdafeweddfqw.com")).toBe(false);
        expect(verify_1.Verify.email(25)).toBe(false);
        expect(verify_1.Verify.email("asdafewe@ddfqw.com")).toBe(true);
    });
    it('login function', () => {
        expect(verify_1.Verify.login("")).toBe(false);
        expect(verify_1.Verify.login("a")).toBe(false);
        expect(verify_1.Verify.login("abcdef")).toBe(true);
    });
    it('nameUser function', () => {
        expect(verify_1.Verify.nameUser("")).toBe(false);
        expect(verify_1.Verify.nameUser("a")).toBe(false);
        expect(verify_1.Verify.nameUser("fulano")).toBe(true);
    });
    it('password function', () => {
        expect(verify_1.Verify.password("")).toBe(false);
        expect(verify_1.Verify.password("a")).toBe(false);
        expect(verify_1.Verify.password("123456789")).toBe(true);
    });
    it('phone function', () => {
        expect(verify_1.Verify.phone("0asd1fe5")).toBe(false);
        expect(verify_1.Verify.phone("819000")).toBe(false);
        expect(verify_1.Verify.phone("8130000000")).toBe(true);
        expect(verify_1.Verify.phone("5581900000000")).toBe(true);
    });
    it('statusUser function', () => {
        expect(verify_1.Verify.statusUser("")).toBe(false);
        expect(verify_1.Verify.statusUser("safea641ew5")).toBe(false);
        expect(verify_1.Verify.statusUser("block")).toBe(true);
        expect(verify_1.Verify.statusUser("inactive")).toBe(true);
        expect(verify_1.Verify.statusUser("active")).toBe(true);
    });
});
