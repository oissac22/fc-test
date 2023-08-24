import { cpfAdjustToInsert } from "../../entities/cpfInsert";
import { HTTPException, HTTPStatus } from "../../entities/error";
import { phoneAdjustToInsert } from "../../entities/phoneInsert";
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
        if ( this.data.phone.length <= 11 )
            this.data.phone = '55' + this.data.phone;
    }

    private verifyData()
    {
        const { age, cpf, email, login, mather, name, password, phone, status } = this.data;
        if (!/[^ ]+@[^ ]+\.[^ ]+/.test(email))
            throw new HTTPException(`"${email}" não é um e-mail válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidEmail');
        if (!/^\d{10,13}$/.test(phone))  
            throw new HTTPException(`"${phone}" não é um telefone válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPhone');
        if(status && ["block", "inactive", "active"].indexOf(status) < 0)
            throw new HTTPException(`"${status}" não é um status válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidStatus');
        if (!/\w{2,}/.test(name))
            throw new HTTPException(`"${name}" não é um nome válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidName');
        if (!/^\d{11}$/.test(cpf))
            throw new HTTPException(`"${cpf}" não é um cpf válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidCPF');
        if (!/\w{2,}/.test(login))
            throw new HTTPException(`"${login}" não é um login válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidLogin');
        if (!/\w{6,}/.test(password))
            throw new HTTPException(`"${password}" não é uma senha válida, a senha deve conter 6 ou mais digitos`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPassword');
        if (!(age.getTimezoneOffset()))
            throw new HTTPException(`"${age}" não é uma data de nascimento válida`, HTTPStatus.NOT_ACCEPTABLE, 'notValidAge');
    }

    async result(): Promise<{ id: number; }> {
        this.verifyData();
        this.adjustPhoneDDI();
        const result = this.modelUsers.insertUser(this.data);
        return result;
    }
}
