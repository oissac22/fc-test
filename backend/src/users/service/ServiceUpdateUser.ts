import { adjustPhoneDDIOnlyNumber } from "../../entities/adjustPhoneDDIOnlyNumber";
import { cpfAdjustToInsert } from "../../entities/cpfInsert";
import { HTTPException, HTTPStatus } from "../../entities/error";
import { phoneAdjustToInsert } from "../../entities/phoneInsert";
import { Verify } from "../../entities/verify";
import { IModelUsers, IUsersDataUpdate } from "../../interfaces/IModelUsers";


export class ServiceUpdateUser {
    constructor(
        private readonly id: number,
        private readonly data: IUsersDataUpdate,
        private readonly modelUsers: IModelUsers
    ) {
        if (this.data.cpf)
            this.data.cpf = cpfAdjustToInsert(this.data.cpf);
        if (this.data.phone)
            this.data.phone = phoneAdjustToInsert(this.data.phone);
    }

    private adjustPhoneDDI()
    {
        if (this.data.phone)
            this.data.phone = adjustPhoneDDIOnlyNumber(this.data.phone);
    }

    private verifyData()
    {
        const { age, cpf, email, login, mather, name, password, phone, status } = this.data;
        if (email && !Verify.email(email))
            throw new HTTPException(`"${email}" não é um e-mail válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidEmail');
        if (phone && !Verify.phone(phone))  
            throw new HTTPException(`"${phone}" não é um telefone válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPhone');
        if(status && !Verify.statusUser(status))
            throw new HTTPException(`"${status}" não é um status válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidStatus');
        if (name && !Verify.nameUser(name))
            throw new HTTPException(`"${name}" não é um nome válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidName');
        if (cpf && !Verify.cpf(cpf))
            throw new HTTPException(`"${cpf}" não é um cpf válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidCPF');
        if (login && !Verify.login(login))
            throw new HTTPException(`"${login}" não é um login válido`, HTTPStatus.NOT_ACCEPTABLE, 'notValidLogin');
        if (password && !Verify.password(password))
            throw new HTTPException(`"${password}" não é uma senha válida, a senha deve conter 6 ou mais digitos`, HTTPStatus.NOT_ACCEPTABLE, 'notValidPassword');
        if (age && !Verify.date(age))
            throw new HTTPException(`"${age}" não é uma data de nascimento válida`, HTTPStatus.NOT_ACCEPTABLE, 'notValidAge');
    }

    async result(): Promise<void> {
        this.verifyData();
        this.adjustPhoneDDI();
        const result = this.modelUsers.updateUser(this.id, this.data);
    }
}
