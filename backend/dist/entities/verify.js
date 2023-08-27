"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
class Verify {
    static email(email) {
        if (typeof email !== 'string')
            return false;
        return /[^ ]+@[^ ]+\.[^ ]+/.test(email);
    }
    static phone(phoneOnlyNumber) {
        if (typeof phoneOnlyNumber !== 'string')
            return false;
        return /^\d{10,13}$/.test(phoneOnlyNumber);
    }
    static statusUser(status) {
        if (typeof status !== 'string')
            return false;
        return ["block", "inactive", "active"].indexOf(status) >= 0;
    }
    static nameUser(name) {
        if (typeof name !== 'string')
            return false;
        return /\w{2,}/.test(name);
    }
    static cpf(cpfOnlyNumber) {
        if (typeof cpfOnlyNumber !== 'string')
            return false;
        return /^\d{11}$/.test(cpfOnlyNumber);
    }
    static login(login) {
        if (typeof login !== 'string')
            return false;
        return /\w{2,}/.test(login);
    }
    static password(password) {
        if (typeof password !== 'string')
            return false;
        return /\w{6,}/.test(password);
    }
    static date(date) {
        if (!(date instanceof Date))
            return false;
        return !!(date.getTimezoneOffset());
    }
}
exports.Verify = Verify;
