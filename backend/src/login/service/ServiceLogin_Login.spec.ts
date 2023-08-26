import { KEY_LOGIN_SHORT_TIME, TOKEN_SHORT_TIME_EXPIRE, KEY_LOGIN_LONG_TIME, TOKEN_LONG_TIME_EXPIRE } from "../../config";
import { IModelLogin, IModelLoginData, IModelLoginDataInsert, IModelLoginDataUpdate } from "../../interfaces/IModelLogin";
import { IUsersDataNoPassword } from "../../interfaces/IModelUsers"
import { IServicesUsersDataByPassword } from "../../interfaces/IServicesUsers"
import { ITokenData } from "../../interfaces/ITokenData";
import { ServiceLogin_Login } from "./ServiceLogin_Login"

const FAKE_DATE = new Date();
const VALID_TOKEN = 'valid_token'

describe('ServiceLogin_Login class', () => {

    it('generate valid token with valid login and password', async () => {
        const { service, model, token, userService } = newServiceLogin_Login('valid_login', 'valid_password');
        const sut = await service.result();
        expect(sut).toEqual({ token:VALID_TOKEN })
        expect(model._props).toEqual({data: {refresh_token: VALID_TOKEN, token: VALID_TOKEN, user_id: 1}});
        expect(token._props).toEqual( [
            {"data": {"id": 1, "name": "Test Name"}, "expiresIn": TOKEN_LONG_TIME_EXPIRE, "key": KEY_LOGIN_LONG_TIME},
            {"data": {"id": 1, "name": "Test Name"}, "expiresIn": TOKEN_SHORT_TIME_EXPIRE, "key": KEY_LOGIN_SHORT_TIME}
        ]);
        expect(userService._props).toEqual({"login": "valid_login", "password": "valid_password"});
    })

})

function newServiceLogin_Login(login: string, password: string)
{
    const userService = new FakeUserService();
    const token = new FakeToken();
    const model = new FakeIModelLogin();
    const service = new ServiceLogin_Login(login, password, userService, token, model);
    return { service, model, token, userService }
}

class FakeUserService implements IServicesUsersDataByPassword {
    _props:any = null;
    async userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        this._props = { login, password };
        return {
            age: FAKE_DATE,
            cpf:'00000000000',
            dateInsert: FAKE_DATE,
            dateUpdate: FAKE_DATE,
            email: 'test@test.com',
            id: 1,
            mather: 'Test Mom',
            name: 'Test Name',
            phone: '81900000000',
            status: 'active'
        }
    }
}

class FakeToken implements ITokenData {
    _expectDate:any = null;
    _props:any[] = [];
    newToken(data: any, key: string, expiresIn: string | number): string {
        this._props.push({ data, key, expiresIn });
        return VALID_TOKEN;
    }

    validateToken(token: string, key: string): unknown {
        this._props.push({ token, key });
        if (token === VALID_TOKEN)
            return this._expectDate;
        throw new Error("invalid token");
    }

    getDataToken(token: string): unknown {
        this._props.push({ token });
        return this._expectDate;
    }
}

class FakeIModelLogin implements IModelLogin {
    _props:any = null;
    async insertLogin(data: IModelLoginDataInsert): Promise<void> {
        this._props = { data };
    }
    updateLogin(token: string, data: IModelLoginDataUpdate): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteLogin(token: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteFullTokenUser(user_id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogin(token: string): Promise<IModelLoginData> {
        throw new Error("Method not implemented.");
    }
}