import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersListFilter } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";
import { ModelUsers_Delete } from "./ModelUsers_Delete";
import { ModelUsers_Insert } from "./ModelUsers_Insert";
import { ModelUsers_ListUsers } from "./ModelUsers_ListUsers";
import { ModelUsers_Update } from "./ModelUsers_Update";
import { ModelUsers_dataUserById } from "./ModelUsers_dataUserById";
import { ModelUsers_dataUserByPassword } from "./ModelUsers_dataUserByPassword";

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
        return new ModelUsers_Delete(id, this.database).result();
    }

    listUsers(props: IUsersListFilter):Promise<IUsersDataList[]> {
        return new ModelUsers_ListUsers(props, this.database).result();
    }

    datailUser(id: number): Promise<IUsersDataNoPassword> {
        return new ModelUsers_dataUserById(id, this.database).result();
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        return new ModelUsers_dataUserByPassword(login, password, this.database).result();
    }
}