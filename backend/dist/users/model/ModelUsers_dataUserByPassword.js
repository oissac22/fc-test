"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers_dataUserByPassword = void 0;
const error_1 = require("../../entities/error");
const passwordCrip_1 = require("../../entities/passwordCrip");
const SQL = `SELECT *
FROM users
WHERE login=? AND password=?`;
class ModelUsers_dataUserByPassword {
    login;
    password;
    database;
    constructor(login, password, database) {
        this.login = login;
        this.password = password;
        this.database = database;
    }
    async result() {
        const result = await this.database.list(SQL, [this.login, (0, passwordCrip_1.passwordCrip)(this.password)]);
        const user = result[0] || null;
        if (!user)
            throw new error_1.HTTPException(`Login ou senha inválida`, error_1.HTTPStatus.NOT_FOUND, 'loginNotFound');
        const { password, ...userNoPassword } = user;
        return userNoPassword;
    }
}
exports.ModelUsers_dataUserByPassword = ModelUsers_dataUserByPassword;
