import { ModelLogin } from "."
import { ISQL } from "../../interfaces/ISQL"

const FAKE_DATE = new Date();
const FAKE_DATE_2 = new Date(FAKE_DATE);
FAKE_DATE_2.setSeconds(FAKE_DATE_2.getSeconds());

const FAKE_DATA = [{
    token: "valid-token",
    refresh_token: "valid-refresh-token",
    user_id: 5,
    dateInsert: FAKE_DATE,
    dateUpdate: FAKE_DATE_2,
}]

describe('ModelLogin class', () => {

    it('insert login token', async () => {
        const { database, model } = newModelLogin();
        await model.insertLogin({ refresh_token:'refresh-token', token:'long-token', user_id:5 });
        expect(database._query).toBe("insert into login_token (user_id, token, refresh_token) values (?, ?, ?)");
        expect(database._props).toEqual([5, "long-token", "refresh-token"]);
    })

    it('update login token', async () => {
        const { database, model } = newModelLogin();
        await model.updateLogin('valid_token', { refresh_token:'refresh-token', dateUpdate: FAKE_DATE });
        expect(database._query).toBe("update login_token set refresh_token = ?, dateUpdate = ? where token = ?");
        expect(database._props).toEqual(["refresh-token", FAKE_DATE.toISOString(), 'valid_token']);
    })

    it('get login by refresh_token', async () => {
        const { database, model } = newModelLogin();
        await model.getLogin('valid_token');
        expect(database._query).toBe("select * from login_token where refresh_token = ?");
        expect(database._props).toEqual(["valid_token"]);
    })

})

function newModelLogin()
{
    const database = new FakeDatabase();
    const model = new ModelLogin(database);
    return { database, model };
}

class FakeDatabase implements ISQL {
    _query:any = null;
    _props:any = null;
    async list(query: string, props?: (string | number)[]): Promise<any> {
        this._props = props;
        this._query = query;
        return FAKE_DATA;
    }

    async exec(query: string, props?: (string | number)[]): Promise<any> {
        this._props = props;
        this._query = query;
    }
}