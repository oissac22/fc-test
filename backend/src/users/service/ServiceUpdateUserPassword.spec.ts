import { IModelUsersUpdatePassword, IUsersDataList, IUsersDataNoPassword, IUsersDataUpdate, IUsersDataUpdatePassword, IUsersListFilter } from "../../interfaces/IModelUsers"
import { ServiceUpdateUserPassword } from "./ServiceUpdateUserPassword"

const FAKE_DATA:IUsersDataUpdatePassword = {
    cpf: '000.000.000-00',
    login: 'test',
    password: '12345678'
}

describe('ServiceUpdateUserPassword class', () => {

    it('update data test', async () => {
        const { service, models } = newServiceUpdateUserPassword(FAKE_DATA);
        await service.result();
        expect(models._data).toEqual({
            "cpf": "00000000000",
            "login": "test",
            "password": "12345678",
        });
    })

    it('update data with invalide cpf', async () => {
        const { service } = newServiceUpdateUserPassword({...FAKE_DATA, cpf:'as61df8w9we00'});
        await expect(() => service.result())
            .rejects
            .toThrow("\"618900\" não é um cpf válido");
    })
    
    it('update data with invalide login', async () => {
        const { service } = newServiceUpdateUserPassword({...FAKE_DATA, login:'t'});
        await expect(() => service.result())
            .rejects
            .toThrow("\"t\" não é um login válido");
    })

    it('update data with invalide password 12345', async () => {
        const { service } = newServiceUpdateUserPassword({...FAKE_DATA, password:'12345'});
        await expect(() => service.result())
            .rejects
            .toThrow("\"12345\" não é uma senha válida, a senha deve conter 6 ou mais digitos");
    })

})

function newServiceUpdateUserPassword(data: IUsersDataUpdatePassword)
{
    const models = new FakeModels();
    const service = new ServiceUpdateUserPassword(data, models);
    return { service, models };
}

class FakeModels implements IModelUsersUpdatePassword {
    _data:any = null;
    async updateUserPassword(data: IUsersDataUpdatePassword): Promise<void> {
        this._data = data;
    }
}