import { TokenDataJWT } from "./tokenDataJwt"

const KEY_TOKEN = 'testkey';

describe('tokenDataJwt class', () => {
    
    it('validate in and out token data', () => {
        const { token } = newtokenDataJwt();
        const sut = token.newToken({ id:1, name:"test" }, KEY_TOKEN, '1h');
        expect(sut).toMatch(/^111$/)
    })

})

function newtokenDataJwt()
{
    const token = new TokenDataJWT();
    return { token };
}