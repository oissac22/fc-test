import { SQLQueryUpdateById } from "../../databasesql";
import { IUsersDataUpdate } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";


export class ModelUsers_Update {
    constructor(
        private readonly id: number,
        private readonly data: IUsersDataUpdate,
        private readonly database: ISQL
    ) { }

    async result(): Promise<{ id: number; }> {
        const data = { ...this.data, age: this.data.age.toISOString() };
        const sqlObj = new SQLQueryUpdateById(this.id + '', 'users', data);
        const result = await this.database.exec(
            sqlObj.sql,
            sqlObj.propsValues
        );
        return result;
    }
}
