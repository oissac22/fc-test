import { Verify } from "./verify"

describe('test Verify class', () => {

    it('cpf function', () => {
        expect(Verify.cpf("01685")).toBe(false);
        expect(Verify.cpf("62165843677")).toBe(true);
    })

})