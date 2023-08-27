"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers_ListUsers = void 0;
const SQL = `SELECT id, name, email, phone
FROM users
ORDER BY name
LIMIT ?
OFFSET ?`;
const SQL_WITH_SQL = `SELECT id, name, email, phone
FROM users
WHERE id=? OR name LIKE ? OR email LIKE ? OR phone LIKE ? OR cpf LIKE ? OR mather LIKE ? OR status LIKE ?
ORDER BY name
LIMIT ?
OFFSET ?`;
class ModelUsers_ListUsers {
    props;
    database;
    constructor(props, database) {
        this.props = props;
        this.database = database;
    }
    async result() {
        if (this.props.filter) {
            const { filter } = this.props;
            const filters = (new Array(7)).fill('%' + filter.replace(/[^a-zA-Z0-9]+/g, '%') + '%');
            return await this.database.list(SQL_WITH_SQL, [...filters, this.props.limit, this.props.index]);
        }
        else {
            return await this.database.list(SQL, [this.props.limit, this.props.index]);
        }
    }
}
exports.ModelUsers_ListUsers = ModelUsers_ListUsers;
