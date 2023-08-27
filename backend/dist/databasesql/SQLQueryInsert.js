"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLQueryInsert = void 0;
class SQLQueryInsert {
    table;
    attrs;
    constructor(table, attrs) {
        this.table = table;
        this.attrs = attrs;
    }
    get validAttrs() {
        let props = {};
        Object.entries(this.attrs).map(([key, value]) => {
            if (value !== null && value !== undefined) {
                props[key] = value;
            }
        });
        return props;
    }
    get sql() {
        const keys = Object.keys(this.validAttrs);
        return `insert into ${this.table} (${keys.join(',')}) values (${keys.fill('?').join(',')})`;
    }
    get propsValues() {
        const values = Object.values(this.validAttrs);
        return values;
    }
}
exports.SQLQueryInsert = SQLQueryInsert;
