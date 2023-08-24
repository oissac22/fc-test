import { SQLQueryDeleteById } from "../../databasesql";
import { IUsersDataUpdate } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";


export class ModelUsers_Delete {
    constructor(
        private readonly id: number,
        private readonly database: ISQL
    ) { }

    async result(): Promise<{ id: number; }> {
        const sqlObj = new SQLQueryDeleteById(this.id + '', 'users');
        const result = await this.database.exec(
            sqlObj.sql,
            sqlObj.propsValues
        );
        return result;
    }
}
