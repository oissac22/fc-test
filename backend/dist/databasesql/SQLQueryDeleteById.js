"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLQueryDeleteById = void 0;
class SQLQueryDeleteById {
    id;
    table;
    constructor(id, table) {
        this.id = id;
        this.table = table;
    }
    get sql() {
        return `delete from ${this.table} where id=?`;
    }
    get propsValues() {
        return [this.id];
    }
}
exports.SQLQueryDeleteById = SQLQueryDeleteById;
