import { HTTPException, HTTPStatus } from "../../entities/error";
import { passwordCrip } from "../../entities/passwordCrip";
import { IUsersDataUpdatePassword } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";

const SQL_UPDATE = "update users set login = ?, password = ?, dateUpdate = ? where cpf = ?"

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
        const result = await this.database.exec(
            SQL_UPDATE,
            [ login, password, new Date().toISOString(), cpf ]
        );
        if (!result?.count)
            throw new HTTPException(`CPF não encontrado`, HTTPStatus.NOT_FOUND, `cpfNotFound`)
    }
}
