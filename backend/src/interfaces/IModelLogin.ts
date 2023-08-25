export interface IModelLoginData {
    token: string,
    refresh_token: string,
    user_id: number,
    dateInsert: Date,
    dateUpdate: Date,
}

export type IModelLoginDataInsert = Pick<IModelLoginData, "user_id" | "token" | "refresh_token">;
export type IModelLoginDataUpdate = Pick<IModelLoginData, "refresh_token" | "dateUpdate">;

export interface IModelLogin {
    insertLogin(data:IModelLoginDataInsert): Promise<void>;
    updateLogin(token: string, data:IModelLoginDataUpdate): Promise<void>;
    deleteLogin(token: string): Promise<void>;
    deleteFullTokenUser(user_id: number): Promise<void>;
    getLogin(token: string): Promise<IModelLoginData>;
}