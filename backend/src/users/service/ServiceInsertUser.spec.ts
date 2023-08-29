import { IModelUsers, IModelUsersInsert, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers"
import { ServiceInsertUser } from "./ServiceInsertUser"

const FAKE_ID = 15;

const FAKE_DATA:IUsersDataInsert = {
    age: new Date('2023/08/24'),
    cpf: '000.000.000-00',
    email: 'test@test.com',
    login: 'test',
    password: '12345678',
    mather: 'Fulana de tal',
    name: 'Test',
    phone: '+55 (81) 90000-0000',
}

describe('ServiceInsertUser class', () => {

    it('insert data test', async () => {
        const { service, models } = newServiceInsertUser(FAKE_DATA);
        const result = await service.result();
        expect(result).toEqual({ id:FAKE_ID });
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

    it('insert data and add DDI in phone', async () => {
        const { service, models } = newServiceInsertUser({ ...FAKE_DATA, phone:'(81) 90000-0000' });
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

    it('insert data with invalide age', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, age: new Date('invalid date')});
        await expect(() => service.result())
            .rejects
            .toThrow('"Invalid Date" não é uma data de nascimento válida');
    })

    it('insert data with invalide cpf', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, cpf:'as61df8w9we00'});
        await expect(() => service.result())
            .rejects
            .toThrow('"618900" não é um cpf válido');
    })

    it('insert data with invalide email test@test', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, email:'test@test'});
        await expect(() => service.result())
            .rejects
            .toThrow('"test@test" não é um e-mail válido');
    })

    it('insert data with invalide email testtest.com', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, email:'testtest.com'});
        await expect(() => service.result())
            .rejects
            .toThrow('"testtest.com" não é um e-mail válido');
    })
    
    it('insert data with invalide login', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, login:'t'});
        await expect(() => service.result())
            .rejects
            .toThrow('"t" não é um login válido');
    })

    it('insert data with invalide name', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, name:'t'});
        await expect(() => service.result())
            .rejects
            .toThrow('"t" não é um nome válido');
    })

    it('insert data with invalide password 12345', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, password:'12345'});
        await expect(() => service.result())
            .rejects
            .toThrow('"12345" não é uma senha válida, a senha deve conter 6 ou mais digitos');
    })

    it('insert data with invalide phone', async () => {
        const { service } = newServiceInsertUser({...FAKE_DATA, phone:'(81) 9999'});
        await expect(() => service.result())
            .rejects
            .toThrow('"819999" não é um telefone válido');
    })

})

function newServiceInsertUser(data: IUsersDataInsert)
{
    const models = new FakeModels();
    const service = new ServiceInsertUser(data, models);
    return { service, models };
}

class FakeModels implements IModelUsersInsert {
    _data:any = null;
    async insertUser(data: IUsersDataInsert): Promise<{ id: number }> {
        this._data = data;
        return { id:FAKE_ID }
    }
}