import { IUsersDataNoPassword } from "../../interfaces/IModelUsers"
import { IServicesUsersDataByPassword } from "../../interfaces/IServicesUsers"
import { ITokenData } from "../../interfaces/ITokenData";
import { ServiceLogin_Login } from "./ServiceLogin_Login"

const FAKE_DATE = new Date();

describe('ServiceLogin_Login class', () => {

})

function newServiceLogin_Login(login: string, password: string)
{
    const userService = new FakeUserService();
    const service = new ServiceLogin_Login(login, password, userService, )
}

class FakeUserService implements IServicesUsersDataByPassword {
    async userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
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
    newToken(data: any, key: string, expiresIn: string | number): string {
        throw new Error("Method not implemented.");
    }

    validateToken(token: string, key: string): unknown {
        throw new Error("Method not implemented.");
    }
    
    getDataToken(token: string): unknown {
        throw new Error("Method not implemented.");
    }
}