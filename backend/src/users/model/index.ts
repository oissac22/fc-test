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

    listUsers(props: IUsersListFilter): Promise<IUsersDataList> {
        throw new Error("Method not implemented.");
    }

    datailUser(id: number): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }

    userByPassword(login: string, password: string): Promise<IUsersDataNoPassword> {
        throw new Error("Method not implemented.");
    }
}