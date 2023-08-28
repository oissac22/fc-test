export type TUserStatus = "block" | "inactive" | "active";

export interface IUsersData {
    id: number,
    name: string,
    login: string,
    password: string,
    email: string,
    phone: string,
    cpf: string,
    age: Date,
    mather: string,
    status: TUserStatus,
    dateInsert: Date,
    dateUpdate: Date
}

export type IUsersListFilter = {
    index: number,
    limit: number,
    filter?: string,
}

export type IUsersDataInsert = Omit<IUsersData, "id" | "dateInsert" | "dateUpdate" | "status"> & { status?: TUserStatus }
export type IUsersDataUpdate = Partial<Omit<IUsersDataInsert, "id">>
export type IUsersDataList = Pick<IUsersData, "id" | "name" | "email" | "phone">
export type IUsersDataNoPassword = Omit<IUsersData, "login" | "password">

export type IUsersListFilterNoLimit = Omit<IUsersListFilter, 'limit'>