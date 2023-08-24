import { SQLQueryDeleteById } from "../../databasesql";
import { IUsersDataUpdate } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";


export class ModelUsers_Delete {
    constructor(
        private readonly id: number,
        private readonly database: ISQL
    ) { }

    async result(): Promise<void> {
        const sqlObj = new SQLQueryDeleteById(this.id + '', 'users');
        await this.database.exec(
            sqlObj.sql,
            sqlObj.propsValues
        );
    }
}
