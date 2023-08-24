import { IModelUsers, IUsersDataList, IUsersDataNoPassword, IUsersDataUpdate, IUsersListFilter } from "../../interfaces/IModelUsers"
import { ServiceUpdateUser } from "./ServiceUpdateUser"

const FAKE_ID = 15;

const FAKE_DATA:IUsersDataUpdate = {
    age: new Date('2023/08/24'),
    cpf: '000.000.000-00',
    email: 'test@test.com',
    login: 'test',
    password: '12345678',
    mather: 'Fulana de tal',
    name: 'Test',
    phone: '+55 (81) 90000-0000',
}

describe('ServiceUpdateUser class', () => {

    it('update data test', async () => {
        const { service, models } = newServiceUpdateUser(1, FAKE_DATA);
        await service.result();
        expect(models._data).toEqual({
            "age": new Date("2023-08-24T03:00:00.000Z"),
            "cpf": "00000000000",
            "email": "test@test.com",
            "login": "test",
            "mather": "Fulana de tal",
            "name": "Test",
            "password": "12345678",
            "phone": "5581900000000"
        });
    })

    it('update data and add DDI in phone', async () => {
        const { service, models } = newServiceUpdateUser(1, { ...FAKE_DATA, phone:'(81) 90000-0000' });
        await service.result();
        expect(models._data).toEqual({
            "age": new Date("2023-08-24T03:00:00.000Z"),
            "cpf": "00000000000",
            "email": "test@test.com",
            "login": "test",
            "mather": "Fulana de tal",
            "name": "Test",
            "password": "12345678",
            "phone": "5581900000000"
        });
    })

    it('update data with invalide age', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, age: new Date('invalid date')});
        await expect(() => service.result())
            .rejects
            .toThrow('"Invalid Date" não é uma data de nascimento válida');
    })

    it('update data with invalide cpf', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, cpf:'as61df8w9we00'});
        await expect(() => service.result())
            .rejects
            .toThrow('"618900" não é um cpf válido');
    })

    it('update data with invalide email test@test', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, email:'test@test'});
        await expect(() => service.result())
            .rejects
            .toThrow('"test@test" não é um e-mail válido');
    })

    it('update data with invalide email testtest.com', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, email:'testtest.com'});
        await expect(() => service.result())
            .rejects
            .toThrow('"testtest.com" não é um e-mail válido');
    })
    
    it('update data with invalide login', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, login:'t'});
        await expect(() => service.result())
            .rejects
            .toThrow('"t" não é um login válido');
    })

    it('update data with invalide name', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, name:'t'});
        await expect(() => service.result())
            .rejects
            .toThrow('"t" não é um nome válido');
    })

    it('update data with invalide password 12345', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, password:'12345'});
        await expect(() => service.result())
            .rejects
            .toThrow('"12345" não é uma senha válida, a senha deve conter 6 ou mais digitos');
    })

    it('update data with invalide phone', async () => {
        const { service } = newServiceUpdateUser(1, {...FAKE_DATA, phone:'(81) 9999'});
        await expect(() => service.result())
            .rejects
            .toThrow('"819999" não é um telefone válido');
    })

    it("update data only name", async () => {
        const { service, models } = newServiceUpdateUser(1, { name:'test rename' });
        await service.result();
        expect(models._data).toEqual({
            "name": "test rename"
        });
    })

})

function newServiceUpdateUser(id:number, data: IUsersDataUpdate)
{
    const models = new FakeModels();
    const service = new ServiceUpdateUser(id, data, models);
    return { service, models };
}

class FakeModels implements IModelUsers {
    _data:any = null;
    async insertUser(data: IUsersDataUpdate): Promise<{ id: number }> {
        throw new Error("Method not implemented.")
    }
    async updateUser(id: number, data: IUsersDataUpdate): Promise<void> {
        this._data = data;
    }
    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.")
    }
    listUsers(props: IUsersListFilter): Promise<IUsersDataList[]> {
        throw new Error("Method not implemented.")
    }
    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.")
    }
    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.")
    }
}