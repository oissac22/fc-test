"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers_Insert = void 0;
const databasesql_1 = require("../../databasesql");
const passwordCrip_1 = require("../../entities/passwordCrip");
class ModelUsers_Insert {
    data;
    database;
    constructor(data, database) {
        this.data = data;
        this.database = database;
        data.password = (0, passwordCrip_1.passwordCrip)(data.password);
    }
    async result() {
        const data = { ...this.data, age: this.data.age.toISOString() };
        const sqlObj = new databasesql_1.SQLQueryInsert('users', data);
        const result = await this.database.exec(sqlObj.sql, sqlObj.propsValues);
        return result;
    }
}
exports.ModelUsers_Insert = ModelUsers_Insert;
