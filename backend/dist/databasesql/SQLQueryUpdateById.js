"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLQueryUpdateById = void 0;
class SQLQueryUpdateById {
    id;
    table;
    attrs;
    constructor(id, table, attrs) {
        this.id = id;
        this.table = table;
        this.attrs = attrs;
    }
    get validAttrs() {
        let props = {};
        Object.entries(this.attrs).map(([key, value]) => {
            if (value !== '' && value !== null && value !== undefined) {
                props[key] = value;
            }
        });
        return { ...props };
    }
    get sql() {
        const keys = Object.keys(this.validAttrs);
        return `update ${this.table} set ${keys.map(key => `${key}=?`).join(',')} where id=?`;
    }
    get propsValues() {
        const values = Object.values(this.validAttrs);
        return [...values, this.id];
    }
}
exports.SQLQueryUpdateById = SQLQueryUpdateById;
