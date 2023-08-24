import { passwordCrip } from "./passwordCrip";

describe('entities test', () => {

    it('passwordCrip function', () => {
        const sut = passwordCrip('123456');
        expect(sut).toBe('*crip:123456');
    })

})