import sqlite3 from 'sqlite3';
import { PATH_DATABASE } from '../config';
import { ISQL } from '../interfaces/ISQL';

export class SQLite implements ISQL {

    private dbSqlite = new sqlite3.Database(PATH_DATABASE + '/fc.db');

    list(query: string, props?: string[]): Promise<any[]>
    {
        return new Promise((res, rej) => {
            this.dbSqlite.all(query, props || [], (err, rows) => {
                if (err)
                    rej(err);
                res(rows)
            })
        });
    }

    exec(query: string, props?: string[]): Promise<any>
    {
        return new Promise((res, rej) => {
            this.dbSqlite.run(query, props || [], function(err){
                if (err)
                    rej(err);
                res({id: this.lastID});
            })
        })
    }

}