import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";
import { ModelUsers_Insert } from "./ModelUsers_Insert";
import { ModelUsers_ListUsers } from "./ModelUsers_ListUsers";
import { ModelUsers_Update } from "./ModelUsers_Update";

export class ModelUsers implements IModelUsers {
    constructor(
        private readonly database:ISQL
    ){}

    insertUser(data: IUsersDataInsert): Promise<{ id: number; }> {
        return new ModelUsers_Insert(data, this.database).result();
    }
    
    updateUser(id: number, data: IUsersDataInsert): Promise<{ id: number; }> {
        return new ModelUsers_Update(id, data, this.database).result();
    }

    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    listUsers(props: IUsersListFilter):Promise<IUsersDataList[]> {
        return new ModelUsers_ListUsers(props, this.database).result();
    }

    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }
}