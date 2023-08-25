export class Verify {

    static email(email:any)
    {
        if (typeof email !== 'string')
            return false;
        return /[^ ]+@[^ ]+\.[^ ]+/.test(email);
    }

    static phone(phoneOnlyNumber:string)
    {
        if (typeof phoneOnlyNumber !== 'string')
            return false;
        return /^\d{10,13}$/.test(phoneOnlyNumber);
    }

    static statusUser(status:string)
    {
        if (typeof status !== 'string')
            return false;
        return ["block", "inactive", "active"].indexOf(status) >= 0;
    }

    static nameUser(name:string)
    {
        if (typeof name !== 'string')
            return false;
        return /\w{2,}/.test(name);
    }

    static cpf(cpfOnlyNumber:string)
    {
        if (typeof cpfOnlyNumber !== 'string')
            return false;
        return /^\d{11}$/.test(cpfOnlyNumber);
    }

    static login(login:string)
    {
        if (typeof login !== 'string')
            return false;
        return /\w{2,}/.test(login);
    }

    static password(password:string)
    {
        if (typeof password !== 'string')
            return false;
        return /\w{6,}/.test(password);
    }

    static date(date:Date)
    {
        if (!(date instanceof Date))
            return false;
        return !!(date.getTimezoneOffset())
    }

}