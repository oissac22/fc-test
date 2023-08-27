"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers_dataUserById = void 0;
const error_1 = require("../../entities/error");
const SQL = `SELECT *
FROM users
WHERE id=?`;
class ModelUsers_dataUserById {
    id;
    database;
    constructor(id, database) {
        this.id = id;
        this.database = database;
    }
    async result() {
        const result = await this.database.list(SQL, [this.id]);
        const user = result[0] || null;
        if (!user)
            throw new error_1.HTTPException(`Usuário de id ${this.id} não encontrado`, error_1.HTTPStatus.NOT_FOUND, 'userNotFound');
        const { password, ...userNoPassword } = user;
        return userNoPassword;
    }
}
exports.ModelUsers_dataUserById = ModelUsers_dataUserById;
