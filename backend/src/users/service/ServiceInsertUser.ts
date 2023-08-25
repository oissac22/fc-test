import { adjustPhoneDDIOnlyNumber } from "../../entities/adjustPhoneDDIOnlyNumber";
import { cpfAdjustToInsert } from "../../entities/cpfInsert";
import { HTTPException, HTTPStatus } from "../../entities/error";
import { phoneAdjustToInsert } from "../../entities/phoneInsert";
import { Verify } from "../../entities/verify";
import { IModelUsers, IUsersDataInsert } from "../../interfaces/IModelUsers";


export class ServiceInsertUser {
    constructor(
        private readonly data: IUsersDataInsert,
        private readonly modelUsers: IModelUsers
    ) {
        this.data.cpf = cpfAdjustToInsert(this.data.cpf);
        this.data.phone = phoneAdjustToInsert(this.data.phone);
    }

    private adjustPhoneDDI()
    {
        this.data.phone = adjustPhoneDDIOnlyNumber(this.data.phone);
    }

    private verifyData()
    {
        const { age, cpf, email, login, mather, name, password, phone, status } = this.data;
        if (!Verify.email(email))
            throw new HTTPException(`"${email}" não é um e-mail válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidEmail');
        if (!Verify.phone(phone))  
            throw new HTTPException(`"${phone}" não é um telefone válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPhone');
        if(status && !Verify.statusUser(status))
            throw new HTTPException(`"${status}" não é um status válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidStatus');
        if (!Verify.nameUser(name))
            throw new HTTPException(`"${name}" não é um nome válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidName');
        if (!Verify.cpf(cpf))
            throw new HTTPException(`"${cpf}" não é um cpf válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidCPF');
        if (!Verify.login(login))
            throw new HTTPException(`"${login}" não é um login válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidLogin');
        if (!Verify.password(password))
            throw new HTTPException(`"${password}" não é uma senha válida, a senha deve conter 6 ou mais digitos`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPassword');
        if (!Verify.date(age))
            throw new HTTPException(`"${age}" não é uma data de nascimento válida`, HTTPStatus.NOT_ACCEPTABLE, 'notValidAge');
    }

    private exception(e:Error):never
    {
        if (/UNIQUE constraint failed: users.cpf/.test(e.message))
            throw new HTTPException(`Já existe um usuário com o cpf "${this.data.cpf}"`, HTTPStatus.NOT_ACCEPTABLE);
        if (/UNIQUE constraint failed: users.login/.test(e.message))
            throw new HTTPException(`Já existe um usuário com o login "${this.data.login}"`, HTTPStatus.NOT_ACCEPTABLE);
        throw e;
    }

    async result(): Promise<{ id: number; }> {
        this.verifyData();
        this.adjustPhoneDDI();
        try
        {
            const result = await this.modelUsers.insertUser(this.data);
            return result;
        }
        catch (e)
        {
            this.exception(e);
        }
    }
}

