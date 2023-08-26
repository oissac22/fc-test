import { KEY_LOGIN_SHORT_TIME, TOKEN_LONG_TIME_EXPIRE, TOKEN_SHORT_TIME_EXPIRE } from "../../config";
import { HTTPException, HTTPStatus } from "../../entities/error";
import { IModelLogin, IModelLoginData, IModelLoginDataInsert, IModelLoginDataUpdate } from "../../interfaces/IModelLogin";
import { ITokenData } from "../../interfaces/ITokenData";
import { ServiceLogin_VerifyLoginActived } from "./ServiceLogin_VerifyLoginActived"

const VALID_TOKEN = 'valid_token'
const VALID_LONG_TOKEN = 'valid_long_token'
const FAKE_DATE = new Date();
const FAKE_USER_ID = 5;
const FAKE_USER_NAME = 'Test Name';

jest.spyOn(global, 'Date').mockImplementation(() => FAKE_DATE);

describe('ServiceLogin_VerifyLoginActived class', () => {

    it('verify refresh token', async () => {
        const { service, model, tokenClass } = newServiceLogin_VerifyLoginActived(VALID_TOKEN);
        await service.result();
        expect(model._props).toEqual([]);
        expect(tokenClass._props).toEqual([{"key": KEY_LOGIN_SHORT_TIME, "token": VALID_TOKEN}]);
    })

    it('verify invalid refresh token', async () => {
        const { service, model, tokenClass } = newServiceLogin_VerifyLoginActived(VALID_TOKEN);
        tokenClass._autoInvalidTokenCount = 1;
        const sut = await service.result();
        expect(model._props).toEqual(
            [{"token": VALID_TOKEN},
            {"data": {"dateUpdate": FAKE_DATE, "refresh_token": VALID_TOKEN}, "token": VALID_TOKEN}
        ]);
        expect(tokenClass._props).toEqual([
            {"key": KEY_LOGIN_SHORT_TIME, "token": VALID_TOKEN},
            {"key": TOKEN_LONG_TIME_EXPIRE, "token": VALID_LONG_TOKEN},
            {"data": { id: FAKE_USER_ID, name: FAKE_USER_NAME }, "expiresIn": TOKEN_SHORT_TIME_EXPIRE, "key": KEY_LOGIN_SHORT_TIME}
        ]);
        expect(sut).toEqual({"new_refresh_token": VALID_TOKEN});
    })

    it('verify invalid refresh_token and invalid token id db', async () => {
        const { service, model, tokenClass } = newServiceLogin_VerifyLoginActived(VALID_TOKEN);
        tokenClass._autoInvalidTokenCount = 2;
        await expect(() => service.result())
            .rejects
            .toThrow('O login não existe ou expirou');
        expect(model._props).toEqual([{"token": VALID_TOKEN}]);
        expect(tokenClass._props).toEqual([
            {"key": KEY_LOGIN_SHORT_TIME, "token": VALID_TOKEN},
            {"key": TOKEN_LONG_TIME_EXPIRE, "token": VALID_LONG_TOKEN}
        ]);
    })

})

function newServiceLogin_VerifyLoginActived(token: string)
{
    const model = new FakeIModelLogin();
    const tokenClass = new FakeToken();
    const service = new ServiceLogin_VerifyLoginActived(token, tokenClass, model);
    return { service, model, tokenClass }
}

class FakeToken implements ITokenData {
    _expectDate:any = { id:FAKE_USER_ID, name:FAKE_USER_NAME };
    _props:any[] = [];
    _autoInvalidTokenCount:number = 0;
    newToken(data: any, key: string, expiresIn: string | number): string {
        this._props.push({ data, key, expiresIn });
        return VALID_TOKEN;
    }

    validateToken(token: string, key: string): unknown {
        this._props.push({ token, key });
        if (this._autoInvalidTokenCount > 0)
        {
            this._autoInvalidTokenCount--;
            throw new HTTPException('invalid token', HTTPStatus.NOT_FOUND);
        }
        if (token === VALID_TOKEN || token === VALID_LONG_TOKEN)
            return this._expectDate;
        throw new Error("invalid token");
    }

    getDataToken(token: string): unknown {
        this._props.push({ token });
        return this._expectDate;
    }
}

class FakeIModelLogin implements IModelLogin {
    _props:any[] = [];
    async insertLogin(data: IModelLoginDataInsert): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateLogin(token: string, data: IModelLoginDataUpdate): Promise<void> {
        this._props.push({ token, data });
    }
    async deleteLogin(token: string): Promise<void> {
        this._props.push({ token });
    }
    deleteFullTokenUser(user_id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getLogin(token: string): Promise<IModelLoginData> {
        this._props.push({ token });
        if (token !== VALID_TOKEN)
            throw new HTTPException('no reg in db', HTTPStatus.NOT_FOUND);
        return {
            dateInsert: FAKE_DATE,
            dateUpdate: FAKE_DATE,
            refresh_token: token,
            token: VALID_LONG_TOKEN,
            user_id: FAKE_USER_ID
        }
    }
}