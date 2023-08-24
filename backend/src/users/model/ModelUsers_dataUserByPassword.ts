import { HTTPException, HTTPStatus } from "../../entities/error";
import { passwordCrip } from "../../entities/passwordCrip";
import { IUsersDataNoPassword } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";

const SQL = `SELECT *
FROM users
WHERE login=? AND password=?`;


export class ModelUsers_dataUserByPassword {
    constructor(
        private readonly login:string,
        private readonly password:string,
        private readonly database: ISQL
    ) { }

    async result(): Promise<IUsersDataNoPassword> {
        const result = await this.database.list(SQL, [this.login, passwordCrip(this.password)]);
        const user = result[0] || null;
        if (!user)
            throw new HTTPException(`Login ou senha inválida`, HTTPStatus.NOT_FOUND, 'loginNotFound');
        const {password, ...userNoPassword} = user;
        return userNoPassword;
    }
}
