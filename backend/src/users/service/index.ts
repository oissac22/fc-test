import { IModelUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersDataUpdate, IUsersListFilter } from "../../interfaces/IModelUsers";
import { IServicesUsers } from "../../interfaces/IServicesUsers";
import { ServiceInsertUser } from "./ServiceInsertUser";
import { ServiceUpdateUser } from "./ServiceUpdateUser";
import { ServiceUsersListUsers } from "./ServiceUsersListUsers";

export const MAX_LIMIT = 100;

export class ServiceUsers implements IServicesUsers {

    constructor(
        private readonly modelUsers:IModelUsers
    ){}

    insertUser(data: IUsersDataInsert): Promise<{ id: number; }> {
        return new ServiceInsertUser(data, this.modelUsers).result();
    }

    updateUser(id: number, data: IUsersDataUpdate): Promise<void> {
        return new ServiceUpdateUser(id, data, this.modelUsers).result();
    }

    deleteUser(id: number): Promise<void> {
        return this.modelUsers.deleteUser(id)
    }

    listUsers(props: IUsersListFilter): Promise<IUsersDataList[]> {
        return new ServiceUsersListUsers(props, this.modelUsers).result();
    }

    detailUser(id: number): Promise<IUsersDataNoPassword> {
        return this.modelUsers.detailUser(id);
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        return this.modelUsers.userByPassword(login, password);
    }

}

