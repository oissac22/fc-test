import { IModelUsers, IServicesUsers, IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersDataUpdate, IUsersListFilter } from "../../interfaces/IModelUsers";
import { ServiceInsertUser } from "./ServiceInsertUser";

export class ServiceUsers implements IServicesUsers {

    constructor(
        private readonly modelUsers:IModelUsers
    ){}

    insertUser(data: IUsersDataInsert): Promise<{ id: number; }> {
        return new ServiceInsertUser(data, this.modelUsers).result();
    }

    updateUser(id: number, data: IUsersDataUpdate): Promise<{ id: number; }> {
        throw new Error("Method not implemented.");
    }

    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    listUsers(props: IUsersListFilter): Promise<IUsersDataList[]> {
        throw new Error("Method not implemented.");
    }

    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }

}

