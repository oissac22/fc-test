import { Verify } from "./verify"

describe('test Verify class', () => {

    it('cpf function', () => {
        expect(Verify.cpf("01685")).toBe(false);
        expect(Verify.cpf(62165843677 as any)).toBe(false);
        expect(Verify.cpf("62165843677")).toBe(true);
    })

    it('date function', () => {
        expect(Verify.date(new Date("invalid date"))).toBe(false);
        expect(Verify.date("2023/08/25" as any)).toBe(false);
        expect(Verify.date(new Date("2023/08/25"))).toBe(true);
    })

    it('email function', () => {
        expect(Verify.email("asdafewed@dfqw")).toBe(false);
        expect(Verify.email("asdafeweddfqw.com")).toBe(false);
        expect(Verify.email(25 as any)).toBe(false);
        expect(Verify.email("asdafewe@ddfqw.com")).toBe(true);
    })

    it('login function', () => {
        expect(Verify.login("")).toBe(false);
        expect(Verify.login("a")).toBe(false);
        expect(Verify.login("abcdef")).toBe(true);
    })

    it('nameUser function', () => {
        expect(Verify.nameUser("")).toBe(false);
        expect(Verify.nameUser("a")).toBe(false);
        expect(Verify.nameUser("fulano")).toBe(true);
    })

    it('password function', () => {
        expect(Verify.password("")).toBe(false);
        expect(Verify.password("a")).toBe(false);
        expect(Verify.password("123456789")).toBe(true);
    })

    it('phone function', () => {
        expect(Verify.phone("0asd1fe5")).toBe(false);
        expect(Verify.phone("819000")).toBe(false);
        expect(Verify.phone("8130000000")).toBe(true);
        expect(Verify.phone("5581900000000")).toBe(true);
    })

    it('statusUser function', () => {
        expect(Verify.statusUser("")).toBe(false);
        expect(Verify.statusUser("safea641ew5")).toBe(false);
        expect(Verify.statusUser("block")).toBe(true);
        expect(Verify.statusUser("inactive")).toBe(true);
        expect(Verify.statusUser("active")).toBe(true);
    })

})