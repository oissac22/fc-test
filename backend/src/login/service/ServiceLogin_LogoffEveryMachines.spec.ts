import { IModelLogin, IModelLoginData, IModelLoginDataInsert, IModelLoginDataUpdate } from "../../interfaces/IModelLogin";
import { ServiceLogin_LogoffEveryMachines } from "./ServiceLogin_LogoffEveryMachines"

const REFRESH_TOKEN = 'refresh-token'
const TOKEN = 'valid-toke'
const FAKE_DATE = new Date();
const FAKE_USER_ID = 5;

describe('ServiceLogin_LogoffEveryMachines class', () => {

    it('generate valid token with valid login and password', async () => {
        const { service, model } = newServiceLogin_LogoffEveryMachines(REFRESH_TOKEN);
        await service.result();
        expect(model._props).toEqual( [{"token": REFRESH_TOKEN}, {"user_id": FAKE_USER_ID}]);
    })

})

function newServiceLogin_LogoffEveryMachines(token: string)
{
    const model = new FakeIModelLogin();
    const service = new ServiceLogin_LogoffEveryMachines(token, model);
    return { service, model }
}

class FakeIModelLogin implements IModelLogin {
    _props:any[] = [];
    insertLogin(data: IModelLoginDataInsert): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateLogin(token: string, data: IModelLoginDataUpdate): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteLogin(token: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteFullTokenUser(user_id: number): Promise<void> {
        this._props.push({ user_id });
    }
    async getLogin(token: string): Promise<IModelLoginData> {
        this._props.push({ token });
        return { dateInsert: FAKE_DATE, dateUpdate: FAKE_DATE, refresh_token:REFRESH_TOKEN, user_id: FAKE_USER_ID, token: TOKEN };
    }
}