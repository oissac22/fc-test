import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers"
import { ServiceUsersListUsers } from "./ServiceUsersListUsers"

const FAKE_RESULT =  [                                                                                                                                                                                                                   
    {                                                                                                                                                                                                               
        "id": 1,                                                                                                                                                                                                    
        "name": "Cássio",                                                                                                                                                                                           
        "email": "cassio@test.com",                                                                                                                                                                                 
        "phone": "81900000001"
    },
    {
        "id": 2,
        "name": "Maria",
        "email": "maria@test.com",
        "phone": "81900000002"
    },
    {
        "id": 3,
        "name": "Ana",
        "email": "ana@test.com",
        "phone": "81900000003"
    }
]

describe('ServiceUsersListUsers class', () => {

    it('list users', async () => {
        const { service, model } = newServiceUsersListUsers({ index:0, limit:3 });
        const sut = await service.result();
        expect(sut).toEqual('***');
        expect(model._props).toEqual('***');
    })

})

function newServiceUsersListUsers(props: IUsersListFilter)
{
    const model = new FakeModelUsers();
    const service = new ServiceUsersListUsers(props, model);
    return { service, model }
}

class FakeModelUsers implements IModelUsers {
    _props:any = null;
    insertUser(data: IUsersDataInsert): Promise<{ id: number }> {
        throw new Error("Method not implemented.")
    }
    updateUser(id: number, data: Partial<Omit<IUsersDataInsert, "id">>): Promise<void> {
        throw new Error("Method not implemented.")
    }
    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.")
    }
    async listUsers(props: IUsersListFilter): Promise<IUsersDataList[]> {
        this._props = props;
        return FAKE_RESULT;
    }
    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.")
    }
    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.")
    }
}