import { HTTPException, HTTPStatus } from "../../entities/error";
import { IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";

const SQL = `SELECT *
FROM users
WHERE id=?`;


export class ModelUsers_dataUserById {
    constructor(
        private readonly id:number,
        private readonly database: ISQL
    ) { }

    async result(): Promise<IUsersDataNoPassword> {
        const result = await this.database.list(SQL, [this.id]);
        const user = result[0] || null;
        if (!user)
            throw new HTTPException(`Usuário de id ${this.id} não encontrado`, HTTPStatus.NOT_FOUND);
        const {password, ...userNoPassword} = user;
        return userNoPassword;
    }
}
