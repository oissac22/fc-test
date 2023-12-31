import { IModelUsers, IModelUsersList, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers"
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
        expect(sut).toEqual(FAKE_RESULT);
        expect(model._props).toEqual({"index": 0, "limit": 3});
    })

    it('list users with filter', async () => {
        const { service, model } = newServiceUsersListUsers({ index:0, limit:3, filter:'filter test' });
        const sut = await service.result();
        expect(sut).toEqual(FAKE_RESULT);
        expect(model._props).toEqual({"index": 0, "limit": 3, filter:'filter test'});
    })

})

function newServiceUsersListUsers(props: IUsersListFilter)
{
    const model = new FakeModelUsers();
    const service = new ServiceUsersListUsers(props, model);
    return { service, model }
}

class FakeModelUsers implements IModelUsersList {
    _props:any = null;
    async listUsers(props: IUsersListFilter): Promise<IUsersDataList[]> {
        this._props = props;
        return FAKE_RESULT;
    }
}