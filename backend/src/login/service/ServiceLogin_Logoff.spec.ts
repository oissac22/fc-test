import { IModelLogin, IModelLoginData, IModelLoginDataInsert, IModelLoginDataUpdate } from "../../interfaces/IModelLogin";
import { ServiceLogin_Logoff } from "./ServiceLogin_Logoff"

const VALID_TOKEN = 'valid_token'

describe('ServiceLogin_Logoff class', () => {

    it('generate valid token with valid login and password', async () => {
        const { service, model } = newServiceLogin_Logoff(VALID_TOKEN);
        await service.result();
        expect(model._props).toEqual({"token": VALID_TOKEN});
    })

})

function newServiceLogin_Logoff(token: string)
{
    const model = new FakeIModelLogin();
    const service = new ServiceLogin_Logoff(token, model);
    return { service, model }
}

class FakeIModelLogin implements IModelLogin {
    _props:any = null;
    async insertLogin(data: IModelLoginDataInsert): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateLogin(token: string, data: IModelLoginDataUpdate): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteLogin(token: string): Promise<void> {
        this._props = { token };
    }
    deleteFullTokenUser(user_id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogin(token: string): Promise<IModelLoginData> {
        throw new Error("Method not implemented.");
    }
}