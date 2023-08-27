import { KEY_LOGIN_SHORT_TIME, TOKEN_SHORT_TIME_EXPIRE, KEY_LOGIN_LONG_TIME, TOKEN_LONG_TIME_EXPIRE } from "../../config";
import { IModelLogin, IModelLoginData, IModelLoginDataInsert, IModelLoginDataUpdate } from "../../interfaces/IModelLogin";
import { IUsersDataNoPassword } from "../../interfaces/IModelUsers"
import { IServicesUsersDataByPassword, IServicesUsersDetail } from "../../interfaces/IServicesUsers"
import { ITokenData } from "../../interfaces/ITokenData";
import { ServiceLogin_Data } from "./ServiceLogin_Data"

const FAKE_DATE = new Date();
const FAKE_USER_ID = 5;
const VALID_TOKEN = 'valid_token'

const FAKE_USER_DATA:IUsersDataNoPassword = {
    age: FAKE_DATE,
    cpf: '00000000000',
    dateInsert: FAKE_DATE,
    dateUpdate: FAKE_DATE,
    email: 'test@test.com',
    id: FAKE_USER_ID,
    mather: 'Test Mom',
    name: 'Test Name',
    phone: '81900000000',
    status: 'active'
}

describe('ServiceLogin_Data class', () => {

    it('get user by id', async () => {
        const { service, model, serviceUserDetail } = newServiceLogin_Data(VALID_TOKEN);
        const sut = await service.result();
        expect(sut).toEqual(FAKE_USER_DATA)
        expect(model._props).toEqual({"token": VALID_TOKEN});
        expect(serviceUserDetail._props).toEqual({"id": FAKE_USER_ID});
    })

})

function newServiceLogin_Data(refresh_token:string)
{
    const model = new FakeIModelLogin();
    const serviceUserDetail = new FakeServicesUsersDetail();
    const service = new ServiceLogin_Data(refresh_token, model, serviceUserDetail);
    return { service, model, serviceUserDetail }
}

class FakeServicesUsersDetail implements IServicesUsersDetail {
    _props:any = null;
    async detailUser(id: number): Promise<IUsersDataNoPassword> {
        this._props = { id };
        return FAKE_USER_DATA;
    }
}

class FakeIModelLogin implements IModelLogin {
    _props:any = null;
    async insertLogin(data: IModelLoginDataInsert): Promise<void> {
        throw new Error("Method not implemented.");
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
    async getLogin(token: string): Promise<IModelLoginData> {
        this._props = { token };
        return {
            dateInsert: FAKE_DATE,
            dateUpdate: FAKE_DATE,
            refresh_token: VALID_TOKEN,
            token: VALID_TOKEN,
            user_id: FAKE_USER_ID
        };
    }
}