import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers"
import { SericeInsertUser } from "./SericeInsertUser"

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

describe('SericeInsertUser class', () => {

    it('insert data test', async () => {
        const { service, models } = newSericeInsertUser(FAKE_DATA);
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

    it('insert data with invalide age', async () => {
        const { service } = newSericeInsertUser({...FAKE_DATA, age: new Date('invalid date')});
        await expect(() => service.result())
            .rejects
            .toThrow('"Invalid Date" não é uma data de nascimento válida');
    })

    it('insert data with invalide cpf', async () => {
        const { service } = newSericeInsertUser({...FAKE_DATA, cpf:'as61df8w9we00'});
        await expect(() => service.result())
            .rejects
            .toThrow('"618900" não é um cpf válido');
    })

    it('insert data with invalide email test@test', async () => {
        const { service } = newSericeInsertUser({...FAKE_DATA, email:'test@test'});
        await expect(() => service.result())
            .rejects
            .toThrow('"test@test" não é um e-mail válido');
    })

    it('insert data with invalide email testtest.com', async () => {
        const { service } = newSericeInsertUser({...FAKE_DATA, email:'testtest.com'});
        await expect(() => service.result())
            .rejects
            .toThrow('"testtest.com" não é um e-mail válido');
    })

})

function newSericeInsertUser(data: IUsersDataInsert)
{
    const models = new FakeModels();
    const service = new SericeInsertUser(data, models);
    return { service, models };
}

class FakeModels implements IModelUsers {
    _data:any = null;
    async insertUser(data: IUsersDataInsert): Promise<{ id: number }> {
        this._data = data;
        return { id:FAKE_ID }
    }
    updateUser(id: number, data: IUsersDataInsert): Promise<{ id: number }> {
        throw new Error("Method not implemented.")
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