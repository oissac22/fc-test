"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUpdateUser = void 0;
const adjustPhoneDDIOnlyNumber_1 = require("../../entities/adjustPhoneDDIOnlyNumber");
const cpfInsert_1 = require("../../entities/cpfInsert");
const error_1 = require("../../entities/error");
const phoneInsert_1 = require("../../entities/phoneInsert");
const verify_1 = require("../../entities/verify");
class ServiceUpdateUser {
    id;
    data;
    modelUsers;
    constructor(id, data, modelUsers) {
        this.id = id;
        this.data = data;
        this.modelUsers = modelUsers;
        if (this.data.cpf)
            this.data.cpf = (0, cpfInsert_1.cpfAdjustToInsert)(this.data.cpf);
        if (this.data.phone)
            this.data.phone = (0, phoneInsert_1.phoneAdjustToInsert)(this.data.phone);
    }
    adjustPhoneDDI() {
        if (this.data.phone)
            this.data.phone = (0, adjustPhoneDDIOnlyNumber_1.adjustPhoneDDIOnlyNumber)(this.data.phone);
    }
    verifyData() {
        const { age, cpf, email, login, mather, name, password, phone, status } = this.data;
        if (email && !verify_1.Verify.email(email))
            throw new error_1.HTTPException(`"${email}" não é um e-mail válido`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidEmail');
        if (phone && !verify_1.Verify.phone(phone))
            throw new error_1.HTTPException(`"${phone}" não é um telefone válido`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidPhone');
        if (status && verify_1.Verify.statusUser(status))
            throw new error_1.HTTPException(`"${status}" não é um status válido`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidStatus');
        if (name && !verify_1.Verify.nameUser(name))
            throw new error_1.HTTPException(`"${name}" não é um nome válido`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidName');
        if (cpf && !verify_1.Verify.cpf(cpf))
            throw new error_1.HTTPException(`"${cpf}" não é um cpf válido`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidCPF');
        if (login && !verify_1.Verify.login(login))
            throw new error_1.HTTPException(`"${login}" não é um login válido`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidLogin');
        if (password && !verify_1.Verify.password(password))
            throw new error_1.HTTPException(`"${password}" não é uma senha válida, a senha deve conter 6 ou mais digitos`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidPassword');
        if (age && !verify_1.Verify.date(age))
            throw new error_1.HTTPException(`"${age}" não é uma data de nascimento válida`, error_1.HTTPStatus.NOT_ACCEPTABLE, 'notValidAge');
    }
    async result() {
        this.verifyData();
        this.adjustPhoneDDI();
        const result = this.modelUsers.updateUser(this.id, this.data);
    }
}
exports.ServiceUpdateUser = ServiceUpdateUser;
