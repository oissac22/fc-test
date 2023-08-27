"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers_Delete = void 0;
const databasesql_1 = require("../../databasesql");
class ModelUsers_Delete {
    id;
    database;
    constructor(id, database) {
        this.id = id;
        this.database = database;
    }
    async result() {
        const sqlObj = new databasesql_1.SQLQueryDeleteById(this.id + '', 'users');
        await this.database.exec(sqlObj.sql, sqlObj.propsValues);
    }
}
exports.ModelUsers_Delete = ModelUsers_Delete;
