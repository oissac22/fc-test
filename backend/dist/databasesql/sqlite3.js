"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLite = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const config_1 = require("../config");
class SQLite {
    dbSqlite = new sqlite3_1.default.Database(config_1.PATH_DATABASE + '/fc.db');
    list(query, props) {
        return new Promise((res, rej) => {
            this.dbSqlite.all(query, props || [], (err, rows) => {
                if (err)
                    rej(err);
                res(rows);
            });
        });
    }
    exec(query, props) {
        return new Promise((res, rej) => {
            this.dbSqlite.run(query, props || [], function (err) {
                if (err)
                    rej(err);
                res({ id: this.lastID });
            });
        });
    }
}
exports.SQLite = SQLite;
