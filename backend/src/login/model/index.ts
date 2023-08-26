
import { HTTPException } from "../../entities/error";
import { IModelLogin, IModelLoginData, IModelLoginDataInsert, IModelLoginDataUpdate } from "../../interfaces/IModelLogin";
import { ISQL } from "../../interfaces/ISQL";

const SQL_INSERT = "insert into login_token (user_id, token, refresh_token) values (?, ?, ?)";
const SQL_UPDATE = "update login_token set refresh_token = ?, dateUpdate = ? where refresh_token = ?";
const SQL_DELETE = "delete from login_token where refresh_token = ?";
const SQL_DELETE_FULL = "delete from login_token where user_id = ?";
const SQL_GET_LOGIN = "select * from login_token where refresh_token = ?";


export class ModelLogin implements IModelLogin {
    constructor(
        private readonly database:ISQL
    ){}

    async insertLogin(data: IModelLoginDataInsert): Promise<void> {
        const { refresh_token, token, user_id } = data;
        await this.database.exec(SQL_INSERT, [user_id, token, refresh_token]);
    }

    async updateLogin(token: string, data: IModelLoginDataUpdate): Promise<void> {
        const { dateUpdate, refresh_token } = data;
        await this.database.exec(SQL_UPDATE, [refresh_token, dateUpdate.toISOString(), token]);
    }

    async deleteLogin(token: string): Promise<void> {
        await this.database.exec(SQL_DELETE, [token]);
    }

    async deleteFullTokenUser(user_id: number): Promise<void> {
        await this.database.exec(SQL_DELETE_FULL, [user_id]);
    }

    async getLogin(refresh_token: string): Promise<IModelLoginData> {
        const result:IModelLoginData[] = await this.database.list(SQL_GET_LOGIN, [refresh_token]);
        if (!result?.length)
            throw new Error(`token não encontrado nos registros de login`);
        const login = result[0];
        return login;
    }
}