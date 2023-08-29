import { HTTPException, HTTPStatus } from "../../entities/error";
import { Verify } from "../../entities/verify";
import { IModelUsersUpdatePassword, IUsersDataUpdatePassword } from "../../interfaces/IModelUsers";

export class ServiceUpdateUserPassword {
    constructor(
        private readonly data: IUsersDataUpdatePassword,
        private readonly modelUsers: IModelUsersUpdatePassword
    ) {
        this.data.cpf = this.data.cpf.replace(/\D+/g,'');
    }

    private verifyData()
    {
        const { cpf, login, password } = this.data;
        if (!Verify.cpf(cpf))
            throw new HTTPException(`"${cpf}" não é um cpf válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidCPF');
        if (!Verify.login(login))
            throw new HTTPException(`"${login}" não é um login válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidLogin');
        if (!Verify.password(password))
            throw new HTTPException(`"${password}" não é uma senha válida, a senha deve conter 6 ou mais digitos`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPassword');
    }

    async result(): Promise<void> {
        this.verifyData();
        return this.modelUsers.updateUserPassword(this.data);
    }
}
