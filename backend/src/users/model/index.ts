import { Database } from "../../databasesql";
import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers";

export class ModelUsers implements IModelUsers {
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
        const result = await Database.list(sql, [props.index, props.limit])
        return result;
    }

    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }
}