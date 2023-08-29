import { IUsersDataInsert, IUsersDataList, IUsersDataNoPassword, IUsersDataUpdate, IUsersDataUpdatePassword, IUsersListFilter } from "./IModelUsers";

export interface IServicesUsersInsert {
    insertUser(data:IUsersDataInsert):Promise<{ id:number }>;
}

export interface IServicesUsersUpdate {
    updateUser(id:number, data:IUsersDataUpdate):Promise<void>;
}

export interface IServicesUsersUpdatePassword {
    updatePasswordUser(data:IUsersDataUpdatePassword):Promise<void>;
}

export interface IServicesUsersDelete {
    deleteUser(id:number):Promise<void>;
}

export interface IServicesUsersList {
    listUsers(props: IUsersListFilter):Promise<IUsersDataList[]>;
}

export interface IServicesUsersDetail {
    detailUser(id:number):Promise<IUsersDataNoPassword>;
}

export interface IServicesUsersDataByPassword {
    userByPassword(login:string, password:string):Promise<IUsersDataNoPassword>
}

export interface IServicesUsers extends IServicesUsersInsert, IServicesUsersUpdate, IServicesUsersDelete, IServicesUsersList, IServicesUsersDetail, IServicesUsersDataByPassword, IServicesUsersUpdatePassword { }
