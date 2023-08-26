import { TokenDataJWT } from "./tokenDataJwt"

const KEY_TOKEN = 'testkey';

describe('tokenDataJwt class', () => {
    
    it('validate in and out token data', () => {
        const { token } = newtokenDataJwt();
        const data_test = { id:1, name:"test" };

        const sutStartToken = token.newToken(data_test, KEY_TOKEN, '1h');
        expect(sutStartToken).toMatch(/^[\w\-]+\.[\w\-]+\.[\w\-]+$/);

        const recoverData = token.getDataToken(sutStartToken);
        const { exp, iat, ...sutRecoverData } = recoverData;
        expect(sutRecoverData).toEqual({ ...data_test });
    })

})

function newtokenDataJwt()
{
    const token = new TokenDataJWT();
    return { token };
}