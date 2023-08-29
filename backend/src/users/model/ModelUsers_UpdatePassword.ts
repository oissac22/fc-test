import { passwordCrip } from "../../entities/passwordCrip";
import { IUsersDataUpdatePassword } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";

const SQL_UPDATE = "update users login = ?, password = ?, dateUpdate = ? from  where cpf = ?"

export class ModelUsers_UpdatePassword {
    constructor(
        private readonly data: IUsersDataUpdatePassword,
        private readonly database: ISQL
    ) {
        if (data.password)
            data.password = passwordCrip(data.password);
    }

    async result(): Promise<void> {
        const { cpf, login, password } = this.data;
        await this.database.exec(
            SQL_UPDATE,
            [ login, password, new Date().toISOString(), cpf ]
        );
    }
}
