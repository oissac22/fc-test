import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";

export class ModelUsers implements IModelUsers {
    constructor(
        private readonly database:ISQL
    ){}

    insertUser(data: IUsersDataInsert): Promise<{ id: number; }> {
        throw new Error("Method not implemented.");
    }
    
    updateUser(id: number, data: IUsersDataInsert): Promise<{ id: number; }> {
        throw new Error("Method not implemented.");
    }

    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async listUsers(props: IUsersListFilter):Promise<IUsersDataList> {
        const sql = `SELECT id, name, email, phone
            FROM users
            LIMIT ?
            OFFSET ?`;
        const result = await this.database.list(sql, [props.limit, props.index])
        return result;
    }

    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }
}