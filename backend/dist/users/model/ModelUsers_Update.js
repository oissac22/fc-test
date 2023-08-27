"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers_Update = void 0;
const databasesql_1 = require("../../databasesql");
const passwordCrip_1 = require("../../entities/passwordCrip");
class ModelUsers_Update {
    id;
    data;
    database;
    constructor(id, data, database) {
        this.id = id;
        this.data = data;
        this.database = database;
        if (data.password)
            data.password = (0, passwordCrip_1.passwordCrip)(data.password);
    }
    async result() {
        const data = { ...this.data, age: this.data.age?.toISOString() || undefined, dateUpdate: (new Date()).toISOString() };
        const sqlObj = new databasesql_1.SQLQueryUpdateById(this.id + '', 'users', data);
        await this.database.exec(sqlObj.sql, sqlObj.propsValues);
    }
}
exports.ModelUsers_Update = ModelUsers_Update;
